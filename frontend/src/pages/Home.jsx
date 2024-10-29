import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      {/* <ul className="">
        <li className="">
          <NavLink className="" activeClassName="active" to="/addCrud">
            Create
          </NavLink>
        </li>
        <li className="">
          <NavLink className="" activeClassName="active" to="/getCrud">
            Display
          </NavLink>
        </li>
      </ul> */}

      <div className="display">
        <Link to="/addCrud">Add Data</Link>
        <Link to="/getCrud">Display Data</Link>
      </div>
    </div>
  );
};

export default Home;
