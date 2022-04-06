import { createPortal } from 'react-dom';
import styles from 'styles/UI/Modal.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Modal = ({ children, className }: Props) => {
  return createPortal(
    <div className={`${styles.modal} ${className}`}>{children}</div>,
    document.getElementById('root') as HTMLDivElement
  );
};

export default Modal;
