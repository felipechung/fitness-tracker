import { FcGoogle } from "react-icons/fc";

import "./index.css";

export const Auth = () => {
  return (
    <div className="loginContainer">
      <h1>Fitness tracker</h1>
      <div className="inputGroup">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required />
      </div>

      <div className="inputGroup">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className="buttonsContainer">
        <button type="button">Login</button>

        <div className="dividerWithText">
          <div className="horizontalLine" />

          <span>or</span>
          <div className="horizontalLine" />
        </div>

        <button type="button" className="googleButton">
          <FcGoogle /> <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};
