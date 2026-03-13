import NavLinks from "./components/nav-links";
import Logo from "@/components/logo/logo";
import NavExtra from "./nav-extra/nav-extra";
import Hamburger from "./nav-extra/components/hamburger";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background flex justify-center border-b border-border">
      <div className="container flex justify-center w-full">
        <div className="w-full flex justify-between h-14 items-center border-x border-border px-4 md:px-8">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="hidden md:flex">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex">
              <NavExtra />
            </div>
            <Hamburger />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
