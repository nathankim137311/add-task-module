///////////////////////////
// save to local storage //
///////////////////////////

export default class Storage {
    // sets object to local storage 
    static saveItems(str, arr) {
        localStorage.setItem(str, JSON.stringify(arr));
    }
    static saveAll() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('projects', JSON.stringify(projects)); 
    }
    static getItemsFromStorage(str) {
        JSON.parse(localStorage.getItem(str));
    }
    static createItemsFromStorage(arr) {
        switch(arr) {
            case myTasks:
                for(let i = 0; i < arr.length; i++) {
                    //createTaskDom(arr[i]); 
                }
                break;
            case myProjects:
                for(let i = 0; i < arr.length; i++) {
                    //createProjectListDom(arr[i]); 
                } 
        }
    }
    // checks if tasks array is empty if it's not generate tasks 
    static loadItemsFromStorage() {
        if(localStorage.getItem('tasks') === null || localStorage.getItem('projects') === null) {
            // myTasks = [];
            // myProjects = [];
        } else {
            const tasksFromStorage = getItemsFromStorage('tasks'); 
            myTasks = tasksFromStorage;
            const projectsFromStorage = getItemsFromStorage('projects')
            myProjects = projectsFromStorage; 
            // creates from existing library 
            //createItemsFromStorage(myTasks); 
            //createItemsFromStorage(myProjects);
        }
    }
}