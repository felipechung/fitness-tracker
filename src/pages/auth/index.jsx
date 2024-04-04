import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../config/firebase.config';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import './index.css';
import { useAuth } from '../../contexts/Auth';
import { CircularLoading } from '../../components/CircularLoading';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { saveToLocalStorage } = useAuth();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    saveToLocalStorage(results);
  };

  const signInWithPassword = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const results = await signInWithEmailAndPassword(auth, email, password);
      saveToLocalStorage(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pageContainer">
      <div className="loginContainer">
        <h1>Fitness tracker</h1>
        <div className="authContainer">
          <form onSubmit={signInWithPassword}>
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="buttonsContainer">
              {isLoading ? (
                <CircularLoading />
              ) : (
                <>
                  <button type="submit" onClick={signInWithPassword}>
                    Login
                  </button>

                  <div className="dividerWithText">
                    <div className="horizontalLine" />

                    <span>or</span>
                    <div className="horizontalLine" />
                  </div>

                  <button
                    type="button"
                    className="googleButton"
                    onClick={signInWithGoogle}
                  >
                    <FcGoogle /> <span>Login with Google</span>
                  </button>
                </>
              )}
            </div>
          </form>

          <span>
            Not Registered yet?{' '}
            <span
              className="registerAccount"
              onClick={() => navigate('/sign-up')}
            >
              Create an Account
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
