import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { AboutUsDetailsSection } from "../components/organism/AboutUsDetailsSection/AboutUsDetailsSection";
import { ImpactSection } from "../components/organism/ImpactSection/ImpactSection";
import { Layout } from "../components/layout";

export function AboutUs() {
  return (
    <Layout>
      <HeroBanner />
      <AboutUsDetailsSection />
      <ImpactSection />
    </Layout>
  );
}
