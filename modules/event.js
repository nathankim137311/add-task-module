//////////////////////////
// event listener class //
//////////////////////////

import Utility from "./utility.js";

export default class Event {
    // form buttons // 
    // adds task
    static addBtn() {
        const addBtn = document.getElementById('add-btn'); 
        addBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            // inputs 
            const titleInput = document.getElementById('title-input');
            const projectInput = document.getElementById('project-input'); 
            const priorityInput = document.getElementById('priority-input'); 
            const title = titleInput.value;
            const project = projectInput.value;
            const priority = priorityInput.value; 
            Utility.createNewTask(); 
        });
    }
    // opens pop-up form 
    static taskBtn() {
        const taskBtn = document.getElementById('task-btn');
        taskBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            document.getElementById('myForm').style.display = 'block'; 
            }); 
    }
    // closes pop-up form 
    static closeBtn() {
        const closeBtn = document.getElementById('close-btn');
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            document.getElementById('myForm').style.display = 'none';
            });
    }
    // task buttons //
    static trashBtn() {
        const trashBtn = document.getElementById('trash-btn'); 
        trashBtn.addEventListener('click', () => {
            const taskPosition = myTasks.indexOf(obj);
            myTasks.splice(taskPosition, 1); 
            taskItems.remove(); 
            saveLocal('tasks', myTasks); 
            saveLocal('projects', myProjects);  
        });  
    }
    // project button //
    static deleteBtn() {
        const deleteBtn = document.getElementById('delete-btn'); 
        deleteBtn.addEventListener('click', () => {
            confirmDelete(e); 
        });
    }
    // when link is clicked populates container with tasks
    static relevantTasks() {
        const projectLink = document.getElementById('project-link'); 
        projectLink.addEventListener('click', (e) => {
            const projectName = e.target.textContent; 
            const projectNameH2 = document.getElementById('project-name'); 
            projectNameH2.textContent = projectName.toUpperCase(); 
            replaceProjectList(projectName);
        });
    }
}