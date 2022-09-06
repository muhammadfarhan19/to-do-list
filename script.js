const taskInput = document.querySelector(".task-input");
const timeInput = document.querySelector(".time-input");
const alert = document.querySelector(".alert");
const btnAdd = document.querySelector(".btn-add");
const btnDel = document.querySelector(".btn-delete");
const task = document.querySelector(".task");
const newTask = document.querySelector(".new-task");


btnAdd.addEventListener("click", () => {
  if (taskInput.value.length == 0 && timeInput.value.length == 0) {
    alert.classList.remove("d-none");
  } else {
    task.innerHTML += `
      <div class="new-task">
        <div class="task-point">
          <h3>${taskInput.value}</h1>
          <h6 class="time">${timeInput.value}</h6>
        </div>
          <i class="fa fa-trash btn-delete"></i>
      </div>
    `;

    taskInput.value = "";
    timeInput.value = "";
  }
});