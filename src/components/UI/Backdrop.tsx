import { createPortal } from 'react-dom';
import 'styles/UI/Backdrop.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Backdrop = ({ children, className, onClick }: Props) => {
  return createPortal(
    <div className={`backdrop ${className}`} onClick={onClick}>
      {children}
    </div>,
    document.getElementById('root') as HTMLDivElement
  );
};

export default Backdrop;
