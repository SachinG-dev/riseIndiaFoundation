import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/";
import { GallerySection } from "../components/molecule/GallerySection/GallerySection";

export const CampaignHealth = () => {
  const heroBannerHeading = <h1 className="font-color-orange">Health</h1>;

  const description =
    "We work for the state of complete physical, mental, and social well-being of our beneficiaries and not simply on any specific infirmity.";
  const url = "/assets/images/campaigns-banner.png";
  const campaignHeading = <h2 className="font-color-orange">Health</h2>;
  const campaignDescription = (
    <>
      <p>
        Rise India Foundation is dedicated to promoting health and well-being
        for all. Our mission is to bridge the gaps in healthcare access and
        deliver life-changing solutions to individuals and communities in need.
      </p>
      <p>
        With a deep understanding that good health is the foundation for a
        prosperous and fulfilling life, Rise India Foundation spearheads
        impactful campaigns focused on improving healthcare outcomes and
        addressing pressing health challenges. We believe that everyone,
        regardless of their background, deserves the opportunity to lead a
        healthy and vibrant life.
      </p>
    </>
  );
  return (
    <Layout>
      <HeroBanner heading={heroBannerHeading} description={description} />
      <GallerySection
        heading={campaignHeading}
        description={campaignDescription}
        images={[
          {
            src: "/assets/images/sanjeevani.png",
            alt: "Sanjeevani",
            style: { width: "550px", height: "420px" },
          },
        ]}
      />
    </Layout>
  );
};
