// imports 
//////////
// edit //
//////////
export default class Edit {
    static toggleEdit(btn, id) {
        const detailInputs = [...document.querySelectorAll('.detail-inputs-' + id)];
        if(btn.innerHTML !== 'Save') {
            btn.innerHTML = 'Save'; 
            detailInputs.forEach(input => {
                input.readOnly = false; 
                input.style.border = '1px black solid'; 
                input.removeAttribute('disabled');
            });
        } else {
            btn.innerHTML = '<span class="material-icons-outlined">edit</span>';
            detailInputs.forEach(input => {
                input.readOnly = true;
                input.style.border = 'none'; 
            });
            this.saveEdit(id);
        }
    }
    static saveEdit(id) {
        const title = document.getElementById('title' + id);
        const description = document.getElementById('description' + id);
        const date = document.getElementById('date' + id);
        const priority = document.getElementById('priority' + id);
        const taskArr = JSON.parse(localStorage.getItem('tasks'));
        const index = taskArr.map(task => {
            return task.id;
        }).indexOf(id); 
        taskArr[index].title = title.value; 
        taskArr[index].description = description.value; 
        taskArr[index].date = date.value;
        taskArr[index].priority = priority.value; 
        localStorage.setItem('tasks', JSON.stringify(taskArr));   
        location.reload(); 
    }
} 