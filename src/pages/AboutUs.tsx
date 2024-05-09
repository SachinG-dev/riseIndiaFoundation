import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { AboutUsDetailsSection } from "../components/organism/AboutUsDetailsSection/AboutUsDetailsSection";
import { ImpactSection } from "../components/organism/ImpactSection/ImpactSection";
import { Layout } from "../components/layout";
import pageData from "../websiteData/aboutUsPageData.json";

export function AboutUs() {
  const heroSectionData = pageData.heroSection;
  return (
    <Layout>
      <HeroBanner heading={heroSectionData.title} description={heroSectionData.desc} backgroundImageUrl={heroSectionData.backgroundImageUrl}  />
      <AboutUsDetailsSection />
      <ImpactSection />
    </Layout>
  );
}
