import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase.config';
import { Splashscreen } from '../components/Splashscreen';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingInitialValues, setIsLoadingInitialValues] = useState(true);

  const saveToLocalStorage = (results) => {
    const userInfo = {
      userId: results.user.uid,
      email: results.user.email,
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoadingInitialValues(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo: user,
        authorized: !!user,
        saveToLocalStorage,
      }}
    >
      {isLoadingInitialValues ? <Splashscreen /> : children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
