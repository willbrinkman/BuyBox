import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <h1>BuyBox</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
