"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@/components/ui/slug-layout";
import Breadcrumbs from "@/components/bread-crumbs/bread-crumbs";
import CurriculumVitae from "../components/curriculum-vitae";
import Documentation from "../components/documentation";

const DocsSlug = () => {
  const pathname = usePathname();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const currentSlug = pathname.split("/").pop() ?? null;
    setSlug(currentSlug);
  }, [pathname]);

  const renderContent = (): ReactNode => {
    switch (slug) {
      case "CurriculumVitae":
        return <CurriculumVitae />;
      default:
        return (
          <div>
            <Documentation />
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

export default DocsSlug;
