// imports
import Task from "./task.js";
import UI from "./ui.js";
import Storage from "./storage.js";
import { taskArr } from "./task.js";
import Project, { projectArr } from "./project.js";
///////////////////////
// utility functions //
///////////////////////
export default class Utility {
    static createNewTask() {
        const title = document.getElementById('title-input').value;
        const project = document.getElementById('project-input').value; 
        const priority = document.getElementById('priority-input').value; 
        // create new Task object
        const task = new Task(title, project, priority);
        UI.createTaskDom(task);
        Storage.saveTasks(); 
    }
    static createNewProject(str) {
        // create new Project object
        const project = new Project(str);  
        UI.createProjectListDom(project.project);
        Storage.saveProjects();
    }
    static checkProject() {
        const projectName = document.getElementById('project-input').value; 
        if(projectArr.length === 0) { // if there are no items 
            Utility.createNewProject(projectName); 
        } else if(projectArr.includes(projectName) === false) { 
            Utility.createNewProject(projectName); 
        }
    }
    static deleteTask(obj) {
        const taskPosition = taskArr.indexOf(obj);
        taskArr.splice(taskPosition, 1); 
        Storage.saveTasks(); 
    }
    static deleteProject(str) {
        console.log('poop');
    }
}

/*
        Task.removeTask(obj)
        console.log(Task.getTasks());
        const id = e.target.parentNode.id;
        let taskPosition = id.match(/\d+/);  
        taskArr.splice(taskPosition, 1); 
        console.log(Task.getTasks());
        // Storage.saveTasks(); 

static deleteProjectItem(button) {
    if(confirm('delete project and its contents?') === true) {
        button.parentNode.remove(); 
        console.log(projectArr);
        let myTasksDuplicate = taskArr.slice();
        let myProjectsDuplicate = projectArr.slice();  
        currentParent.remove(); 
        myTasksDuplicate = removeSpecificTasks(myTasks, projectKeyValue);
        console.log(myTasksDuplicate); 
        myProjectsDuplicate = deleteSpecificProjects(myProjects, projectKeyValue);
        console.log(myProjectsDuplicate); 
        saveLocal('tasks', myTasksDuplicate); 
        saveLocal('projects', myProjectsDuplicate);
        const taskPosition = myProjects.indexOf(e.target.textContent);
        myProjects.splice(taskPosition, 1); 
        projectListItem.remove(); 
        saveLocal('tasks', myTasks); 
        saveLocal('projects', myProjects);
    }
}
    static confirmDelete(event) {
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
            const taskPosition = myProjects.indexOf(e.target.textContent);
            myProjects.splice(taskPosition, 1); 
            projectListItem.remove(); 
            saveLocal('tasks', myTasks); 
            saveLocal('projects', myProjects);
        } else {
            // do nothing 
        }
    }
    static removeSpecificTasks(arr, str) {
        arr.filter((el)=>{
            return el.project != str; 
        });
    }
    static removeSpecificItems (arr, key, val) {
        const index = arr.findIndex(obj => obj[key] === val);
        return index >= 0 ? [
            ...arr.slice(0, index),
            ...arr.slice(index + 1)
        ] : arr;
    }
    static deleteSpecificTasks(arr, value) {
        return newArr;
        // return arr.filter(e => e.value != value); 
    }
    static deleteSpecificProjects(arr, value) {
        return arr.filter(e => e !== value)
    }
    // sorts tasks by project name 
    static replaceProjectList(name) {
        deleteTaskList();
        const specificProject = filter(name); 
        createNewProjectList(specificProject);
    }
    static deleteTaskList() {
        document.getElementById('task-list').innerHTML = ''; 
    }
    static filter(name) {
        const specificProject = myTasks.filter(task => task.project == name);
        return specificProject
    }
    static createNewProjectList(project) {
        for(let i = 0; i < project.length; i++) {
            createTaskDom(project[i]);  
        }
    }
}
*/