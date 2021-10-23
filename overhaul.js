import Task from './taskObj.js'; 
import createTaskDom, { createProjectListDom } from './dom.js';
import { projectInput } from './taskObj.js';
// add task to list and project name to project array 
const taskBtn = document.getElementById('task-btn');
const closeBtn = document.getElementById('close-btn');
const addBtn = document.getElementById('add-btn'); 
export const taskList = document.getElementById('task-list');
// task library 
export let myTasks = [];
let myProjects = [];

// let unique = new UniqueArray(myTasks);
// console.log(unique);

//  opens pop-up form 
taskBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    openForm(); 
}); 

function openForm() {
    document.getElementById('myForm').style.display = 'block'; 
}

// closes pop-up form 
closeBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    closeForm(); 
});

function closeForm() {
    document.getElementById('myForm').style.display = 'none';
}

// on button click creates task object 
addBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    createTask(); 
    createProjects(); 
    saveLocal('tasks', myTasks); 
    saveLocal('projects', myProjects); 
});

// creates task 
function createTask() {
    const task = new Task(); 
    // push object to array 
    pushObject(myTasks, task)
    // creates DOM elements 
    createTaskDom(task);  
}

function pushObject(arr, obj) {
    arr.push(obj)
}

// delegates commands 
function createProjects() {
    const projectName = projectInput.value; 
    checkItem(projectName); 
}

// checks array for duplicates and creates project list 
function checkItem(item) {
    if(myProjects.indexOf(item) === -1) {
        myProjects.push(item);
        createProjectListDom(item); 
        console.log(myProjects); 
    }
}
// sets object to local storage 
function saveLocal(name, arr) {
    localStorage.setItem(name, JSON.stringify(arr)); 
}

localStorageItems(); 

// checks if tasks array is empty if it's not generate tasks 
function localStorageItems() {
    if(getItemsFromStorage('tasks') === null || getItemsFromStorage('projects') === null) {
        myTasks = [];
        myProjects = [];
    } else {
        const tasksFromStorage = getItemsFromStorage('tasks'); 
        myTasks = tasksFromStorage;
        console.log(myTasks); 
        const projectsFromStorage = getItemsFromStorage('projects')
        myProjects = projectsFromStorage; 
        console.log(myProjects);
        // creates from existing library 
        createItemsFromStorage(myTasks); 
        createItemsFromStorage(myProjects);
    }
}

function getItemsFromStorage(str) {
    return JSON.parse(localStorage.getItem(str))
}

function createItemsFromStorage(arr) {
    switch(arr) {
        case myTasks:
            for(let i = 0; i < arr.length; i++) {
                createTaskDom(arr[i]); 
            }
            break;
        case myProjects:
            for(let i = 0; i < arr.length; i++) {
                createProjectListDom(arr[i]); 
            } 
    }
}
/*
function createProjectListDom(arr) {
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
    // checks if array item is the same 
    projectName.textContent = arr[0]; // change later 
    //console.log(arr.every(projectName.textContent));
    projectsList.appendChild(projectsListItem); 
    projectsListItem.appendChild(projectName); 
}
// checks if tasks array is empty if it's not generate tasks 
if(localStorage.getItem('tasks') === null) {
    myTasks = []; 
    myProjects = [];
} else {
    const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')); 
    myTasks = tasksFromStorage; 
    myProjects = [...new Set(myTasks.map(item => item.project))]; // unique projects only
    // creates from existing library 
    for(let i = 0; i < myTasks.length; i++) {
        createTask(myTasks[i]);
    }
    for(let i = 0; i < myProjects.length; i++) {
        createProjectList(myProjects[i]); 
    }
}
*/
