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
      <GallerySection
        heading={CampaignHeading}
        images={[
          {
            src: "/assets/images/disaster-relief.png",
            alt: "Disaster-Relief",
            style: { width: "550px", height: "420px" },
          },
          {
            src: "/assets/images/education.png",
            alt: "Education",
            style: { width: "550px", height: "420px" },
          },
          {
            src: "/assets/images/health.png",
            alt: "Health",
            style: { width: "550px", height: "420px" },
          },
          {
            src: "/assets/images/advocacy.png",
            alt: "Advocacy",
            style: { width: "550px", height: "420px" },
          },
          {
            src: "/assets/images/skill-development.png",
            alt: "Skills-Development",
            style: { width: "550px", height: "420px" },
          },
        ]}
      />
    </Layout>
  );
};
