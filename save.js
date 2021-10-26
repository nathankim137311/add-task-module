// save to local storage 
// checks if tasks array is empty if it's not generate tasks 
export function localStorageItems() {
    if(localStorage.getItem('tasks') === null || localStorage.getItem('projects') === null) {
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
    JSON.parse(localStorage.getItem(str))
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
