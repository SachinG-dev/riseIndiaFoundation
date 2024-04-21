import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { GoogleMap } from "../components/organism/GoogleMap/GoogleMap";
import { FAQSection } from "../components/molecule/FAQSection/FAQSection";
import { OurTeam } from "../components/molecule/OurTeam/OurTeam";
import { Layout } from "../components/layout";

export function ContactUs() {
  return (
    <Layout>
      <HeroBanner />
      <OurTeam />
      <FAQSection />
      <GoogleMap />
    </Layout>
  );
}
