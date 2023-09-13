import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import { useEffect, useState } from 'react';
import { auth } from './config/firebase.config';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for Firebase auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set the user in state when auth state changes
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  console.log(user);
  return (
    <BrowserRouter>{user ? <PrivateRoutes /> : <PublicRoutes />}</BrowserRouter>
  );
}

export default App;
