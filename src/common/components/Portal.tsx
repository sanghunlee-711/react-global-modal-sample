import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface IProps {
  children: ReactNode;
  id?: string;
}

const Portal = ({ children, id }: IProps) => {
  const el = document.getElementById(id || 'portal');
  return ReactDOM.createPortal(children, el as Element);
};

export default Portal;
