// imports
import Task from "./task.js";
import UI from "./ui.js";
import Storage from "./storage.js";
import { taskArr } from "./storage.js";
import { projectArr } from "./storage.js";
import Project from "./project.js";
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
    static deleteProject(str) {
        this.confirmDelete(str); 
    }
    static confirmDelete(str) { // prompts user 
        if(confirm('delete project and all of its contents?')) {
            // delete current project
            this.deleteFromStorage(projectArr, str)
            // delete tasks 
            this.deleteSpecificTasks(taskArr, str); 
            UI.deleteTaskDom(str);
            Storage.saveAll(); 
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
        const specificProject = taskArr.filter(task => task.project == name);
        return specificProject
    }
    static createNewProjectList(project) {
        for(let i = 0; i < project.length; i++) {
            UI.createTaskDom(project[i]);  
        }
    }
    static changeProjectHeading(name) {
        const projectNameH2 = document.getElementById('project-name');
        projectNameH2.textContent = name.toUpperCase() + ' ' + 'Tasks';
    }
}

export class Counter { // refactor and simplify 
    static updateCounters() {
        const counterObject = this.taskCounter(); 
        this.createCounters(counterObject); 
    }
    static taskCounter() {
        const count = {
            total:taskArr.length
        };
        taskArr.forEach(task => {
            count[task.project] = count[task.project] + 1 || 1
        });
        return count
    }
    static createCounters(obj) { // change 
        const counterNum = Array.from(document.querySelectorAll('.number-of-tasks p'));
        const counterArr = Object.values(obj);  
        for(let i = 0; i < counterArr.length; i++) {
            counterNum[i].textContent = counterArr[i]; 
        }
    }
}