import { Sidebar } from '../Sidebar';

export const PrivateBase = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
