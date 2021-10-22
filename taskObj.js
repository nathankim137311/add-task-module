// input elements
const titleInput = document.getElementById('title-input');
export const projectInput = document.getElementById('project-input'); 
const priorityInput = document.getElementById('priority-input'); 
// task object constructor 
export default class Task {
    constructor() {
        this.title = titleInput.value;
        this.project = projectInput.value; 
        this.priority = priorityInput.value; 
    }
}
