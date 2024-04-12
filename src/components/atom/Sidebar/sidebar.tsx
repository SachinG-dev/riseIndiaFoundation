import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "../Buttons/Button";

interface SidebarProps {
  heading: string;
  title: string;
  body: React.ReactNode;
  className: string;
  clearBtn: string;
  saveBtn: string;
}

function Sidebar({
  heading,
  title,
  body,
  className,
  clearBtn,
  saveBtn,
}: SidebarProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClear = () => {
    console.log("handle clear");
  };
  const handleSubmit = () => {
    console.log("handle submit");
  };

  return (
    <>
      <Button
        variant="outlined"
        label=""
        onClick={handleShow}
        className={className}
      >
        <i className="mdi mdi-filter me-2" />
        {heading}
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-title text-primary">
            {title}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body d-flex flex-column justify-content-between">
          {body}
          <div className="row g-3">
            <div className="col-12 d-flex justify-content-end mt-5 align-items-">
              <Button
                label={clearBtn}
                onClick={handleClear}
                className="btn text-danger bg-transparent btn-sm me-2"
              />

              <Button
                label={saveBtn}
                onClick={handleSubmit}
                className="btn btn-primary btn-sm px-4"
              />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
