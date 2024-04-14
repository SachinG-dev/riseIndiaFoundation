import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./InspiringSuccessStories.css"; // Import CSS file for custom styling
import InspiringCard from "../../molecule/InspiringCard/InspiringCard"; // Assuming you have a component for the individual cards

const InspiringSuccessStories = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h2 className="text-center fw-bold">
            <span className="font-color-orange">Inspiring</span> Success Stories
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={8}>
          <InspiringCard
            imageSrc="/assets/images/shaikhGulamMoin.png"
            title="Shaikh Gulam Moin"
            description="Shaikh Gulam Moin's journey showcases unwavering determination, scoring 91% in the SSC Exam despite financial hurdles. Rise India Foundation emerged as his guiding light, revealing a transformative government scholarship. With their adept assistance, the scholarship's arrival became a testament to patience and faith. Today, Shaikh Gulam Moin stands as a master of Pharmacy and MBA, a living testament to the adage: where there's a will, there's a way."
            imageAlignment="right"
          />
        </Col>
      </Row>
      <Row className="zigzag-row">
        <Col md={8}>
          <InspiringCard
            imageSrc="/assets/images/shantiMahtu.png"
            title="Shanti Mahtu"
            description="Thanks to the financial support and training provided by Rise India Foundation, Shanti Mahtu was able to access government benefits that were instrumental in her family's well-being. Furthermore, she utilized her newly acquired skills to embark on a venture selling bamboo products in local markets."
          />
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={8}>
          <InspiringCard
            imageSrc="/assets/images/neenaDottami.png"
            title="Neena Dottami"
            description="I am immensely grateful to Rise India Foundation for their unwavering support during the Bihar Flood crisis. Their monthly provisions of groceries, essential medication, and sanitation kits not only provided much-needed relief but also restored a sense of security and normalcy in my life. Their invaluable assistance has been instrumental in helping me rebuild and move forward with hope and determination."
            imageAlignment="right"
          />
        </Col>
      </Row>
      {/* Add more rows as needed */}
    </Container>
  );
};

export default InspiringSuccessStories;
