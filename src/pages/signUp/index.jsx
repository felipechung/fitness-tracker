import { useState } from "react";
import { auth } from "../../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../Auth/index.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpWithPassword = async (event) => {
    event.preventDefault();
    const results = await createUserWithEmailAndPassword(auth, email, password);
    console.log(results);
  };
  return (
    <div className="loginContainer">
      <h1>Fitness tracker</h1>
      <form onSubmit={signUpWithPassword}>
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
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
};
