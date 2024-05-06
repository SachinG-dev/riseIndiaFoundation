import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/";
import { GallerySection } from "../components/molecule/GallerySection/GallerySection";

export const CampaignAdvocacy = () => {
  const heroBannerHeading = <h1 className="font-color-orange">Advocacy</h1>;

  const description =
    "Empowering Voices, Catalyzing Change. Rise India Foundation is dedicated to raising awareness, advocating for social justice, and driving impactful policy changes for a more equitable and inclusive society.";
  const url = "/assets/images/campaigns-banner.png";
  const campaignHeading = <h2 className="font-color-orange">Advocacy</h2>;
  const campaignDescription = (
    <>
      <p>
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
      <HeroBanner heading={heroBannerHeading} description={description} />
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
            alt: "Sattark",
            style: { width: "550px", height: "420px" },
          },
        ]}
      />
    </Layout>
  );
};
