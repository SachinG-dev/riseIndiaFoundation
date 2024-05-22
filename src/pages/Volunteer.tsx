import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout";
import { JoinUsForm } from "../components/molecule/JoinUsForm/JoinUsForm";
import { JoinUsCarousels } from "../components/organism/JoinUsCarousels/JoinUsCarousels";
import pageData from "../websiteData/volunteerPageData.json";
import { RichEditor } from "../components/atom/RichEditor/RichEditor";

export function Volunteer() {
  const heroSectionData = pageData.heroSection;
  const volunteerData = pageData.VolunteerSectionData;

  return (
    <Layout footerCta={true}>
      <HeroBanner
        heading={heroSectionData.title}
        description={heroSectionData.desc}
        backgroundImageUrl={heroSectionData.backgroundImageUrl}
        buttonText={heroSectionData.buttonText}
        buttonURL={heroSectionData.buttonUrl}
      />
      <RichEditor contentBlocks={volunteerData} className="text-center py-5" />
      <JoinUsCarousels />
      <JoinUsForm title="Join Us" sheetName="Join Us" />
    </Layout>
  );
}
