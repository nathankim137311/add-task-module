import Event from "./event.js";
//////////////////
// Todo List UI //
//////////////////
export default class UI {
    // LOADING CONTENT
    static loadBtns() {
        Event.addBtn(); 
        Event.taskBtn();
        Event.closeBtn(); 
    }
    static loadTaskBtns() {
        Event.trashBtn(); 
    }
    static loadProjectBtns() {
        Event.deleteBtn(); 
        Event.relevantTasks(); 
    }
    static createTaskDom(obj) {   
        const taskItems = document.createElement('li'); 
        taskItems.classList.add('task-items');
        taskItems.setAttribute('id', 'task-' + myTasks.indexOf(obj))
        const taskTitle = document.createElement('h3'); 
        taskTitle.textContent = obj.title;
        const taskPriority = document.createElement('p');
        taskPriority.textContent = obj.priority; 
        // trash button 
        const trashBtn = document.createElement('button'); 
        trashBtn.setAttribute('delete-btn'); 
        trashBtn.classList.add('btn'); 
        trashBtn.textContent = 'delete'; 
        taskItems.append(taskTitle, taskPriority, trashBtn); 
        taskList.appendChild(taskItems); 
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
        trashBtn.setAttribute('trash-btn')
        trashBtn.classList.add('btn'); 
        trashBtn.textContent = 'delete'; 
        projectLink.textContent = str; // change later 
        projectList.appendChild(projectListItem);
        projectListItemDiv.appendChild(projectListItemP); 
        projectListItem.append(projectListItemDiv, projectLink, trashBtn); 
    }
}
