import Task from './object.js'; 
import { projectInput } from './object.js';
import createTaskDom, { createProjectListDom } from './dom.js';
// add task to list and project name to project array 
const taskBtn = document.getElementById('task-btn');
const closeBtn = document.getElementById('close-btn');
const addBtn = document.getElementById('add-btn'); 
const allTasksLink = document.getElementById('all-tasks-link');
export const taskList = document.getElementById('task-list');
// task library 
export let myTasks = [];
export let myProjects = [];
// all tasks link 
allTasksLink.addEventListener('click', (e) => {
   /*
    // populate all tasks
    getItemsFromStorage('projects'); 
    let myTasks = getItemsFromStorage('tasks'); 
    const projectName = e.target.textContent; 
    const projectNameH2 = document.getElementById('project-name'); 
    projectNameH2.textContent = projectName.toUpperCase();
    deleteTaskList(); 
    createTaskList(myTasks);  
    */
});

function createTaskList(arr) {
    const newObject = Object.assign({}, arr);
    console.log(newObject); 
    for(let i = 0; i < arr.length; i++) {
        createTaskDom(newObject);
    }
}

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
    checkNumberArr(occurrencesArr); 
}

function checkNumberArr(arr) {
    const numberArray = Array.from(document.querySelectorAll('.number-of-tasks'));
    if(numberArray.length === 1) {
        console.log('numberArray is empty'); 
    } else {
        displayNumbers(numberArray, arr); 
    }
}

function displayNumbers(arr, occurencesArr) {
    for(let i = 0; i < occurencesArr.length; i++) {
       arr[i].textContent = occurencesArr[i];
    }
}

// displays the number of tasks a project has
function createOccurrencesArray() {
    const occurrenceArr = findOcc(myTasks, 'project');
    const arr = [myTasks.length];
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