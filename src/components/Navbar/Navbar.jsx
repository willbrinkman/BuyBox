import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <div>
        <Link to="/">
          <h1>BuyBox</h1>
        </Link>
      </div>
      <div className="navbar-right">
        {isAuthenticated ? (
          <>
            <Link to="/cart">View Cart</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
