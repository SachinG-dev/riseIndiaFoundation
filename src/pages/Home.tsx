import Banner from "../components/organism/Banner/Banner";
import { HeaderNavbar } from "../components/molecule/Navbar/Navbar";
import { AboutRiseIndiaFoundation } from "../components/organism/AboutRiseIndiaFoundation/AboutRiseIndiaFoundation";
import { ImpactSection } from "../components/organism/ImpactSection/ImpactSection";
import { Testimonials } from "../components/organism/Testimonials/Testimonials";
import InspiringSuccessStories from "../components/organism/InspiringSuccessStories/InspiringSuccessStories";

export function Home() {
  return (
    <div>
      <HeaderNavbar />
      <Banner />
      <AboutRiseIndiaFoundation />
      <ImpactSection />
      <Testimonials />
      <InspiringSuccessStories />
    </div>
  );
}
