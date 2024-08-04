import React from "react";
import ThemeSwitch from "../theameSwitcher/ThemeSwitch";

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-200 dark:bg-gray-800">
      <ThemeSwitch />
    </header>
  );
};

export default Header;
