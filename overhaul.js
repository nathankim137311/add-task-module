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
const myProjects = [];

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
});

// creates task 
function createTask() {
    const task = new Task(); 
    // push object to array 
    pushObject(myTasks, task)
    // creates DOM elements 
    createTaskDom(task); 
    // sets object to local storage 
    saveLocal('tasks', myTasks); 
}

function pushObject(arr, obj) {
    arr.push(obj)
}

// delegates commands 
function createProjects() {
    const projectName = projectInput.value; 
    const projectNames = [];
    projectNames.push(projectName); 
    checkArray(projectName, projectName);
}

// loops over array and checks item
function checkArray(arr, item) {
    for(let i = 0; i < arr.length; i++) {
        checkItem(item); 
    }
}

// checks array for duplicates
function checkItem(item) {
    if(myProjects.indexOf(item) === -1) {
        myProjects.push(item);
        createProjectListDom(item); 
    }
}
// sets object to local storage 
function saveLocal(name, arr) {
    localStorage.setItem(name, JSON.stringify(arr)); 
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
