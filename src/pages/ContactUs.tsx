import Banner from "../components/organism/Banner/Banner";
import { GoogleMap } from "../components/organism/GoogleMap/GoogleMap";
import { FAQSection } from "../components/molecule/FAQSection/FAQSection";
import { OurTeam } from "../components/molecule/OurTeam/OurTeam";
import { Layout } from "../components/layout";

export function ContactUs() {
  return (
    <Layout>
      <Banner />
      <OurTeam />
      <FAQSection />
      <GoogleMap />
    </Layout>
  );
}
