import Logo from "../../atom/Logo/Logo";
// import Navbar from '@/components/molecule/navbar/Navbar';
// import Navbar from '@/components/molecule/navbar1/Navbar';
import Navbar from "../../molecule/Navbar/Navbar";

interface HeaderProps {
  // Add any additional props as needed
}

function Header({}: HeaderProps) {
  return (
    <header>
      {/* Your header content, such as navigation, logo, etc. */}
      <Logo src="path-to-your-logo.png" alt="My Logo" className="header-logo" />
      {/* Add other header elements as needed */}
    </header>
  );
}

export default Header;
