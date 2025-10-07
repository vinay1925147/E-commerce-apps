const inputBox=document.querySelector("#inputField");
const listContainer =document.querySelector("#list-container");
const addBtn = document.querySelector("#Addbtn");

const addtask =()=>{
    if(inputBox.value===""){
        alert("you something write");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="del"
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
addBtn.addEventListener("click",addtask);

listContainer.addEventListener("click",(e)=>{

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
 // save the data in browser
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

// show again data in website
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); 



