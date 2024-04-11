import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/frontend1">Micro front-end 1</Link>
      <Link to="/frontend2">Micro front-end 2</Link>
    </div>
  );
};

export default Menu;
