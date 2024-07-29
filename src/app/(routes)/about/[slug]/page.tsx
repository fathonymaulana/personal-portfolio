"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@/components/ui/slug-layout";
import Breadcrumbs from "@/components/bread-crumbs/bread-crumbs";
import Contacts from "../components/contacts";
import Experience from "../components/experience";
import Education from "../components/education";
import About from "../components/about";

const AboutSlug = () => {
  const pathname = usePathname();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const currentSlug = pathname.split("/").pop() ?? null;
    setSlug(currentSlug);
  }, [pathname]);

  const renderContent = (): ReactNode => {
    switch (slug) {
      case "Contacts":
        return <Contacts />;
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      default:
        return (
          <div>
            <About />
          </div>
        );
    }
  };

  return (
    <Layout>
      <Breadcrumbs />
      {renderContent()}
    </Layout>
  );
};

export default AboutSlug;
