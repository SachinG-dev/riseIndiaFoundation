import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/";
import { GallerySection } from "../components/molecule/GallerySection/GallerySection";
import pageData from "../websiteData/campaignAdvocacyPageData.json";

export const CampaignAdvocacy = () => {
  const heroSectionData = pageData.heroSection;
  const campaignHeading = <h2 className="font-color-orange">Advocacy</h2>;
  const campaignDescription = (
    <>
      <p className="mt-4">
        Rise India Foundation is committed to advocacy for social justice and
        driving positive change. Our unwavering mission is to amplify the voices
        of marginalized communities, champion their rights, and catalyze
        impactful policy reforms for a more equitable and inclusive society.
      </p>
      <p>
        Through strategic campaigns, grassroots mobilization, and collaborative
        partnerships, Rise India Foundation tackles pressing societal issues
        head-on. We work tirelessly to raise awareness, engage stakeholders, and
        advocate for transformative policies that address systemic inequalities,
        promote human rights, and empower the most vulnerable populations.
      </p>
    </>
  );
  return (
    <Layout>
      <HeroBanner
        heading={heroSectionData.title}
        description={heroSectionData.desc}
        backgroundImageUrl={heroSectionData.backgroundImageUrl}
      />
      <GallerySection
        heading={campaignHeading}
        description={campaignDescription}
        images={[
          {
            src: "/assets/images/sattark.png",
            alt: "Sattark",
            style: { width: "550px", height: "420px" },
          },
          {
            src: "/assets/images/sattark.png",
            alt: "Sanvidhan",
            style: { width: "550px", height: "420px" },
          },
        ]}
      />
    </Layout>
  );
};
