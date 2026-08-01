import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServiceCategories from "@/components/home/ServiceCategories";
import WhyUs from "@/components/home/WhyUs";
import WorksPreview from "@/components/home/WorksPreview";
import ProcessSteps from "@/components/home/ProcessSteps";
import FaqSection from "@/components/home/FaqSection";
import ContactCta from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServiceCategories />
      <WhyUs />
      <WorksPreview />
      <ProcessSteps />
      <FaqSection />
      <ContactCta />
    </>
  );
}
