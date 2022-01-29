import { createPortal } from 'react-dom';
import 'styles/UI/Modal.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Modal = ({ children, className }: Props) => {
  return createPortal(
    <div className={`modal ${className}`}>{children}</div>,
    document.getElementById('root') as HTMLDivElement
  );
};

export default Modal;
