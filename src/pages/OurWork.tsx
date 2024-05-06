import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { OurSuccessStories } from "../components/organism/OurSuccessStories/OurSuccessStories";

import { Layout } from "../components/layout/";

import { WhatWeDo } from "../components/molecule/WhatWeDo/WhatWeDo";
import { OurCampaigns } from "../components/organism/OurCampaigns/OurCampaigns";
export function OurWork() {
  const heroBannerHeading = (
    <h1>
      <span className="font-orange">Education </span> is Empowerment
    </h1>
  );

  const description =
    "We believe in spreading the power of education to all. We teach and guide students toward the field of their choice with moral values and behaviour.";

  const url = "/about-us";
  return (
    <Layout footerCta={true}>
      <HeroBanner
        heading={heroBannerHeading}
        description={description}
        url={url}
      />
      <WhatWeDo />
      <OurCampaigns />
      <OurSuccessStories embedId="4kLviL8XwAI" />
    </Layout>
  );
}
