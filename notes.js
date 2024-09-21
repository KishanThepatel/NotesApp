const notesContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('.create-btn');
let inputBox = document.querySelectorAll('.input-box'); 
     
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener('click', () => {

    let noteContainer = document.createElement('div');
    noteContainer.className = 'note-box';

 
    let inputBox = document.createElement('p');
    inputBox.setAttribute("contenteditable", "true");
    inputBox.className = "input-box";
    inputBox.setAttribute("data-placeholder", "+");

    let deleteButton = document.createElement('img');
    deleteButton.src = 'delete.png';
    deleteButton.className = 'delete-btn'
    deleteButton.id = 'delete';
    deleteButton.alt = 'delete';
    deleteButton.style.margin = '1px';

    noteContainer.appendChild(inputBox);
    noteContainer.appendChild(deleteButton);
    
    updateStorage();

    notesContainer.appendChild(noteContainer);

    updateStorage();

})



notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }

    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage(); 
            }
        })
    }
        
    document.addEventListener('keydown', event => {
        if(event.key === 'Enter'){
            document.execCommand('insertLineBreak');
            event.preventDefault();
        }

        
    })
    

})