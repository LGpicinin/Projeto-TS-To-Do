import styles from './Modal.module.css'

interface Props {
    children: React.ReactNode;
}

const Modal = ({ children }: Props) => {

    const closeModal = ():void => {
        const modal = document.querySelector("#modal");

        modal!.classList.add("hide");
    }

    return (
        <div id='modal' className='hide'>
            <div className={styles.fade}></div>
            <div className={styles.modal}>
                <div className={styles.action}>
                    <i onClick={() => closeModal()} className='bi bi-x'></i>
                </div>
                <div className={styles.formContainer}>
                    <h2>Edição de tarefa</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal