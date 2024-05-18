import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Testimonials } from "../components/organism/Testimonials/Testimonials";
import { ProgramInitiatives } from "../components/organism/programInitiatives/ProgramInitiatives";
import { Layout } from "../components/layout/";
import { OurPartner } from "../components/organism/OurPartners/OurPartners";
import { OurReachSection } from "../components/organism/OurReachSection/OurReachSection";
import pageData from "../websiteData/homePageData.json";
import { RichEditor } from "../components/atom/RichEditor/RichEditor";
import { Contributions } from "../components/atom/ContributionsSection/ContributionsSection";
import { InspiringSuccess } from "../components/atom/InspiringSuccess/InspiringSuccess";

export function Home() {
  const heroSectionData = pageData.heroSection;
  const riseIndiaFoundationData = pageData.RiseIndiaSection;
  const contributionsData = pageData.ContributionsSection;
  const inspiringSuccessData = pageData.InspiringSuccess;
  const initiativeProgram = pageData.InitiativesProgram;
  const testimonialsSection = pageData.TestimonialsSection;

  return (
    <Layout>
      <HeroBanner heading={heroSectionData.title} description={heroSectionData.desc} buttonText={heroSectionData.buttonText} backgroundImageUrl={heroSectionData.backgroundImageUrl}  />
      <RichEditor contentBlocks={riseIndiaFoundationData} className="py-5 text-center"/>
      <Contributions 
        title={contributionsData.title} 
        desc={contributionsData.desc} 
        cardData={contributionsData.contributionsCardData} 
        sectionClass={contributionsData.sectionClass} 
        sectionButtonText={contributionsData?.sectionButtonText}
        sectionButtonURL={contributionsData?.sectionButtonURL}
        />
      <InspiringSuccess title={inspiringSuccessData.title} sectionClasses={inspiringSuccessData.sectionClass} inspiringSuccessCardData={inspiringSuccessData.InspiringSuccessCardData}/>
      <ProgramInitiatives title={initiativeProgram.sectionTitle} overAllClasses={initiativeProgram.classes} cardData={initiativeProgram.cardsData} cardButtonText={initiativeProgram.cardButtonText} />
      <OurReachSection  />
      <Testimonials title={testimonialsSection.sectionTitle} testimonialData={testimonialsSection.TestimonialData} overAllClasses={testimonialsSection.overAllClasses}/>
      <OurPartner />
    </Layout>
  );
}
