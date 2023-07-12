const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if(inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    saveData();
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        AddTask();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();