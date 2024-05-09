import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { OurSuccessStories } from "../components/organism/OurSuccessStories/OurSuccessStories";
import { Layout } from "../components/layout/";
import { WhatWeDo } from "../components/molecule/WhatWeDo/WhatWeDo";
import { OurCampaigns } from "../components/organism/OurCampaigns/OurCampaigns";
import pageData from "../websiteData/ourWorkPageData.json";

export function OurWork() {
  const heroSectionData = pageData.heroSection;

  return (
    <Layout>
      <HeroBanner heading={heroSectionData.title} description={heroSectionData.desc} backgroundImageUrl={heroSectionData.backgroundImageUrl}  buttonText={heroSectionData.buttonText} buttonURL={heroSectionData.buttonUrl}/>
      <WhatWeDo />
      <OurCampaigns />
      <OurSuccessStories embedId="4kLviL8XwAI" />
    </Layout>
  );
}
