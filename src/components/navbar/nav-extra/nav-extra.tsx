import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../../dark-mode/mode-toggle";

const NavExtra = () => {
  return (
    <ul className="flex items-center">
      <li>
        <Link
          href="https://github.com/fathonymaulana?tab=repositories"
          target="_blank"
        >
          <Button variant="ghost" size="icon">
            <GitHubLogoIcon width={18} height={18} />
          </Button>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/fathonymaulana/" target="_blank">
          <Button variant="ghost" size="icon">
            <InstagramLogoIcon width={18} height={18} />
          </Button>
        </Link>
      </li>
      <li>
        <ModeToggle />
      </li>
      <li>
        <Link href="mailto:maulanafathony@gmail.com" target="_blank">
          <Button className="ml-2 hidden md:block" size="sm">
            Hire Me!
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default NavExtra;
