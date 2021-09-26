import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const links = [
  { to: "/", title: "Home" },
  { to: "/electronics", title: "Electronics" },
  { to: "/men's", title: "Men's" },
  { to: "/women's", title: "Women's" },
  { to: "/jewelry", title: "Jewelry" },
  { to: "/login", title: "Login" },
  { to: "/register", title: "Register" },
];

export const Navbar = () => {
  return (
    <div className="navbar">
      {links.map(({ to, title }) => {
        return (
          <Link key={title} to={to}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};
