const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const inputBox = document.getElementById("input-box");
    const taskText = inputBox.value.trim(); // Trim leading/trailing white spaces
    if (taskText === '') {
        alert("You need to write something!");
    } else if (taskText.length > 50) {
        alert("Text should be within 50 characters.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskText;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

function adjustAddButtonSize() {
    const inputTextLength = inputBox.value.length;
    const minButtonWidth = 100; // Minimum button width
    const maxButtonWidth = 200; // Maximum button width
    const currentButtonWidth = Math.min(
        maxButtonWidth,
        minButtonWidth + inputTextLength * 15
    );

    document.getElementById("add-button").style.width = currentButtonWidth + "px";
}
function resizeInput() {
    const inputBox = document.getElementById("input-box");
    inputBox.style.height = "auto"; // Reset height to auto
    inputBox.style.height = inputBox.scrollHeight + "px"; // Set the height to match the content
}

// Call the resizeInput function initially to set the correct height for existing content
resizeInput();

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

const todoApp = document.getElementById('todo-app');

sr.reveal(todoApp);

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
