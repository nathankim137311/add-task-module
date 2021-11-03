// import
import { counterArr, projectArr, taskArr } from "./storage.js";
/////////////
// Counter //
///////////// 
export default class Counter {
    static updateCounters() {
        this.allTasksCounter();
        this.createCounters();
        this.displayCounters();
    }
    static allTasksCounter() {
        const totalTasks = JSON.parse(localStorage.getItem('tasks')).length;
        const allTasksP = document.getElementById('total-number');
        allTasksP.textContent = ' ' + totalTasks;
    }
    static createCounters() {
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        const newArr = [];
        for(let i = 0; i < taskArr.length; i++) {
            newArr.push(taskArr[i].project);
        }
        const count = this.findOcc(newArr);
        localStorage.setItem('counters', JSON.stringify(count)); 
    }
    static findOcc(newArr) {
        const count = {};
        newArr.forEach(el => {
            count[el] = count[el] + 1 || 1
        }); 
        return count;
    }
    static displayCounters() { // modify 
        const countersArr = Object.values(JSON.parse(localStorage.getItem('counters')));
        const countersArrProjects = Object.keys(JSON.parse(localStorage.getItem('counters')));
        const projectsArr = JSON.parse(localStorage.getItem('projects')); 
        const numberTasks = [...document.querySelectorAll('.counts')];
        //console.log(countersArr);
        //numberTasks[1].textContent = 2;
        for(let i = 0; i < numberTasks.length; i++) {
            let position = projectsArr.indexOf(countersArrProjects[i]);
            console.log(position);
            if(position === -1) {
                position = numberTasks.length - 1; 
                numberTasks[position].textContent = countersArr[i];
            }
        }
    }
}

/*
static updateCounters() {
    const counterObj = this.createCounterObj(); 
    const counterArr = Object.keys(counterObj).map((key) => [key, counterObj[key]]);
    localStorage.setItem('counters', JSON.stringify(counterArr)); 
    this.createCounters(counterArr); 
}
static createCounterObj() {
    const count = {};
    taskArr.forEach(task => {
        count[task.project] = count[task.project] + 1 || 1
    });
    return count
}
static createCounters(counterArr) { // edit later 
    const allTasks = document.getElementById('total-number');
    allTasks.textContent = ' ' + taskArr.length;
    const counterNum = Array.from(document.querySelectorAll('.number-of-tasks p'));
    const projectName = Array.from(document.querySelectorAll('.project-links'));
    counterArr.push(counterArr.shift()); 
    console.log(counterArr);
    projectName.shift(); 
    console.log(projectName);
    console.log(counterNum);
    for(let i = 0; i < counterArr.length; i++) {
        if(counterArr[i][0] === projectName[i].textContent) {
            counterNum[i].textContent = counterArr[i][1]; 
        }
    }
}
static addCountersToList(countersArr) {
    const counterNum = Array.from(document.querySelectorAll('.number-of-tasks p'));
    for(let i = 0; i < countersArr.length; i++) {
        counterNum[i].textContent = countersArr[i][1]; 
    }
}
static loadCounters() {
    const countersArr = JSON.parse(localStorage.getItem('counters'));
    this.addCountersToList(countersArr); 
}
static decrementCounter() {
    // empty
}
static incrementCounter() {
    // empty 
}
*/