import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { AboutRiseIndiaFoundation } from "../components/organism/AboutRiseIndiaFoundation/AboutRiseIndiaFoundation";
import { ImpactSection } from "../components/organism/ImpactSection/ImpactSection";
import { Testimonials } from "../components/organism/Testimonials/Testimonials";
import InspiringSuccessStories from "../components/organism/InspiringSuccessStories/InspiringSuccessStories";
import { ProgramInitiatives } from "../components/organism/WorkInitiatives/ProgramInitiatives";
import { Layout } from "../components/layout/";
import { OurPartner } from "../components/organism/OurPartners/OurPartners";
import { OurReachSection } from "../components/organism/OurReachSection/OurReachSection";

export function Home() {
  const heroBannerHeading = (
    <h1>
      Hope & Empowering Change <span className="font-orange">Rise</span> India{" "}
      <span className="font-green">Foundation</span>
    </h1>
  );

  const description =
    "At Rise India Foundation, we are committed to creating positive change and uplifting communities across the nation. Our relentless dedication drives us to provide vital support and opportunities to those in need, empowering them to realize their full potential.";

  const url = "/about-us";
  return (
    <Layout>
      <HeroBanner />
      <AboutRiseIndiaFoundation />
      <ImpactSection />
      <InspiringSuccessStories />
      <ProgramInitiatives />
      <OurReachSection />
      <Testimonials />
      <OurPartner />
    </Layout>
  );
}
