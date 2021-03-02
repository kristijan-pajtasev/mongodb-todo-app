import styles from './todoitem.module.scss';

function ToDoItem({text, id, isCompleted}) {
    return (
        <div className={styles.ToDoItem}>
            <div>{text}</div>
            <div>{id}</div>
            <div>{isCompleted ? "completed" : "not completed"}</div>
        </div>
    )
}

export default ToDoItem;