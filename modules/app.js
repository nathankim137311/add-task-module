// imports 
import Project from "./project.js"
import Projects from "./project.js"
import Task from "./task.js"
import Tasks from "./task.js"
import Utility from "./utility.js"
import Counter from "./counter.js"
import UI from "./ui.js"
import Storage from "./storage.js"  

window.onload = function() {
    // localStorage.clear();
    UI.loadFormBtns(); 
    Storage.loadItemsFromStorage();
    Storage.loadBtnStates();
    // Counter.loadCounters();
    // Counter.updateCounters();
}

