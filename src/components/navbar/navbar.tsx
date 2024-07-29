import React from "react";
import NavLinks from "./components/nav-links";
import Logo from "@/components/logo/logo";
import SearchButton from "./nav-extra/components/search-button";
import NavExtra from "./nav-extra/nav-extra";
import Hamburger from "./nav-extra/components/hamburger";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-muted">
      <div className="mx-auto px-4 md:px-8 flex h-14 max-w-screen-2xl items-center">
        <Hamburger />
        <div className="mr-4 hidden md:flex">
          <Logo />
          <NavLinks />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <SearchButton />
          <NavExtra />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
