import { createPortal } from 'react-dom';
import styles from 'styles/UI/Backdrop.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Backdrop = ({ children, className, onClick }: Props) => {
  return createPortal(
    <div className={`${styles.backdrop} ${className}`} onClick={onClick}>
      {children}
    </div>,
    document.getElementById('root') as HTMLDivElement
  );
};

export default Backdrop;
