import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/";
import { GallerySection } from "../components/molecule/GallerySection/GallerySection";

export const Campaign = () => {
  const heroBannerHeading = <h1 className="font-color-orange">Campaign</h1>;

  const description =
    "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.";
  const url = "/assets/images/campaigns-banner.png";
  const CampaignHeading = (
    <h2 className="font-dark-gray">
      <span className="font-color-green">Campaigns </span>of Rise India
    </h2>
  );
  return (
    <Layout>
      <HeroBanner heading={heroBannerHeading} description={description} />
      <GallerySection heading={CampaignHeading} />
    </Layout>
  );
};
