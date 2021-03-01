import ToDoItem from "../ToDoItem";

function ToDoList({todos}) {
    function getToDoItems(todos) {
        return todos.map(todo => {
            return (
                <li key={`todo-${todo.id}`}>
                    <ToDoItem {...todo}/>
                </li>
            )
        })
    }

    return (
        <div>
            <ul>
                {getToDoItems(todos)}
            </ul>
        </div>
    )
}

export default ToDoList;