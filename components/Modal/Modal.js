import styles from './modal.module.scss'
function Modal({children, close}) {
    return (
        <div className={styles.Module} onClick={close}>
        modal
        </div>
    )
}

export default Modal;