import React, { useState } from "react";
import "./nav.css";
import navLogo from "../../assets/Logos/knwmdzLogo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

// window.addEventListener("scroll", function() {
//   var navbar = document.getElementById("nav__container");
//   navbar.classList.toggle("bg", window.scrollY > 0);
// });

// let menutoggle = document.querySelector('.nav__links');
// menutoggle.onclick = function() {
// 	menutoggle.classList.toggle('active');
// };

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOverlay, setToggleOverlay] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    // setToggleOverlay(!toggleOverlay);
  };
  return (
    <>
      <section id="nav">
        <div id="nav__container">
          <div className="container">
            <div className="nav__logo">
              <Link to="/">
                <img src={navLogo} alt="" />
              </Link>
            </div>
            <div className="nav__lists">
              {/* {toggleMenu && ( */}
              <ul className="lists">
                <li>
                  {/* <Link to="/about">Бидний тухай</Link> */}
                  <a href="#experience">Бидний тухай</a>
                </li>
                <li>
                  <a href="#event">Эвент</a>
                </li>
                <li>
                  {/* <a href="#team">Гишүүд</a> */}
                  <Link to="/members">Гишүүд</Link>
                </li>
                <li>
                  <Link to="/contact" className="btn small__btn">
                    Нэгдэх
                  </Link>
                </li>
              </ul>
              {/* )} */}
              {/* onClick={toggleNav} */}
              <ul className="menu" onClick={toggleNav}>
                <li>
                  <BiMenuAltRight className="menuIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="hidden" className={toggleMenu ? "close" : "menu"}>
          {/* {toggleMenu && ( */}
          <ul className="hidden__lists">
            <li>
              <a href="#experience">Бидний тухай</a>
            </li>
            <li>
              <a href="#event">Эвент</a>
            </li>
            <li>
              <Link to="/members">Гишүүд</Link>
            </li>
            <li>
              <Link to="/contact" className="btn small__btn">
                Нэгдэх
              </Link>
            </li>
          </ul>
          {/* )} */}
          {/* <div
						className="overlay"
						onClick={() => setToggleOverlay(!toggleOverlay)}
					>
						<span
							className={toggleOverlay ? 'close' : 'menu'}
						>
							asdasasdasd
						</span>
					</div> */}
        </div>
      </section>
      <div className="overlay" className={toggleMenu ? "overlay" : "lay"}></div>
    </>
  );
};

export default Navbar;
