import { myTasks, myProjects } from "./overhaul.js";
import { taskList } from "./overhaul.js";
import saveLocal from "./overhaul.js"
// creates task item via DOM 
export function createTaskDom(obj) {   
    const taskItems = document.createElement('li'); 
    taskItems.classList.add('task-items');
    taskItems.setAttribute('id', 'task-' + myTasks.indexOf(obj))
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
        // console.log(arrayContains(myProjects, obj.project)); 
        myTasks.splice(taskPosition, 1); 
        taskItems.remove(); 
        saveLocal('tasks', myTasks); 
        saveLocal('projects', myProjects); 
    }); 
    taskItems.append(taskTitle, taskPriority, trashBtn); 
    taskList.appendChild(taskItems); 
}
// adds project to project list 
export function createProjectListDom(str) {
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
        // when link is clicked populates container with corresponding tasks
        projectLink.addEventListener('click', (e)=>{
            const projectName = e.target.textContent; 
            const projectNameH2 = document.getElementById('project-name'); 
            projectNameH2.textContent = projectName.toUpperCase(); 
            replaceProjectList(projectName);
        });
        projectLink.textContent = str; // change later 
        projectList.appendChild(projectListItem);
        projectListItemDiv.appendChild(projectListItemP); 
        projectListItem.append(projectListItemDiv, projectLink); 
}

// sorts tasks by project name 
function replaceProjectList(name) {
    deleteProjectList();
    const specificProject = filter(name); 
    createNewProjectList(specificProject);
}

function deleteProjectList() {
    document.getElementById('task-list').innerHTML = ''; 
}

function filter(name) {
    const specificProject = myTasks.filter(task => task.project == name);
    return specificProject
}

function createNewProjectList(project) {
    for(let i = 0; i < project.length; i++) {
        createTaskDom(project[i]);  
    }
}

export default createTaskDom