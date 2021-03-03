import styles from './modal.module.scss'
function Modal({children, close}) {
    return (
        <div className={styles.Module}>
            <div className={styles.ModuleContainer}>
                {children}
            </div>
        </div>
    )
}

export default Modal;