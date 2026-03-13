import { ReactNode } from "react";
import Sidebar from "../navbar/components/sidebar";
import RightNavbar from "../navbar/components/right-navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container py-8 flex">
      <Sidebar />
      <main className="w-full md:px-40">{children}</main>
      <RightNavbar />
    </div>
  );
};

export default Layout;
