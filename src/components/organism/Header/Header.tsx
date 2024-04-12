import Logo from "../../atom/Logo/Logo";

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
