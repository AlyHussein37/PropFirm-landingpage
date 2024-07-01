import React, { useState, useRef, useEffect } from "react";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Header({ theme, toggleTheme }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <header className="w-full py-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-2xl mr-4">
            <Link href={"/"}>
              <Image
                src={
                  theme === "light"
                    ? "/finitic logo.png"
                    : "/finitic logo white.png"
                }
                width={100}
                height={50}
                alt="logo"
              />
            </Link>
          </h1>
        </div>
        <div className="md:hidden">
          <button onClick={handleToggleMenu} className="text-xl">
            {showMenu ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
        <nav
          ref={menuRef}
          className={`md:hidden fixed inset-y-0 left-0 transform ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } transition duration-300 ease-in-out bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white w-1/2 z-50`}
        >
          <ul className="flex flex-col mt-5">
            <li className="m-2">
              <Link href="#">Home</Link>
            </li>
            <li className="m-2">
              <Link href="#products">Products</Link>
            </li>
            <li className="m-2">
              <Link href="#features">Features</Link>
            </li>
            <li className="m-2">
              <Link href="#contact">Contact</Link>
            </li>
            <li className="m-2">
              <button onClick={toggleTheme} className="text-xl">
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
              </button>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex md:space-x-4">
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#products">Products</Link>
              </li>
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="text-xl">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
