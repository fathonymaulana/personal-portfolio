"use client";

import {
  aboutCategories,
  docsCategories,
  projectsCategories,
  skillsToolsCategories,
} from "@/constant/nav-links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = {
    "Getting Started": docsCategories.map((link) => ({
      href: link.path,
      label: link.name,
    })),
    About: aboutCategories.map((link) => ({
      href: link.path,
      label: link.name,
    })),
    "Skills & Tools": skillsToolsCategories.map((link) => ({
      href: link.path,
      label: link.name,
    })),
    Projects: projectsCategories.map((link) => ({
      href: link.path,
      label: link.name,
    })),
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <aside
      className={`sticky top-28 h-[calc(100vh-4rem)] w-48 ${
        isSidebarOpen ? "block" : "hidden"
      } md:block`}
    >
      <div
        dir="ltr"
        className="sidebar-content overflow-hidden hover:overflow-y-auto"
      >
        {Object.entries(links).map(([category, links]) => (
          <div key={category} className="pb-4 link-container text-sm">
            <span className="py-4 font-semibold">{category}</span>
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={handleLinkClick}>
                <span
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent py-2 hover:underline font-medium",
                    {
                      "text-foreground": pathname === link.href,
                      "text-muted-foreground": pathname !== link.href,
                    }
                  )}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <button onClick={toggleSidebar} className="md:hidden">
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>
    </aside>
  );
};

export default Sidebar;
