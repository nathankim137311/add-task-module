console.log('hello everybody!');
const taskBtn = document.getElementById('task-btn');
const closeBtn = document.getElementById('close-btn');
const addBtn = document.getElementById('add-btn'); 
const taskList = document.getElementById('task-list');
// task library 
let myTasks = [];
let myProjects = [];
// input elements
const titleInput = document.getElementById('title-input');
const projectInput = document.getElementById('project-input'); 
const priorityInput = document.getElementById('priority-input'); 

class Task {
    constructor() {
        this.title = titleInput.value;
        this.project = projectInput.value; 
        this.priority = priorityInput.value; 
    }
}

//  opens pop-up window 
taskBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    openForm(); 
}); 

// closes pop-up window 
closeBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    closeForm(); 
});

// adds task to task container 
addBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    // add task to container 
    addTask(); 
    createProjectList(); 
});

// adds task (the service provider)
function addTask() {
    const task = new Task(); 
    checkTasks(task);  
}

// checks tasks and pushes task if it matches current project name
function checkTasks(task) {
    const currentTab = document.getElementById('project-name');
    const currentTabString = currentTab.textContent;
    const firstWord = getFirstWord(currentTabString);
    if(task.project !== firstWord) {
        myTasks.push(task);
        saveLocal('tasks', myTasks); 
    } else if(task.project === firstWord) {
        myTasks.push(task);
        createTask(task); 
    } 
}

function getFirstWord(str) {
    let spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
}

// creates task item 
function createTask(task) {
    const taskItems = document.createElement('li'); 
    taskItems.classList.add('task-items');
    taskItems.setAttribute('id', myTasks.indexOf(task))
    const taskTitle = document.createElement('h3'); 
    taskTitle.textContent = task.title;
    const taskPriority = document.createElement('p');
    taskPriority.textContent = task.priority; 
    const trashBtn = document.createElement('button'); 
    trashBtn.classList.add('trash-btn'); 
    trashBtn.textContent = 'delete'; 
    // deletes task item and saves to local
    trashBtn.addEventListener('click', (e)=>{
        const taskPosition = myTasks.indexOf(task); 
        myTasks.splice(taskPosition, 1); 
        taskItems.remove(); 
        saveLocal('tasks', myTasks); 
    }); 
    taskItems.append(taskTitle, taskPriority, trashBtn); 
    taskList.appendChild(taskItems); 
    saveLocal('tasks', myTasks); 
}

// adds project to project list 
function createProjectList(project) {
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
    projectName.textContent = project;  
    projectsList.appendChild(projectsListItem); 
    projectsListItem.appendChild(projectName); 
    saveLocal('projects', myProjects); 
}

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
        createTask(project[i]);  
    }
}

// save to local storage (the service provider)
function saveLocal(name, arr) {
    localStorage.setItem(name, JSON.stringify(arr)); 
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

function openForm() {
    document.getElementById('myForm').style.display = 'block'; 
}

function closeForm() {
    document.getElementById('myForm').style.display = 'none';
}