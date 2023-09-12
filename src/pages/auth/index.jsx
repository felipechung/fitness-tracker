import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../config/firebase.config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./index.css";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveToLocalStorage = (results) => {
    const userInfo = {
      userId: results.user.uid,
      email: results.user.email,
    };
    localStorage.setItem("auth", JSON.stringify(userInfo));
  };

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    saveToLocalStorage(results);
    navigate("/fitness-tracker");
  };

  const signInWithPassword = async (event) => {
    event.preventDefault();
    const results = await signInWithEmailAndPassword(auth, email, password);
    saveToLocalStorage(results);
    navigate("/fitness-tracker");
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
          Not Registered yet?{" "}
          <span
            className="registerAccount"
            onClick={() => navigate("/sign-up")}
          >
            Create an Account
          </span>
        </span>
      </form>
    </div>
  );
};
