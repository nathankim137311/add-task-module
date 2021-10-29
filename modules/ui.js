// imports
import Event from "./event.js";
import { projectArr, taskArr } from "./storage.js";
import Utility, {Counter} from "./utility.js";
//////////////////
// Todo List UI //
//////////////////
export default class UI {
    // LOADING CONTENT
    static loadFormBtns() {
        Event.addBtn(); 
        Event.taskBtn();
        Event.closeBtn();
    }
    static createTaskDom(obj) {   
        const taskList = document.getElementById('task-list');
        const taskItems = document.createElement('li'); 
        taskItems.classList.add('task-items');
        taskItems.setAttribute('id', 'task-' + taskArr.indexOf(obj))
        const taskTitle = document.createElement('h3'); 
        taskTitle.classList.add('task-titles')
        taskTitle.textContent = obj.title;
        const taskPriority = document.createElement('p');
        taskPriority.textContent = obj.priority; 
        // trash button 
        const trashBtn = document.createElement('button'); 
        trashBtn.addEventListener('click', () => {
            Utility.deleteTask(obj);  
            trashBtn.parentNode.remove(); 
            Counter.updateCounters(); 
        });
        trashBtn.classList.add('btn'); 
        trashBtn.textContent = 'trash'; 
        taskItems.append(taskTitle, taskPriority, trashBtn); 
        taskList.appendChild(taskItems); 
    }
    static deleteTaskDom(str) { // modify later 
        const taskItemsArr = [...document.querySelectorAll('.task-titles')];
        taskItemsArr.forEach(item => {
            // if title matches string delete task item 
            item.parentNode.remove();
        });
    }
    static clearTaskList() {
        document.getElementById('task-list').innerHTML = ''; 
    }
    static createProjectListDom(str) {
        const projectList = document.getElementById('projects-list'); 
        const projectListItem = document.createElement('li'); 
        projectListItem.classList.add('project-items'); 
        const projectListItemDiv = document.createElement('div'); 
        projectListItemDiv.classList.add('number-of-tasks');
        const projectListItemP = document.createElement('p');
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
        deleteBtn.addEventListener('click', () => {
            Utility.deleteProject(str);
            deleteBtn.parentNode.remove();
            Counter.updateCounters();  
        });
        deleteBtn.classList.add('btn'); 
        deleteBtn.textContent = 'delete'; 
        projectLink.textContent = str;
        projectList.appendChild(projectListItem);
        projectListItemDiv.appendChild(projectListItemP); 
        projectListItem.append(projectListItemDiv, projectLink, deleteBtn);
    }
}
