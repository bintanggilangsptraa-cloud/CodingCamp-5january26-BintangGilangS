const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoDate = document.getElementById("todo-date");
const todoList = document.getElementById("todo-list");



let no = 1;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = todoInput.value;
    const date = todoDate.value;

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${no}</td>
        <td>${text}</td>
        <td>${date}</td>
        <td>
            <button onclick="hapusTodo(this)">Hapus</button>
        </td>
    `;

    todoList.appendChild(tr);
    no++;

    form.reset();
});

function hapusTodo(btn) {
    btn.parentElement.parentElement.remove();
}
      console.log("dark mode aktif");
      DarBtn.addEventListener("click", function(){
        dokumen.bodyclassList.toggle("dark");});