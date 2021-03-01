function ToDoItem({text, id, isCompleted}) {
    return (
        <div>
            <div>{text}</div>
            <div>{id}</div>
            <div>{isCompleted ? "completed" : "not completed"}</div>
        </div>
    )
}

export default ToDoItem;