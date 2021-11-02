// imports 
import Project from "./project.js"
import Projects from "./project.js"
import Task from "./task.js"
import Tasks from "./task.js"
import Utility from "./utility.js"
import Counter from "./counter.js"
import UI from "./ui.js"
import Storage, { Load } from "./storage.js"  

window.onload = function() {
    //localStorage.clear();
    UI.loadFormBtns(); 
    Load.itemsFromStorage();
    // Counter.loadCounters();
    // Counter.updateCounters();
}

