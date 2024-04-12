import Banner from "../components/organism/Banner/Banner";
import { HeaderNavbar } from "../components/molecule/Navbar/Navbar";
import { AboutRiseIndiaFoundation } from "../components/organism/AboutRiseIndiaFoundation/AboutRiseIndiaFoundation";
import { ImpactSection } from "../components/organism/ImpactSection/ImpactSection";

export function Home() {
  return (
    <div>
      <HeaderNavbar />
      <Banner />
      <AboutRiseIndiaFoundation />
      <ImpactSection />
    </div>
  );
}
