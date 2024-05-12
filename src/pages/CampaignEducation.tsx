import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/";
import { GallerySection } from "../components/molecule/GallerySection/GallerySection";
import pageData from "../websiteData/campaignEducationPageData.json";

export const CampaignEducation = () => {
  const heroSectionData = pageData.heroSection;
  const campaignHeading = <h2 className="font-color-orange">Education</h2>;
  const campaignDescription = (
    <>
      <p>
        "With a firm belief that education is the key to breaking the cycle of
        poverty and fostering sustainable development, We have campaigns that
        inspire, educate, and empower individuals, communities, and nations.
      </p>
      <p>
        Through our innovative initiatives, we strive to tackle various
        educational challenges head-on, ranging from inadequate infrastructure
        and resources to gender disparity and lack of digital literacy. Our team
        of passionate educators, volunteers, and experts work tirelessly to
        create and implement effective solutions that address these issues,
        fostering an environment conducive to lifelong learning.";
      </p>
    </>
  );
  return (
    <Layout>
      <HeroBanner heading={heroSectionData.title} description={heroSectionData.desc} backgroundImageUrl={heroSectionData.backgroundImageUrl}  />
      <GallerySection
        heading={campaignHeading}
        description={campaignDescription}
        images={[
          {
            src: "/assets/images/dhrushti.png",
            alt: "Disaster-Relief",
            style: { width: "550px", height: "420px" },
          },
          {
            src: "/assets/images/rusum.png",
            alt: "Education",
            style: { width: "550px", height: "420px" },
          },
        ]}
      />
    </Layout>
  );
};
