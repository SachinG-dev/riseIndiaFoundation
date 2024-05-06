import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { GoogleMap } from "../components/organism/GoogleMap/GoogleMap";
import { FAQSection } from "../components/molecule/FAQSection/FAQSection";
import { OurTeam } from "../components/molecule/OurTeam/OurTeam";
import { Layout } from "../components/layout";

export function ContactUs() {
  const heroBannerHeading = <h1 className="font-color-orange">Contact us</h1>;
  const description =
    "Empowering Voices, Catalyzing Change. Rise India Foundation is dedicated to raising awareness, advocating for social justice, and driving impactful policy changes for a more equitable and inclusive society.";

  return (
    <Layout footerCta={true}>
      <HeroBanner heading={heroBannerHeading} description={description} />
      <OurTeam />
      <FAQSection />
      <GoogleMap />
    </Layout>
  );
}
