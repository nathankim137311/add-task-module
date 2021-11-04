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
        const countersArr = Object.values(JSON.parse(localStorage.getItem('counters')));
        const countersArrProjects = Object.keys(JSON.parse(localStorage.getItem('counters')));
        const projectsArr = JSON.parse(localStorage.getItem('projects')); 
        const numberTasks = [...document.querySelectorAll('.counts')];
        // checks if counter object in storage is empty 
        if(countersArr.length === 0) {
            numberTasks.forEach(el => {
                el.textContent = '0';
            });
        } else {
            for(let i = 0; i < numberTasks.length; i++) {
                let position = projectsArr.indexOf(countersArrProjects[i]);
                if(position === -1) {
                    position = numberTasks.length - 1; 
                    let position2 = countersArr.length - 1; 
                    numberTasks[position].textContent = countersArr[position2];
                } else {
                    numberTasks[position].textContent = countersArr[i];
                }
            }
        } 
    }
    static decrementCounter(obj) {
        this.allTasksCounter();
        // decrement 
        const numberTasks = [...document.querySelectorAll('.counts')];
        const projectsArr = JSON.parse(localStorage.getItem('projects'));
        const position = projectsArr.indexOf(obj.project); 
        let num = parseInt(numberTasks[position].textContent);
        numberTasks[position].textContent = num - 1; 
    }
}