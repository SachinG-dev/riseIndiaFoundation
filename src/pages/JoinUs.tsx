import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";

import { Layout } from "../components/layout";
import { VolunteerInfoSection } from "../components/molecule/VolunteerInfoSection/VolunteerInfoSection";
import { JoinUsForm } from "../components/molecule/JoinUsForm/JoinUsForm";
import { JoinUsCarousels } from "../components/organism/JoinUsCarousels/JoinUsCarousels";
import pageData from "../websiteData/joinUsPageData.json";

export function JoinUs() {
  const heroSectionData = pageData.heroSection;

  return (
    <Layout footerCta={true}>
      <HeroBanner
        heading={heroSectionData.title}
        description={heroSectionData.desc}
        backgroundImageUrl={heroSectionData.backgroundImageUrl}
        buttonText={heroSectionData.buttonText}
        buttonURL={heroSectionData.buttonUrl}
      />
      <VolunteerInfoSection />
      <JoinUsCarousels />
      <JoinUsForm title="Join Us" sheetName="Join Us" />
    </Layout>
  );
}
