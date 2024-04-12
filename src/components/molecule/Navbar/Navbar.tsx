import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

import Dropdown from "../DropDown/Dropdown";
import Logo from "../../atom/Logo/Logo";
import Icon from "../../atom/Icons/Icon";

interface NavBarProps {
  userDetails: any;
}

function Navbar1({ userDetails }: NavBarProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const onClose = () => {
    setShowModal(false);
  };
  const options = [
    { value: "changePassword", label: "Reset Password" },
    { value: "signout", label: "Sign Out" },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDropdownChange = (selectedValue: string | null) => {
    if (selectedValue === "signout") {
      localStorage.clear();
      navigate("/login");
    } else {
      navigate("/dashboard/reset-user-password");
    }
  };
  return (
    <Navbar bg="#60b3fd" style={{ background: "#60b3fd", padding: 0 }}>
      <Container fluid className="px-0">
        <Navbar.Brand
          href="#home"
          style={{ textAlign: "center", background: "white" }}
        >
          <Logo
            src="/assets/images/MDTel-logo.png"
            alt="Image Alt Text"
            className="img-fluid h-100"
          />
        </Navbar.Brand>
        <Icon className="fa fa-bars me-2 fs-5" />
        <Navbar.Toggle />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Collapse className="justify-content-end">
          <Dropdown
            options={options}
            onChange={handleDropdownChange}
            title={userDetails.username}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
