import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" h-14 md:h-20 xl:h-24">
      <div class=" max-w-screen-xl mx-auto h-full flex justify-evenly items-center">
        <Link to="/">
          <button className=" btn-style">JY's Page</button>
        </Link>
        <Link to="/portfolio">
          <button className="btn-style">Portfolio</button>
        </Link>
        <Link to="/music">
          <button className="btn-style">Music</button>
        </Link>
        <Link to="/stock">
          <button className="btn-style">Stock Trading</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
