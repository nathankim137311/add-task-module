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
export let myProjects = [];
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
    createIterators();
    saveLocal('tasks', myTasks); 
    saveLocal('projects', myProjects); 
});

// creates numbers of repeated key values 
function createIterators() {
    const occurrencesArr = createOccurrencesArray();
    console.log(occurrencesArr);
    // add number via DOM
    createDomElements(occurrencesArr); 
}

function createDomElements(arr) {
    for(let i = 0; i < arr.length; i++) {
        const numberArray = Array.from(document.querySelectorAll('.number-of-tasks')); 
        numberArray[i].textContent = arr[i];   
        console.log('working');
    }
}

// displays the number of tasks a project has
function createOccurrencesArray() {
    const occurrenceArr = findOcc(myTasks, 'project');
    const arr = [];
    occurrenceArr.forEach((obj)=>{
        arr.push(obj.occurrence);
    })
    return arr
}

// finds occurances of repeated key values in array of objects 
function findOcc(arr, key) {
    let arr2 = [];
    arr.forEach((x) => {
        if(arr2.some((val)=>{ return val[key] == x[key] })) {
            arr2.forEach((k)=>{
                if(k[key] === x[key]) {
                    k['occurrence']++
                }
            })
        } else {
            let a = {}
            a[key] = x[key]
            a["occurrence"] = 1
            arr2.push(a);
        }
    });
    return arr2
}

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
    }
}

// when page loads populate the page 
window.onload = function() {
    localStorageItems(); 
    createIterators(); 
}
// save to local storage 
// checks if tasks array is empty if it's not generate tasks 
function localStorageItems() {
    if(getItemsFromStorage('tasks') === null || getItemsFromStorage('projects') === null) {
        myTasks = [];
        myProjects = [];
    } else {
        const tasksFromStorage = getItemsFromStorage('tasks'); 
        myTasks = tasksFromStorage;
        const projectsFromStorage = getItemsFromStorage('projects')
        myProjects = projectsFromStorage; 
        // creates from existing library 
        createItemsFromStorage(myTasks); 
        createItemsFromStorage(myProjects);
    }
}

// sets object to local storage 
export default function saveLocal(name, arr) {
    localStorage.setItem(name, JSON.stringify(arr)); 
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
