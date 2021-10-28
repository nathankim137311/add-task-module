// task array 
export const tasksArr = []
// task class 
export default class Task {
    constructor(title, project, priority) {
        this.title = title;
        this.project = project; 
        this.priority = priority;
        Task.addTask(this);
        Task.saveTask(); 
    }
    static addTask(item) {
        tasksArr.push(item);
    }
    static saveTask() {
        localStorage.setItem('tasks', JSON.stringify(tasksArr));
    }
    static getTasks() {
        return tasksArr
    }
}

/*
// testing 
let task = new Tasks(); 
task.newTasks('homework', 'school', 'low'); 
task.newTasks('workout', 'gym', 'high'); 
console.log(task.allTasks);
*/

