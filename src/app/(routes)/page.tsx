import HeroSection from "@/components/hero-section/hero-section";
import Container from "@/components/ui/container";
import WorkPlace from "@/components/work-place/work-place";
import AboutSection from "@/components/about-section/about-section";
import TestimonialsSection from "@/components/testimonials-section/testimonials-section";
import WorkSection from "@/components/work-section/work-section";
import FreelanceSection from "@/components/freelance-section/freelance-section";
import ImpactSection from "@/components/impact-section/impact-section";
import BodyBanner from "@/components/body-banner/body-banner";
import ScrollReveal from "@/components/scroll-reveal/scroll-reveal";

export default function Home() {
  return (
    <>
      <Container>
        <ScrollReveal><HeroSection /></ScrollReveal>
        <ScrollReveal><WorkSection /></ScrollReveal>
        <ScrollReveal><ImpactSection /></ScrollReveal>
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal><TestimonialsSection /></ScrollReveal>
        <ScrollReveal><WorkPlace /></ScrollReveal>
        <ScrollReveal><FreelanceSection /></ScrollReveal>
        <ScrollReveal><BodyBanner /></ScrollReveal>
      </Container>
    </>
  );
}
