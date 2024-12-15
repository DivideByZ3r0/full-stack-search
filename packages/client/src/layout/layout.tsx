import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="d-flex flex-row">
        <ul className="d-flex flex-row ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
        <div>
          <Link to="https://tryhackme.com/r/dashboard">TryHackMe</Link> Full
          Stack Search Challenge
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
