"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@/components/ui/slug-layout";
import Breadcrumbs from "@/components/bread-crumbs/bread-crumbs";
import SkillsTools from "../components/skills-tools";

const SkillsToolsSlug = () => {
  const pathname = usePathname();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const currentSlug = pathname.split("/").pop() ?? null;
    setSlug(currentSlug);
  }, [pathname]);

  const renderContent = (): ReactNode => {
    switch (slug) {
      case "SkillsTools":
        return <SkillsTools />;
      default:
        return (
          <div>
            <SkillsTools />
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

export default SkillsToolsSlug;
