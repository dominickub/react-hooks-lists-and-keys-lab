import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map(link =><a key = {link} href={`"#${link}"`}>{link}</a>)}
    {/* <a id= "home" href="#home">home</a>
    <a id= "about" href="#about">about</a>
    <a id= "projects" href="#projects">projects</a> */}
  </nav>;
}

export default NavBar;
