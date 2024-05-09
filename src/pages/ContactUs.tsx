import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { GoogleMap } from "../components/organism/GoogleMap/GoogleMap";
import { FAQSection } from "../components/molecule/FAQSection/FAQSection";
import { OurTeam } from "../components/molecule/OurTeam/OurTeam";
import { Layout } from "../components/layout";
import pageData from "../websiteData/contactUsPageData.json";

export function ContactUs() {
  const heroSectionData = pageData.heroSection;
  return (
    <Layout>
      <HeroBanner heading={heroSectionData.title} description={heroSectionData.desc} backgroundImageUrl={heroSectionData.backgroundImageUrl}  />
      <OurTeam />
      <FAQSection />
      <GoogleMap />
    </Layout>
  );
}
