import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";

import { Layout } from "../components/layout";
import { VolunteerInfoSection } from "../components/molecule/VolunteerInfoSection/VolunteerInfoSection";
import { JoinUsForm } from "../components/molecule/JoinUsForm/JoinUsForm";
import { JoinUsCarousels } from "../components/organism/JoinUsCarousels/JoinUsCarousels";

export function Internship() {
  const heroBannerHeading = (
    <h1>
      <span className="font-green">Learn</span> With Us
    </h1>
  );

  const description =
    "At Rise India Foundation, we are committed to creating positive change and uplifting communities across the nation. Our relentless dedication drives us to provide vital support and opportunities to those in need, empowering them to realize their full potential.";

  const url = "/about-us";

  return (
    <Layout footerCta={true}>
      <HeroBanner
        heading={heroBannerHeading}
        description={description}
        url={url}
        backgroundImage="../../assets/images/get-involve-hero.webp"
      />
      <VolunteerInfoSection />
      <JoinUsCarousels />
      <JoinUsForm title="Internship" sheetName="Internship" />
    </Layout>
  );
}
