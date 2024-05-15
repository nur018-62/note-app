const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inpur-box");
function showNote(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNote();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", ()=>{
    let inputBox =document.createElement("p");
    let img = document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="https://cdn-icons-png.flaticon.com/512/3807/3807871.png";
    notesContainer.appendChild(inputBox).appendChild(img);

});
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    
    }
    else if(e.target.tagName === "p"){
       notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeup=function(){
                updateStorage();
            };
        })
    }
});

document.activeEventlisttener("keydown",event =>{
    if(eventkey ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDafault();
    }
})