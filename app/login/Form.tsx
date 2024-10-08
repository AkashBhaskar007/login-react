import { useState } from "react";
import "../globals.css"; // Import global styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export default function Form({
  setLoggedIn,
}: {
  setLoggedIn: (value: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const hardcodedPassword = "Minnu@99";

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === hardcodedPassword) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };
  const togglePasswordVisibility = (): any => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleLogin}>
      <p>Dhairyam ayt test cheto!! Pottathilla</p>

      <div className="email-input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {password && (
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> {}
            </span>
          )}
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}
