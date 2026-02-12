import { useState } from "react";
import logo2 from "../assets/images/logo2.png";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        {/* HAMBURGER MENU */}
        <div className="menu-hamburger" onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* LOGO + NAME */}
        <div className="logo">
          <img src={logo2} alt="VV Roofing Logo" className="logo-img" />
          VV<span>Roofing</span>
        </div>

       
      </header>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#products" onClick={() => setOpen(false)}>Products</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </aside>
    </>
  );
}
