import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login , isAuthenticated, logout} = useContext(AuthContext);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login(username, password); 
      } catch (error) {
        console.error("Login failed", error);
        alert("Failed to login");
      }
    };
return (
<div>
  {isAuthenticated ? (
    <div>
      <p> You are already logged in, click <a href="/">here</a> to return to home.</p>
      <button onClick={logout}>Logout</button>
      </div>
  ) : (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
  )}
</div>
  );
};

export default LoginPage;