import HeroSection from "@/components/hero-section/hero-section";
import Container from "@/components/ui/container";
import WorkPlace from "@/components/work-place/work-place";
import AboutSection from "@/components/about-section/about-section";
import ProjectSection from "@/components/project-section/project-section";
import BodyBanner from "@/components/body-banner/body-banner";

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <WorkPlace />
        <AboutSection />
        <ProjectSection />
        <BodyBanner />
      </Container>
    </>
  );
}
