import styles from './modal.module.scss'
function Modal({children, close}) {
    return (
        <div className={styles.Module} onClick={close}>
            <div className={styles.ModuleContainer}>
                {children}
            </div>
        </div>
    )
}

export default Modal;