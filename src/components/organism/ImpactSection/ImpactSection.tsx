import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomCard from "../../atom/CustomCard/CustomCard";
import "./ImpactSection.css";

export function ImpactSection() {
  const onClickFunction = () => {
    const onclickUrl = "/our-work";
    window.location.href = onclickUrl;
  };
  return (
    <>
      <section className="impactSection mb-5">
        <Container className="my-5">
          <Row>
            <Col md={12}>
              <Row>
                <Col md={8}>
                  <h2 className="text-light fw-bold font-size-title">
                    <span className="font-color-orange">Impact we made </span>{" "}
                    through your contributions
                  </h2>
                </Col>
                <Col md={4}>
                  <p className="text-light impactSectionDescription">
                    Discover the tangible impact we've made and the lives we've
                    transformed through our unwavering commitment at Rise India
                    Foundation. With the collective efforts of our dedicated
                    team, generous supporters, and resilient communities, we
                    have achieved remarkable milestones.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={12} className="mt-5">
              <Row>
                <Col>
                  <CustomCard
                    imageSrc="/assets/images/biharRelief.png"
                    title="Bihar Relief Project"
                    description="250 families including widows were provided with dry ration, medicine and financial assistance. DHL BlueDart provided free logistic support to deliver relief material from Maharashtra to Bihar."
                    link="/our-work"
                  />
                </Col>
                <Col>
                  <CustomCard
                    imageSrc="/assets/images/keralaRehabilitation.png"
                    title="Kerala Rehabilitation Project"
                    description="In 2018, Rise India Foundation team reached Chengannur, the flood affected area in Kerala. Under this, water purifiers and solar lamps were provided to schools, anganwadi and rickshaw stands."
                    link="/our-work"
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <CustomCard
                    imageSrc="/assets/images/covid.png"
                    title="Covid -19 Relief Project"
                    description=" In 2020, the Rise India FOundation distributed 1000 cooked nourished food packets, on a daily basis for migrant workers and underprivileged people  in Mumbai Suburbs."
                    link="/our-work"
                  />
                </Col>
                <Col>
                  <CustomCard
                    imageSrc="/assets/images/ankur.png"
                    title="Ankur"
                    description="Under this project in 2019, drinking water was supplied to drought affected areas of Jamkhed (AhmedNagar) and Shahpur (Thane Rural). 7 Villages were adopted and 2291 individuals were beneficiaries."
                    link="/our-work"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="text-center mt-5">
            <Col>
              <Button variant="success py-2 px-5" onClick={onClickFunction}>
                View All
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="py-5"></div>
    </>
  );
}
