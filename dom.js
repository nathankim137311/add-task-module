import { myTasks, myProjects } from "./overhaul.js";
import { taskList } from "./overhaul.js";
import saveLocal from "./overhaul.js"
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
        // console.log(arrayContains(myProjects, obj.project)); 
        myTasks.splice(taskPosition, 1); 
        taskItems.remove(); 
        saveLocal('tasks', myTasks); 
        saveLocal('projects', myProjects); 
    }); 
    taskItems.append(taskTitle, taskPriority, trashBtn); 
    taskList.appendChild(taskItems); 
}

/*
// deletes project from local storage 
function arrayContains(arr, str) {
    if(arr.indexOf(str) > -1) {
        console.log('i don\'t know what this does');
    } else {
        console.log('i don\'t care what people think'); 
    }
}
*/
// adds project to project list 
export function createProjectListDom(str) {
        const projectsList = document.getElementById('projects-list'); 
        const projectsListItem = document.createElement('li'); 
        const projectLink = document.createElement('a');
        projectLink.classList.add('projects'); 
        projectLink.setAttribute('href', '#');
        // when link is clicked populates container with corresponding tasks
        projectLink.addEventListener('click', (e)=>{
            const projectName = e.target.textContent; 
            const projectNameH2 = document.getElementById('project-name'); 
            projectNameH2.textContent = projectName.toUpperCase() + ' ' + 'Tasks'; 
            replaceProjectList(projectName);
        });
        projectLink.textContent = str; // change later 
        projectsList.appendChild(projectsListItem); 
        projectsListItem.appendChild(projectLink); 
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