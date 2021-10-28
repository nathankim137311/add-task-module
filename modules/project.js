// imports 
import Storage from "./storage.js";
// project array 
export const projectArr = [];
// project class 
export default class Project {
    constructor(project) {
        this.project = project; 
        Project.addProject(this);  
        Project.saveProject()
    }
    static addProject(item) {
        projectArr.push(item);
    }
    static saveProject() {
        Storage.saveProjects(); 
    }
    static getProjects() {
        return projectArr
    }
}
