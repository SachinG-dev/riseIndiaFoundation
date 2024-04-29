import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";

import { Layout } from "../components/layout";
import { VolunteerInfoSection } from "../components/molecule/VolunteerInfoSection/VolunteerInfoSection";
import { JoinUsForm } from "../components/molecule/JoinUsForm/JoinUsForm";
import { JoinUsCarousels } from "../components/organism/JoinUsCarousels/JoinUsCarousels";

export function Internship() {
  return (
    <Layout>
      <HeroBanner />
      <VolunteerInfoSection />
      <JoinUsCarousels />
      <JoinUsForm title="Internship" sheetName="Internship" />
    </Layout>
  );
}
