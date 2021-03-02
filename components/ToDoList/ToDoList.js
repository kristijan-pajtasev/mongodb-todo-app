import ToDoItem from "../ToDoItem";
import styles from './todolist.module.scss';

function ToDoList({todos}) {
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
        </div>
    )
}

export default ToDoList;