import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="d-flex flex-row justify-content-between align-items-center p-3">
        <ul className="d-flex flex-row list-none p-0 m-0 gap-[30px]">
          <li className={"margin-left-30"}>
            <Link className={"no-underline text-inherit"} to="/">
              <button className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 hover:border-gray-400">
                Search
              </button>
            </Link>
          </li>
          <li>
            <Link className={"no-underline text-inherit"} to="/hotels">
              <button className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 hover:border-gray-400">
                Hotels
              </button>
            </Link>
          </li>
          <li>
            <Link className={"no-underline text-inherit"} to="/countries">
              <button className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 hover:border-gray-400">
                Countries
              </button>
            </Link>
          </li>
        </ul>
        <div>
          <Link
            className={"no-underline text-inherit"}
            to="https://tryhackme.com/r/dashboard"
          >
            <button className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 hover:border-gray-400">
              TryHackMe
            </button>
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
