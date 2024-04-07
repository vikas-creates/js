const inputbox = document.getElementById("input_box");
const list = document.getElementById("list_container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must have to write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = ""; 
    save_data();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save_data();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save_data();
    }
}, false);

function save_data(){
    localStorage.setItem("data", list_container.innerHTML);
}
function display(){
    list.innerHTML=localStorage.getItem("data");
}

display();


