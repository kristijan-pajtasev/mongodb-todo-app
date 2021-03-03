import ToDoItem from "../ToDoItem";
import styles from './todolist.module.scss';
import {useState} from "react";
import Modal from "../Modal";
import ToDoContainer from "./index";
import CreateTodo from "../CreateTodo";

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

    function closeModal() {
        setShowAddModal(false);
    }

    return (
        <div>
            <ul className={styles.ToDoList}>
                {getToDoItems(todos)}
            </ul>
            {showAddModal && (
                <Modal
                close={() => setShowAddModal(false)} >
                    <CreateTodo cancel={closeModal} />
                </Modal>
            )}
            <button onClick={() => setShowAddModal(!showAddModal)}
                    className={styles.AddToDoItemButton}>Add Item</button>
        </div>
    )
}

export default ToDoList;