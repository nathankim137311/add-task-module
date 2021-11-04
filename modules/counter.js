// import
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
    static displayCounters() {
        const countersKeys = Object.keys(JSON.parse(localStorage.getItem('counters')));
        const projectsArr = JSON.parse(localStorage.getItem('projects')); 
        for(let i = 0; i < projectsArr.length; i++) {
            if(projectsArr[i] === countersKeys[i]) {
                this.setCounter(i); 
            } else {
                this.setCounterZero(i);
            }
        }
    }
    static setCounter(num) {
        const countsP = [...document.querySelectorAll('.counts')];
        const counterValues = Object.values(JSON.parse(localStorage.getItem('counters')));
        countsP[num].textContent = counterValues[num]; 
    }
    static setCounterZero(num) {
        const countsP = [...document.querySelectorAll('.counts')];
        countsP[num].textContent = '0'; 
    }
}