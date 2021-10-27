// Todo List UI
export default class UI {
    // LOADING CONTENT
    static loadHomePage() {
        window.onload = function() {
            loadBtns(); 
            // localStorageItems();  
            // createIterators();
        }
    }
    static loadBtns() {
        const taskBtn = document.getElementById('task-btn');
        const closeBtn = document.getElementById('close-btn');
        const addBtn = document.getElementById('add-btn'); 
        //  opens pop-up form 
        taskBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        document.getElementById('myForm').style.display = 'block'; 
        console.log('working');
        }); 
        // closes pop-up form 
        closeBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        document.getElementById('myForm').style.display = 'none';
        });
        // on button click creates task object 
        addBtn.addEventListener('click', () => {
        console.log('add button working');
        });
    }
    static createTaskDom(obj) {   
        const taskItems = document.createElement('li'); 
        taskItems.classList.add('task-items');
        taskItems.setAttribute('id', 'task-' + myTasks.indexOf(obj))
        const taskTitle = document.createElement('h3'); 
        taskTitle.textContent = obj.title;
        const taskPriority = document.createElement('p');
        taskPriority.textContent = obj.priority; 
        const trashBtn = document.createElement('button'); 
        trashBtn.classList.add('trash-btn'); 
        trashBtn.textContent = 'delete'; 
        // deletes task item and saves to local
        trashBtn.addEventListener('click', (e)=>{
            const taskPosition = myTasks.indexOf(obj);
            myTasks.splice(taskPosition, 1); 
            taskItems.remove(); 
            saveLocal('tasks', myTasks); 
            saveLocal('projects', myProjects);  
        }); 
        taskItems.append(taskTitle, taskPriority, trashBtn); 
        taskList.appendChild(taskItems); 
    }
    static createProjectListDom(str) {
        const projectList = document.getElementById('projects-list'); 
        const projectListItem = document.createElement('li'); 
        projectListItem.classList.add('project-items'); 
        projectListItem.setAttribute('id', 'project-' + myProjects.indexOf(str)); 
        const projectListItemDiv = document.createElement('div'); 
        projectListItemDiv.classList.add('number-of-tasks');
        const projectListItemP = document.createElement('p');
        projectListItemP.textContent = '';
        const projectLink = document.createElement('a');
        projectLink.classList.add('project-links'); 
        projectLink.setAttribute('href', '#');
        // trash button 
        const trashBtn = document.createElement('button'); 
        trashBtn.classList.add('trash-btn'); 
        trashBtn.textContent = 'delete'; 
        // deletes project item and saves to local
        trashBtn.addEventListener('click', (e)=>{
            // prompt user 
            confirmDelete(e); 
        }); 
        // when link is clicked populates container with corresponding tasks
        projectLink.addEventListener('click', (e)=>{
            const projectName = e.target.textContent; 
            const projectNameH2 = document.getElementById('project-name'); 
            projectNameH2.textContent = projectName.toUpperCase(); 
            replaceProjectList(projectName);
        });
        projectLink.textContent = str; // change later 
        projectList.appendChild(projectListItem);
        projectListItemDiv.appendChild(projectListItemP); 
        projectListItem.append(projectListItemDiv, projectLink, trashBtn); 
    }
}
