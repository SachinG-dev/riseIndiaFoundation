import { HeroBanner } from '../components/organism/HeroBanner/HeroBanner';
import { AboutUsDetailsSection } from '../components/organism/AboutUsDetailsSection/AboutUsDetailsSection';
import { ImpactSection } from '../components/organism/ImpactSection/ImpactSection';
import { Layout } from '../components/layout';

export function AboutUs() {
  const heroBannerHeading = <h1 className='font-color-orange'>About Us</h1>;
  const description =
    'At Rise India Foundation, we are committed to creating positive change and uplifting communities across the nation. Our relentless dedication drives us to provide vital support and opportunities to those in need, empowering them to realize their full potential.';

  return (
    <Layout>
      <HeroBanner heading={heroBannerHeading} description={description} />
      <AboutUsDetailsSection />
      <ImpactSection />
    </Layout>
  );
}
