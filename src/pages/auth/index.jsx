import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../config/firebase.config';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import './index.css';
import { useAuth } from '../../contexts/Auth';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { saveToLocalStorage } = useAuth();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    saveToLocalStorage(results);
  };

  const signInWithPassword = async (event) => {
    event.preventDefault();
    const results = await signInWithEmailAndPassword(auth, email, password);
    saveToLocalStorage(results);
  };

  return (
    <div className="loginContainer">
      <h1>Fitness tracker</h1>
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
          <button type="button">Login</button>

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
        </div>
        <span>
          Not Registered yet?{' '}
          <span
            className="registerAccount"
            onClick={() => navigate('/sign-up')}
          >
            Create an Account
          </span>
        </span>
      </form>
    </div>
  );
};
