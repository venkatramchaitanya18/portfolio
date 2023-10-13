import React, { useState } from 'react';
import { logo } from '../../assets/index';
import { navLinksdata } from '../../constants';
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <div
          className={`menu ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
                className="line"
                style={{
                    width: "15px",
                    height: "3px",
                    background: "#fdfcfc",
                    margin: "5px auto",
                    transition: "0.4s",
                }}
                ></div>
                <div
                className="line"
                style={{
                    width: "15px",
                    height: "3px",
                    background: "#fdfcfc",
                    margin: "5px auto",
                    transition: "0.4s",
                }}
                ></div>
                <div
                className="line"
                style={{
                    width: "15px",
                    height: "3px",
                    background: "#fdfcfc",
                    margin: "5px auto",
                    transition: "0.4s",
                }}
                ></div>
        </div>
        {menuOpen && (
          <ul className="mobile-menu">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
