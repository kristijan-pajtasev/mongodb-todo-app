import ToDoList from "./ToDoList";
import {useEffect, useState} from "react";


function ToDoContainer() {
    const [todos, setToDos] = useState(null);
    useEffect(() => {
        fetch("/api/todo")
            .then(res => res.json())
            .then(({todos}) => setToDos(todos))
    }, [])

    if(!todos) return <div>loading</div>
    return (
        <ToDoList todos={todos} />
    )
}

export default ToDoContainer;