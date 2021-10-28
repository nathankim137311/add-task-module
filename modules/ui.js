import Event from "./event.js";
import { tasksArr } from "./task.js";
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
    static loadTaskBtns() {
        if(tasksArr !== null) {
            Event.trashBtn(); 
        } 
    }
    static loadProjectBtns() {
        if(tasksArr !== null) {
            Event.deleteBtn(); 
        } 
    }
    static createTaskDom(obj) {   
        const taskList = document.getElementById('task-list');
        const taskItems = document.createElement('li'); 
        taskItems.classList.add('task-items');
        taskItems.setAttribute('id', 'task-' + tasksArr.indexOf(obj))
        const taskTitle = document.createElement('h3'); 
        taskTitle.textContent = obj.title;
        const taskPriority = document.createElement('p');
        taskPriority.textContent = obj.priority; 
        // trash button 
        const trashBtn = document.createElement('button'); 
        trashBtn.setAttribute('id', 'trash-btn'); 
        trashBtn.classList.add('btn'); 
        trashBtn.textContent = 'delete'; 
        taskItems.append(taskTitle, taskPriority, trashBtn); 
        taskList.appendChild(taskItems); 
        // add event listener to buttons
        UI.loadTaskBtns(obj); 
    }
    static createProjectListDom(str) {
        const projectList = document.getElementById('projects-list'); 
        const projectListItem = document.createElement('li'); 
        projectListItem.classList.add('project-items'); 
        projectListItem.setAttribute('id', 'project-' + myProjects.indexOf(str)); 
        const projectListItemDiv = document.createElement('div'); 
        projectListItemDiv.classList.add('number-of-tasks');
        const projectListItemP = document.createElement('p');
        projectListItemP.textContent = '';
        const projectLink = document.createElement('a');
        projectLink.classList.add('project-links'); 
        projectLink.setAttribute('href', '#');
        projectLink.setAttribute('project-link'); 
        // trash button 
        const trashBtn = document.createElement('button'); 
        trashBtn.setAttribute('delete-btn')
        trashBtn.classList.add('btn'); 
        trashBtn.textContent = 'delete'; 
        projectLink.textContent = str; // change later 
        projectList.appendChild(projectListItem);
        projectListItemDiv.appendChild(projectListItemP); 
        projectListItem.append(projectListItemDiv, projectLink, trashBtn);
        // add event listener to buttons 
        UI.loadProjectBtns();
    }
}
