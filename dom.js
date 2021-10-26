import { myTasks, myProjects, taskList } from "./overhaul.js";
import saveLocal from "./overhaul.js";
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
    // trash button 
    const trashBtn = document.createElement('button'); 
    trashBtn.classList.add('trash-btn'); 
    trashBtn.textContent = 'delete'; 
    // deletes project item and saves to local
    trashBtn.addEventListener('click', (e)=>{
        // prompt user 
        confirmDelete(e); 
    }); 
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
    projectListItem.append(projectListItemDiv, projectLink, trashBtn); 
}

function confirmDelete(event) {
    const currentParent = event.target.parentElement;
    let projectKeyValue = event.target.parentElement.textContent;
    projectKeyValue = projectKeyValue.replace('delete', '');
    projectKeyValue = projectKeyValue.replace(/[0-9]/, ''); 
    console.log(currentParent); 
    console.log(projectKeyValue); 
    if(confirm('delete project and its contents?')) {
        let myTasksDuplicate = myTasks.slice();
        let myProjectsDuplicate = myProjects.slice();  
        currentParent.remove(); 
        myTasksDuplicate = removeSpecificTasks(myTasks, projectKeyValue);
        console.log(myTasksDuplicate); 
        myProjectsDuplicate = deleteSpecificProjects(myProjects, projectKeyValue);
        console.log(myProjectsDuplicate); 
        saveLocal('tasks', myTasksDuplicate); 
        saveLocal('projects', myProjectsDuplicate);
        /*
        const taskPosition = myProjects.indexOf(e.target.textContent);
        myProjects.splice(taskPosition, 1); 
        projectListItem.remove(); 
        saveLocal('tasks', myTasks); 
        saveLocal('projects', myProjects);
        */
    } else {
        // do nothing 
    }
}

function removeSpecificTasks(arr, str) {
    arr.filter((el)=>{
        return el.project != str; 
    });
}
/*
function removeSpecificItems (arr, key, val) {
    const index = arr.findIndex(obj => obj[key] === val);
    return index >= 0 ? [
        ...arr.slice(0, index),
        ...arr.slice(index + 1)
    ] : arr;
}
function deleteSpecificTasks(arr, value) {
    return newArr;
    // return arr.filter(e => e.value != value); 
}
*/

function deleteSpecificProjects(arr, value) {
    return arr.filter(e => e !== value)
}

// sorts tasks by project name 
function replaceProjectList(name) {
    deleteTaskList();
    const specificProject = filter(name); 
    createNewProjectList(specificProject);
}

export function deleteTaskList() {
    document.getElementById('task-list').innerHTML = ''; 
}

function filter(name) {
    const specificProject = myTasks.filter(task => task.project == name);
    return specificProject
}

export function createNewProjectList(project) {
    for(let i = 0; i < project.length; i++) {
        createTaskDom(project[i]);  
    }
}

export default createTaskDom