import { myTasks } from "./overhaul.js";
import { taskList } from "./overhaul.js";
import { projectInput } from "./taskObj.js";
// creates task item via DOM 
export function createTaskDom(obj) {   
    const taskItems = document.createElement('li'); 
    taskItems.classList.add('task-items');
    taskItems.setAttribute('id', myTasks.indexOf(obj))
    const taskTitle = document.createElement('h3'); 
    taskTitle.textContent = obj.title;
    const taskPriority = document.createElement('p');
    taskPriority.textContent = obj.priority; 
    const trashBtn = document.createElement('button'); 
    trashBtn.classList.add('trash-btn'); 
    trashBtn.textContent = 'delete'; 
    // deletes task item and saves to local
    trashBtn.addEventListener('click', (e)=>{
        const taskPosition = myTasks.indexOf(obj); 
        myTasks.splice(taskPosition, 1); 
        taskItems.remove(); 
    }); 
    taskItems.append(taskTitle, taskPriority, trashBtn); 
    taskList.appendChild(taskItems); 
}
// adds project to project list 
export function createProjectListDom(str) {
        const projectsList = document.getElementById('projects-list'); 
        const projectsListItem = document.createElement('li'); 
        const projectName = document.createElement('a');
        projectName.classList.add('projects'); 
        projectName.setAttribute('href', '#');
        projectName.addEventListener('click', (e)=>{
            const projectNameH2 = document.getElementById('project-name'); 
            projectNameH2.textContent = e.target.textContent + ' ' + 'Tasks'; 
            // display tasks associated with project
            replaceProjectList(e.target.textContent);
        });
        projectName.textContent = str; // change later 
        projectsList.appendChild(projectsListItem); 
        projectsListItem.appendChild(projectName); 
}
export default createTaskDom