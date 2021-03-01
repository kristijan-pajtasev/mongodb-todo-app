import ToDoList from "./ToDoList";

const toDos = [
    {
        text: "hello world",
        isCompleted: true,
        id: 123
    }
]

function ToDoContainer() {
    return (
        <ToDoList todos={toDos} />
    )
}

export default ToDoContainer;