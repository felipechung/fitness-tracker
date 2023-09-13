import { Sidebar } from '../sidebar';

export const PrivateBase = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
