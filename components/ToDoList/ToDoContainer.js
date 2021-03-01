import ToDoList from "./ToDoList";

const toDos = [
    {
        text: "hello world",
        isCompleted: true,
        id: 123
    },
    {
        text: "hello world 2",
        isCompleted: false,
        id: 1234
    }
]

function ToDoContainer() {
    return (
        <ToDoList todos={toDos} />
    )
}

export default ToDoContainer;