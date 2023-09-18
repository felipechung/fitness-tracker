import { Sidebar } from '../Sidebar';
import './index.css';

export const PrivateBase = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};
