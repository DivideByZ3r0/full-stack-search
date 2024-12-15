import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="d-flex flex-row">
        <ul className="d-flex flex-row list-none p-0 m-0">
          <li>
            <Link className={"no-underline text-inherit"} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={"no-underline text-inherit"} to="/hotels">
              Hotels
            </Link>
          </li>
          <li>
            <Link className={"no-underline text-inherit"} to="/countries">
              Countries
            </Link>
          </li>
        </ul>
        <div>
          <Link
            className={"no-underline text-inherit"}
            to="https://tryhackme.com/r/dashboard"
          >
            TryHackMe
          </Link>{" "}
          Full Stack Search Challenge
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
