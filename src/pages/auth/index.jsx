import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../config/firebase.config";
import { signInWithPopup } from "firebase/auth";
import "./index.css";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    console.log(results);
  };

  return (
    <div className="loginContainer">
      <h1>Fitness tracker</h1>

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
    </div>
  );
};
