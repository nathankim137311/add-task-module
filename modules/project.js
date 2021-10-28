// project array 
export const projectArr = [];
// project class 
export default class Project {
    constructor(project) {
        this.project = project; 
        Project.addProject(this);
        Project.saveTask()
    }
    static addProject(item) {
        projectArr.push(item);
    }
    static saveProject() {
        localStorage.setItem('project', JSON.stringify(projectArr));
    }
    static getProjects() {
        return projectArr
    }
}