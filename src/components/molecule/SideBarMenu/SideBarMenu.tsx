import { Link } from "react-router-dom";

interface SideMenuProps {
  userDetails: any;
}

function SideMenu({ userDetails }: SideMenuProps) {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="mdi mdi-office-building menu-icon" />
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;
