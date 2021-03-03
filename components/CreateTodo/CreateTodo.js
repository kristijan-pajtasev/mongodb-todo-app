import {useEffect, useState} from "react";

function CreateTodo({cancel}) {
    const [todoValue, setTodoValue] = useState("");
    function createTodo() {
        const data = {
            text: todoValue
        }
        fetch("/api/todo", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        }).then(
            () => { cancel(); }
        )
    }

    useEffect(() => {
        // createTodo()
    }, [])
    return (
        <div>
            <div onClick={cancel}>Close</div>
            <div>
                <label>
                    ToDo:
                </label>
            </div>
            <div>
                <textarea value={todoValue} onChange={ev => setTodoValue(ev.target.value)}/>
            </div>
            <div>
                <button onClick={createTodo}>Submit</button>
                <button onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateTodo;