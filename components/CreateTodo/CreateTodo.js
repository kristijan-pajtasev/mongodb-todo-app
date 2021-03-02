import {useEffect} from "react";

function CreateTodo() {
    function createTodo() {
        const data = {
            text: "hello world"
        }
        fetch("/api/todo", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
    }

    useEffect(() => {
        // createTodo()
    }, [])
    return (
        <div>Create todo</div>
    )
}

export default CreateTodo;