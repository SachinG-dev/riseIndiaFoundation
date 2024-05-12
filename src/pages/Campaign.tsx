import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/";
import { GallerySection } from "../components/molecule/GallerySection/GallerySection";
import pageData from "../websiteData/campaignPageData.json";

export const Campaign = () => {
  const heroSectionData = pageData.heroSection;

  const CampaignHeading = (
    <h2 className="font-dark-gray">
      <span className="font-color-green">Campaigns </span>of Rise India
    </h2>
  );
  return (
    <Layout>
      <HeroBanner
        heading={heroSectionData.title}
        description={heroSectionData.desc}
        backgroundImageUrl={heroSectionData.backgroundImageUrl}
      />
      <GallerySection heading={CampaignHeading} />
    </Layout>
  );
};
