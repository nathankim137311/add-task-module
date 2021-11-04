// imports
import Task from "./task.js";
import UI from "./ui.js";
import Storage from "./storage.js";
import { taskArr } from "./storage.js";
import { projectArr } from "./storage.js";
import Project from "./project.js";
import Status from "./status.js";
///////////////////////
// utility functions //
///////////////////////
export default class Utility {
    static createNewTask() {
        const title = document.getElementById('title-input').value;
        const description = document.getElementById('description-input').value;
        const project = document.getElementById('project-input').value; 
        const priority = document.getElementById('priority-input').value;
        // create new Task object
        const task = new Task(title, description, project, priority);
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
            this.createNewProject(projectName); 
        } else if(projectArr.includes(projectName) === false) { 
            this.createNewProject(projectName); 
        }
    }
    static deleteTask(obj) {
        const taskPosition = taskArr.indexOf(obj);
        taskArr.splice(taskPosition, 1); 
        Storage.saveTasks(); 
    }
    static confirmDelete(deleteBtn, str) { // prompts user 
        if(confirm('delete project and all of its contents?')) { 
            deleteBtn.parentNode.remove();
            this.deleteFromStorage(projectArr, str)
            this.deleteSpecificTasks(taskArr, str); 
            UI.deleteTaskDom(str);
            Storage.saveAll(); 
            Status.saveStates(); 
        } 
    }
    static deleteSpecificTasks(arr, value) {
        for(let i = arr.length - 1; i >= 0; --i) {
            if(arr[i].project == value) {
                arr.splice(i, 1); 
            }
        } 
    }
    static deleteFromStorage(arr, value) {
        const position = arr.indexOf(value);
        arr.splice(position, 1); 
    }
    // sorts tasks by project name 
    static filterTasksByProject(name) {
        UI.clearTaskList();
        const specificProject = this.filter(name); 
        this.changeProjectHeading(name);
        this.createNewProjectList(specificProject);
    }
    static filter(name) {
        const newArray = taskArr.filter(task => task.project == name);
        return newArray
    }
    static createNewProjectList(project) {
        for(let i = 0; i < project.length; i++) {
            UI.createTaskDom(project[i]);  
        }
    }
    static changeProjectHeading(name) {
        const projectNameH2 = document.getElementById('project-name');
        if(name === 'All Tasks') {
            projectNameH2.textContent = 'All Tasks'
        } else {
            projectNameH2.textContent = name.toUpperCase() + ' ' + 'Tasks';
        }
    }
}