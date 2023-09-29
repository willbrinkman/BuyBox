import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login , isAuthenticated, logout} = useContext(AuthContext);
    const navigate = useNavigate();


  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const success = await login(username, password); 
      if (success) navigate('/'); 
    };
return (
<div>
  {isAuthenticated ? (
    <div>
      <p> You are already logged in, click <Link to="/">here</Link>  to return to home.</p>
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