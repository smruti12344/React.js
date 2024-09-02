import style from './Modal.module.css';

function Modal({ children,onClose }) {
  return (
    <>
      <div className={style.background} onClick={onClose} />
      <dialog open className={style.module}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;