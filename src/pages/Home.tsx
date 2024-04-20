import HeroBanner from "../components/organism/HeroBanner/HeroBanner";
import { AboutRiseIndiaFoundation } from "../components/organism/AboutRiseIndiaFoundation/AboutRiseIndiaFoundation";
import { ImpactSection } from "../components/organism/ImpactSection/ImpactSection";
import { Testimonials } from "../components/organism/Testimonials/Testimonials";
import InspiringSuccessStories from "../components/organism/InspiringSuccessStories/InspiringSuccessStories";
import { ProgramInitiatives } from "../components/organism/WorkInitiatives/ProgramInitiatives";
import { Layout } from "../components/layout/";

export function Home() {
  return (
    <Layout>
      <HeroBanner />
      <AboutRiseIndiaFoundation />
      <ImpactSection />
      <Testimonials />
      <InspiringSuccessStories />
      <ProgramInitiatives />
    </Layout>
  );
}
