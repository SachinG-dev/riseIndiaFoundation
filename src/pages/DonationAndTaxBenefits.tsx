import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout";
import { DonationForm } from "../components/molecule/DonationForm/DonationForm";
import pageData from "../websiteData/taxBenefitsPageData.json";
import { RichEditor } from "../components/atom/RichEditor/RichEditor";

export function DonationAndTaxBenefits() {
  const heroSectionData = pageData.heroSection;
  const taxBenefitsData = pageData.TaxBenefitsData;
  return (
    <Layout>
      <HeroBanner heading={heroSectionData.title} description={heroSectionData.desc} backgroundImageUrl={heroSectionData.backgroundImageUrl}  />
      <RichEditor contentBlocks={taxBenefitsData} className="text-center py-5"/>
      <DonationForm />
    </Layout>
  );
}
