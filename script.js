let myList = document.querySelector("ul");

document.querySelector("#myUL").addEventListener('click', function(e){
    e.target.innerHTML = e.target.innerHTML.strike();
    setTimeout(function(){e.target.remove()}, 1000);
});

// document.querySelector(".addBtn").addEventListener('click', function(e){
//     let newItem = document.getElementById('toDo').value;
//     if (!newItem){
//         alert("You have to put a To-Do!");
//     } else {
//         // if
//         // document.querySelector(".placeholder").remove();
//         document.getElementById('toDo').value = "";
//         let newLI = document.createElement('li');
//         newLI.textContent = newItem;
//         myList.appendChild(newLI); 
//     }    
// });

let input = document.querySelector("#toDo");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addBtn").click();
    }
});

function addElement() {
    let newItem = document.getElementById('toDo').value;
    if (!newItem){
        alert("You have to put a To-Do!");
    } else {
        // if
        // document.querySelector(".placeholder").remove();
        document.getElementById('toDo').value = "";
        let newLI = document.createElement('li');
        newLI.textContent = newItem;
        myList.appendChild(newLI); 
    }    
};