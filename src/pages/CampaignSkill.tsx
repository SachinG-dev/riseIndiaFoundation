import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";
import { Layout } from "../components/layout/";
import { GallerySection } from "../components/molecule/GallerySection/GallerySection";

export const CampaignSkill = () => {
  const heroBannerHeading = (
    <h1 className="font-color-orange">Skill Development</h1>
  );

  const description =
    "Unleashing Potential, Transforming Futures! We are dedicated to skill development, empowering individuals to unlock their full potential and create transformative futures.";
  const url = "/assets/images/campaigns-banner.png";
  const campaignHeading = (
    <h2 className="font-color-orange">Skill Development</h2>
  );
  const campaignDescription = (
    <>
      <p>
        Rise India Foundation is committed to fostering skill development and
        empowering individuals to reach their fullest potential. With a focus on
        equipping marginalized communities with essential skills, our
        transformative campaigns aim to bridge the gap between education and
        employment, opening doors to brighter futures.
      </p>
      <p>
        Through innovative training programs, mentorship initiatives, and
        vocational workshops, SkillServe empowers individuals with practical
        skills that enhance their employability and enable sustainable
        livelihoods. By partnering with local communities, businesses, and
        educational institutions, we create comprehensive solutions that address
        the specific needs and aspirations of those we serve.
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
            src: "/assets/images/kaabil.png",
            alt: "Kaabil",
            style: { width: "550px", height: "420px" },
          },
        ]}
      />
    </Layout>
  );
};
