import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { OurSuccessStories } from "../components/organism/OurSuccessStories/OurSuccessStories";
import { Layout } from "../components/layout/";
import { OurCampaigns } from "../components/organism/OurCampaigns/OurCampaigns";
import pageData from "../websiteData/ourWorkPageData.json";
import { RichEditor } from "../components/atom/RichEditor/RichEditor";

export function OurWork() {
  const heroSectionData = pageData.heroSection;
  const whatWeDoData = pageData.WhatWeDoData;

  return (
    <Layout>
      <HeroBanner heading={heroSectionData.title} description={heroSectionData.desc} backgroundImageUrl={heroSectionData.backgroundImageUrl}  buttonText={heroSectionData.buttonText} buttonURL={heroSectionData.buttonUrl}/>
      <RichEditor contentBlocks={whatWeDoData} className="text-center py-5" />
      <OurCampaigns />
      <OurSuccessStories embedId="4kLviL8XwAI" />
    </Layout>
  );
}
