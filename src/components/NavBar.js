import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Sam Tong
          </NavLink>

          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-white text-2xl font-bold"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-white text-2xl font-bold"
            activeClassName="text-red-100 bg-red-700"
          >
            Project
          </NavLink>

          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-white text-2xl font-bold"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.youtube.com/channel/UC8xe8sfGBJnELPiWqf8AQTA" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/>
          <SocialIcon url="https://space.bilibili.com/16421401" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/>
          <SocialIcon url="https://twitter.com/FatSam90" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/>
        </div>
      </div>
    </header>
  );
}
