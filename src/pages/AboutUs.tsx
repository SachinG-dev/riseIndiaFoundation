import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { AboutUsDetailsSection } from "../components/organism/AboutUsDetailsSection/AboutUsDetailsSection";
import { Layout } from "../components/layout";
import pageData from "../websiteData/aboutUsPageData.json";
import { Contributions } from "../components/atom/ContributionsSection/ContributionsSection";

export function AboutUs() {
  const heroSectionData = pageData.heroSection;
  const contributionsData = pageData.ContributionsSection;
  return (
    <Layout>
      <HeroBanner heading={heroSectionData.title} description={heroSectionData.desc} backgroundImageUrl={heroSectionData.backgroundImageUrl}  />
      <AboutUsDetailsSection />
      <Contributions 
        title={contributionsData.title} 
        desc={contributionsData.desc} 
        cardData={contributionsData.contributionsCardData} 
        sectionClass={contributionsData.sectionClass} 
        sectionButtonText={contributionsData?.sectionButtonText}
        sectionButtonURL={contributionsData?.sectionButtonURL}
        />
    </Layout>
  );
}
