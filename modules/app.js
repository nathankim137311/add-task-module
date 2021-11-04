// imports 
import UI from "./ui.js"
import { Load } from "./storage.js"  

window.onload = function() {
    //localStorage.clear();
    UI.loadFormBtns(); 
    Load.itemsFromStorage();
}

