const todos = [
    {
        taskName: 'Morning Walk',
        isDone: true,
    },
    {
        taskName: 'Office Work',
        isDone: false,
    },
    {
        taskName: 'Games',
        isDone: true,
    },
    {
        taskName: 'Dinner',
        isDone: false,
    },
]

const addTask = function (todo) {
    const todoTBodyEle = document.getElementById('todotbody');
    const trEle = document.createElement('tr');
    trEle.innerHTML = `<td>${todo.taskName}</td><td class="text-center"><input class="form-check-input" type="checkbox" id="isDone" name="isDone"></td><td><button class="btn btn-sm btn-danger" value="Remove">Remove</button></td>`;
    isDoneEventHandler(trEle.childNodes[1].firstChild);
    removeTaskEventhandler(trEle.childNodes[2].firstChild);
    todoTBodyEle.appendChild(trEle);
    localStorage.setItem(todo.taskName, todo.isDone);
}
const addTaskFormEle = document.getElementById('addTaskForm');
addTaskFormEle.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.taskName.value) {
        const newTask = {
            taskName: event.target.taskName.value,
            // isDone: event.target.isDone.value,
            isDone: false,
        }
        // alert(event.target.taskName.value);
        // alert(event.target.isDone.checked);
        addTask(newTask);
    }
});

const todo = {
    taskName: '',
    isDone: false
}
const isDoneEventHandler = function (node) {
    node.addEventListener('click', function (event) {
        if (this.checked) {
            // alert('Task marked completed.');
            this.closest('tr').firstChild.style.color = 'green';
            this.closest('tr').firstChild.style.fontWeight = "bolder";
        }
        else {
            // alert('Task marked incomplete.');
            this.closest('tr').firstChild.style.color = 'black';
            this.closest('tr').firstChild.style.fontWeight = "normal";
        }
        localStorage.setItem(this.closest('tr').firstChild.innerText, this.checked);
    });
}
const removeTaskEventhandler = function (node) {
    node.addEventListener('click', function (event) {
        // alert('remove task');
        localStorage.removeItem(event.target.closest('tr').firstChild.innerText);
        event.target.closest('tr').remove();
    });
}
todos.forEach((todo) => addTask(todo))
// document.getElementsByName('isDone').forEach((ele) => isDoneEventHandler(ele));