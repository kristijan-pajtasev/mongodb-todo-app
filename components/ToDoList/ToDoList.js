import ToDoItem from "../ToDoItem";
import styles from './todolist.module.scss';
import {useState} from "react";
import Modal from "../Modal";

function ToDoList({todos}) {
    const [showAddModal, setShowAddModal] = useState(false);

    function getToDoItems(todos) {
        return todos.map(todo => {
            return (
                <li className={styles.ToDoListItemContainer} key={`todo-${todo.id}`}>
                    <ToDoItem {...todo}/>
                </li>
            )
        })
    }

    return (
        <div>
            <ul className={styles.ToDoList}>
                {getToDoItems(todos)}
            </ul>
            {showAddModal && <Modal
                close={() => setShowAddModal(false)} />}
            <button onClick={() => setShowAddModal(!showAddModal)}
                    className={styles.AddToDoItemButton}>Add Item</button>
        </div>
    )
}

export default ToDoList;