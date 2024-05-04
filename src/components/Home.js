import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
        <button className="m-2 btn border rounded"> 
          <Link to="SignInForm" className="m-2 text-decoration-none">Sign In</Link>
        </button>
        <button className=" border btn rounded ">
          <Link to="SignUpForm" className="m-2 text-decoration-none">Sign Up</Link>
        </button>
      </nav>
      <Outlet />
    </>
  );
}
