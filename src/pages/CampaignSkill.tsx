import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/";
import { GallerySection } from "../components/molecule/GallerySection/GallerySection";
import pageData from "../websiteData/campaignSkillPageData.json";

export const CampaignSkill = () => {
  const heroSectionData = pageData.heroSection;
  const galleryData = pageData.GalleryData;
  return (
    <Layout>
      <HeroBanner
        heading={heroSectionData.title}
        description={heroSectionData.desc}
        backgroundImageUrl={heroSectionData.backgroundImageUrl}
      />
       <GallerySection
        title={galleryData.title}
        description={galleryData.description}
        images={galleryData.images}
        sectionClasses={galleryData.sectionClasses}
        titleClasses = {galleryData.titleClasses}
      />
    </Layout>
  );
};
