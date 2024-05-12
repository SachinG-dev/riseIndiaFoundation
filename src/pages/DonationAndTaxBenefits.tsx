import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout";
import { DonationAndTaxBenefitsInfoSection } from "../components/molecule/DonationAndTaxBenefitsInfoSection/DonationAndTaxBenefitsInfoSection";
import { DonationForm } from "../components/molecule/DonationForm/DonationForm";
import pageData from "../websiteData/taxBenefitsPageData.json";

export function DonationAndTaxBenefits() {
  const heroSectionData = pageData.heroSection;
  return (
    <Layout footerCta={true}>
      <HeroBanner
        heading={heroSectionData.title}
        description={heroSectionData.desc}
        backgroundImageUrl={heroSectionData.backgroundImageUrl}
        buttonText={heroSectionData.buttonText}
        buttonURL={heroSectionData.buttonUrl}
      />
      <DonationAndTaxBenefitsInfoSection />
      <DonationForm />
    </Layout>
  );
}
