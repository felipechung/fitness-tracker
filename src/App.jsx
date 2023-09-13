import { BrowserRouter } from 'react-router-dom';

import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import { useEffect, useState } from 'react';
import { auth } from './config/firebase.config';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>{user ? <PrivateRoutes /> : <PublicRoutes />}</BrowserRouter>
  );
}

export default App;
