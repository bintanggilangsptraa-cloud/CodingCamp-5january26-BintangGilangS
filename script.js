const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoDate = document.getElementById("todo-date");
const todoList = document.getElementById("todo-list");
const darkModeBtn = document.getElementById("darkModeBtn");

let counter = 1;

/* ADD TODO */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const todoText = todoInput.value;
    const dateValue = todoDate.value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${counter}</td>
        <td>${todoText}</td>
        <td>${dateValue}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    todoList.appendChild(row);
    counter++;

    todoInput.value = "";
    todoDate.value = "";

    /* DELETE */
    row.querySelector(".delete-btn").addEventListener("click", function () {
        row.remove();
        updateNumber();
    });
});

/* UPDATE NUMBER */
function updateNumber() {
    const rows = todoList.querySelectorAll("tr");
    counter = 1;
    rows.forEach((row) => {
        row.children[0].innerText = counter;
        counter++;
    });
}

/* DARK MODE TOGGLE */
darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");
});
