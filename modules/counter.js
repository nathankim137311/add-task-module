// import
import { taskArr } from "./storage.js";
/////////////
// Counter //
///////////// 
export default class Counter {
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