// imports
import Event from "./event.js";
import { taskArr } from "./storage.js";
import Utility from "./utility.js";
import Counter from "./counter.js";
import Status from "./status.js";
//////////////////
// Todo List UI //
//////////////////
export default class UI {
    // LOADING CONTENT
    static loadFormBtns() {
        Event.allTasksLink();
        Event.addBtn(); 
        Event.taskBtn();
        Event.closeBtn();
    }
    static createTaskDom(obj) {   
        // project 
        const taskProject = document.createElement('h4');
        taskProject.classList.add('task-projects'); 
        taskProject.textContent = `${obj.project}`; 
        const taskList = document.getElementById('task-list');
        // task item container 
        const taskItems = document.createElement('li'); 
        taskItems.classList.add('task-items');
        // task item div 
        const taskItemDiv = document.createElement('div');
        taskItemDiv.setAttribute('id', taskArr.indexOf(obj));
        taskItemDiv.classList.add('tasks'); 
        taskItemDiv.addEventListener('click', (e) => {
            let idNum = e.target.id;
            const specificItem = document.getElementById(`task-details-${idNum}`)
            if(specificItem !== null) {
                specificItem.classList.toggle('active');
            }
        });
        // check button  
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML = '<span class="material-icons">done</span>';
        completedBtn.classList.add('complete-btn');
        completedBtn.addEventListener('click', (e) => { // modify later 
            const todo = e.target.parentNode.parentNode.parentNode; 
            Status.toggleStates(obj, todo);
        });
        // title 
        const taskTitle = document.createElement('h3'); 
        taskTitle.classList.add('task-titles');
        taskTitle.textContent = obj.title;
        // border color based on priority
        this.borderLeftColor(taskItems, obj.priority);
        // trash button 
        const trashBtn = document.createElement('button'); 
        trashBtn.classList.add('btn'); 
        trashBtn.textContent = 'trash'; 
        trashBtn.addEventListener('click', () => {
            console.log(obj.id);
            Utility.deleteTask(obj);
            Counter.updateCounters();
            Status.saveStates();
            trashBtn.parentNode.parentNode.remove(); 
        });
        // description 
        const taskDetailsDiv = document.createElement('div');
        const taskDetailsP = document.createElement('p');
        taskDetailsP.textContent = `description: ${obj.description}`;  
        taskDetailsDiv.setAttribute('id', 'task-details-' + taskArr.indexOf(obj)); 
        taskDetailsDiv.classList.add('active');
        taskDetailsDiv.classList.add('task-details'); 
        // append 
        taskItems.append(taskItemDiv, taskDetailsDiv);
        taskItemDiv.append(completedBtn, taskProject, taskTitle, trashBtn); 
        taskDetailsDiv.appendChild(taskDetailsP);
        taskList.appendChild(taskItems); 
    }
    static deleteTaskDom(str) {
        const taskProjectsArr = [...document.querySelectorAll('.task-projects')];
        for(let i = 0; i < taskProjectsArr.length; i++) {
            if(taskProjectsArr[i].textContent === str) {
                taskProjectsArr[i].parentNode.parentNode.remove();
            }
        }
    }
    static borderLeftColor(obj, priority) {
        switch(priority.toLowerCase()) {
            case 'high':
                obj.style.borderLeft = '3px solid red'; 
                break; 
            case 'medium':
                obj.style.borderLeft = '3px solid yellow';
                break;
            case 'low':   
                obj.style.borderLeft = '3px solid green';
                break;
        }
    }
    static clearTaskList() {
        document.getElementById('task-list').innerHTML = ''; 
    }
    static createProjectListDom(str) {
        const projectList = document.getElementById('projects-list'); 
        const projectListItem = document.createElement('li');
        projectListItem.setAttribute('id', str); 
        projectListItem.classList.add('project-items'); 
        const projectListItemDiv = document.createElement('div'); 
        projectListItemDiv.classList.add('counts-div');
        const projectListItemP = document.createElement('p');
        projectListItemP.classList.add('counts'); 
        projectListItemP.textContent = '0';
        // project link
        const projectLink = document.createElement('a');
        projectLink.addEventListener('click', () => {
            Utility.filterTasksByProject(str); 
        });
        projectLink.classList.add('project-links'); 
        projectLink.setAttribute('href', '#');
        // trash button 
        const deleteBtn = document.createElement('button'); 
        deleteBtn.addEventListener('click', (e) => {
            str = e.target.parentNode.id;
            Utility.confirmDelete(deleteBtn, str);
        });
        deleteBtn.classList.add('btn'); 
        deleteBtn.textContent = 'delete'; 
        projectLink.textContent = str;
        projectList.appendChild(projectListItem);
        projectListItemDiv.appendChild(projectListItemP); 
        projectListItem.append(projectListItemDiv, projectLink, deleteBtn);
    }
}
