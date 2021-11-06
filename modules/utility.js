// imports
import Task from "./task.js";
import UI from "./ui.js";
import Storage from "./storage.js";
import { taskArr } from "./storage.js";
import { projectArr } from "./storage.js";
import Project from "./project.js";
import Status from "./status.js";
import Counter from "./counter.js";
///////////////////////
// utility functions //
///////////////////////
export default class Utility {
    static createNewTask() {
        const title = document.getElementById('title-input').value;
        const description = document.getElementById('description-input').value;
        const project = document.getElementById('project-input').value; 
        const priority = document.getElementById('priority-input').value;
        const date = document.getElementById('date-input').value;
        // create new Task object
        const task = new Task(title, description, project, priority, date);
        UI.createTaskDom(task);
        Storage.saveTasks(); 
    }
    static createNewProject(str) {
        const project = new Project(str);  
        UI.createProjectListDom(project.project);
        Storage.saveProjects();
    }
    static checkProject() {
        const projectName = document.getElementById('project-input').value; 
        if(projectArr.length === 0) {
            this.createNewProject(projectName); 
        } else if(projectArr.includes(projectName) === false) { 
            this.createNewProject(projectName); 
        }
    }
    static deleteTask(obj) {
        const taskArr = JSON.parse(localStorage.getItem('tasks')); 
        for(let i = 0; i < taskArr.length; i++) {
            if(taskArr[i].id === obj.id) {
                taskArr.splice(i, 1); 
            }
        }
        localStorage.setItem('tasks', JSON.stringify(taskArr));
    }
    static deleteProjectTasks(str) {
        const confirmPrompt = confirm(`Delete project ${str} and all its tasks?`);
        if(confirmPrompt === true) {
            this.deleteProjectTasksFromStorage(str);
        }
    }
    static deleteProjectTasksFromStorage(str) {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        for(let i = taskArr.length - 1; i >= 0; --i) {
            if(taskArr[i].project == str) {
                taskArr.splice(i, 1); 
            }
        } 
        localStorage.setItem('tasks', JSON.stringify(taskArr)); 
    }
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
        Status.filteredStates(project);
    }
    static changeProjectHeading(name) {
        const projectNameH2 = document.getElementById('project-name');
        if(name === 'All Tasks') {
            projectNameH2.textContent = 'All Tasks'
        } else {
            projectNameH2.textContent = name.toUpperCase() + ' ' + 'Tasks';
        }
    }
    static defaultValue(select, objValue) {
        for(let i, j = 0; i = select.options[j]; j++) {
            if(i.value == objValue) {
                select.selectedIndex = j; 
                break;
            }
        }
    }
}
