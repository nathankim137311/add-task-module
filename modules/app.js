// imports 
import UI from "./ui.js"
import { Load } from "./storage.js"  
// when page loads 
window.onload = function() {
    //localStorage.clear();
    UI.loadFormBtns(); 
    Load.itemsFromStorage();
}

