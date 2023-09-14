import { BrowserRouter } from 'react-router-dom';

import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';

import { useAuth } from './contexts/Auth';

function App() {
  const { userInfo } = useAuth();
  return (
    <BrowserRouter>
      {userInfo ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default App;
