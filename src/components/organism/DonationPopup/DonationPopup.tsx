import { Button, Modal, Container, Row, Col } from "react-bootstrap";
interface DonationPopupProps {
  show: boolean;
  handleClose: () => void;
}
export function DonationPopup({ show, handleClose }: DonationPopupProps) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="">
        <Modal.Title className="w-100">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex justify-content-center w-100">
              Please select donation method
            </div>

            <Button variant="" onClick={handleClose}>
              X
            </Button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <Container>
          <Row className="mb-3">
            <Col className="d-flex justify-content-around">
              <Button variant="success">UPI/QR</Button>
              <Button
                variant="outline-success"
                onClick={() =>
                  window.open("https://easebuzz.in/pay/RiseIndia", "_blank")
                }
              >
                Donation Link
              </Button>
            </Col>
          </Row>
          <Row className="text-center my-3">
            <Col className="d-flex donation-popup-qr-code-section">
              <div className="bg-light rounded p-2">
                <img
                  src="/assets/images/qr-code.jpeg"
                  alt="QR Code"
                  className="img-fluid"
                />
              </div>

              <div className="m-2">
                <p>Scan or screenshot QR code to payment app</p>
                <img src="/assets/images/paymentApps.png" alt="payment apps" />
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
