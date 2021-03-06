// imports 
import Storage from "./storage.js";
import { projectArr } from "./storage.js";
// project class 
export default class Project {
    constructor(project) {
        this.project = project; 
        Project.addProject(this);  
        Project.saveProject()
    }
    static addProject(item) {
        // checks project array for duplicates
        if(projectArr.indexOf(item.project) === -1) {
            projectArr.push(item.project);
        }
    }
    static saveProject() {
        Storage.saveProjects(); 
    }
    static getProjects() {
        return projectArr
    }
}
