// individual task 
export default class Task {
    constructor(title, project, priority) {
        this.title = title;
        this.project = project; 
        this.priority = priority;
    }
}

// all tasks 
export class Tasks {
    constructor() {
        this.tasks = [];
    }
    newTasks(title, project, priority) {
        let taskObj = new Task(title, project, priority);
        this.tasks.push(taskObj);
        return taskObj; 
    }
    get allTasks() {
        return this.tasks;
    }
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); 
    }
}

export class Project {
    constructor(project) {
        this.project = project; 
    }
}
// all projects
export class Projects {
    constructor() {
        this.projects = []; 
    }
    newProjects(project) {
        let projectObj = new Project(project);
        this.projects.push(projectObj);
        return projectObj; 
    }
    get allProjects() {
        return this.projects; 
    }
    saveProjects() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }
}

/*
// testing 
let task = new Tasks(); 
task.newTasks('homework', 'school', 'low'); 
task.newTasks('workout', 'gym', 'high');
task.saveTasks; 
console.log(task.allTasks);
*/

