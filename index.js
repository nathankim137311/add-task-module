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
    createTask(myTasks.at(-1)); // new at() method selects last item of array 
    console.log(myProjects);
});

// adds task and saves object in local storage
function addTask() {
    const task = new Task(); 
    myTasks.push(task); 
    saveLocal(); 
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
    trashBtn.addEventListener('click', (e)=>{
        const taskPosition = myTasks.indexOf(task); 
        myTasks.splice(taskPosition, 1); 
        taskItems.remove(); 
        saveLocal(); 
    }); 
    taskItems.append(taskTitle, taskPriority, trashBtn); 
    taskList.appendChild(taskItems);
    addProject(task.project); 
}

// adds project to project list 
function addProject(project) {
    const projectsList = document.getElementById('projects-list'); 
    const projectsListItem = document.createElement('li'); 
    const projectName = document.createElement('a');
    projectName.classList.add('projects'); 
    projectName.setAttribute('href', '#');
    projectName.addEventListener('click', ()=>{
        // display tasks associated with project 
        const projectNameH2 = document.getElementById('project-name'); 
        projectNameH2.textContent = `${project} tasks`; 
    })
    projectName.textContent = project;  
    projectsList.appendChild(projectsListItem); 
    projectsListItem.appendChild(projectName); 
    // pushes project value to array and saves to local storage 
    myProjects.push(project); 
    localStorage.setItem('projects', JSON.stringify(myProjects));
}

// save to local storage 
function saveLocal() {
    localStorage.setItem('tasks', JSON.stringify(myTasks));
}

// checks if tasks array is empty if it's not generate tasks 
if(localStorage.getItem('tasks') === null) {
    myTasks = []; 
} else {
    const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')); 
    myTasks = tasksFromStorage; 
    for(let i = 0; i < myTasks.length; i++) {
        createTask(myTasks[i]);
    }
}

function openForm() {
    document.getElementById('myForm').style.display = 'block'; 
}

function closeForm() {
    document.getElementById('myForm').style.display = 'none';
}