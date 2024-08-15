import { RiMenu2Line } from "react-icons/ri";
import TopContactBar from "./TopContactBar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <TopContactBar />
      <div className="navbar min-h-2 lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu2Line className="text-2xl"/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <a>Furniture</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
              <a>Catalogue</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Furniture</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <details>
                <summary>Furniture</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Catalogue</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
           <Link to="/" className="underline text-amber-400 font-bold">sign In</Link>
           <button className="btn bg-amber-400 hover:bg-amber-600 rounded-full">Sign UP</button>
        </div>
      </div>
    </div>
  );
}
