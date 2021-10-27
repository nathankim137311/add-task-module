// individual project 
export default class Project {
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
}