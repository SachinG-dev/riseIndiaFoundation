import Banner from "../components/organism/Banner/Banner";
import { AboutUsDetailsSection } from "../components/organism/AboutUsDetailsSection/AboutUsDetailsSection";
import { ImpactSection } from "../components/organism/ImpactSection/ImpactSection";
import { Layout } from "../components/layout";

export function AboutUs() {
  return (
    <Layout>
      <Banner />
      <AboutUsDetailsSection />
      <ImpactSection />
    </Layout>
  );
}
