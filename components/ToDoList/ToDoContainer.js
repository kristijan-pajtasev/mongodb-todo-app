import ToDoList from "./ToDoList";

const toDos = []

function ToDoContainer() {
    return (
        <ToDoList todos={toDos} />
    )
}

export default ToDoContainer;