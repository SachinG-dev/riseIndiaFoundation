import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomCard from "../../atom/CustomCard/CustomCard";
import "./OurCampaigns.css";

export function OurCampaigns() {
  return (
    <div className="OurCampaignsSection">
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <Row>
              <Col md={12} className="text-center">
                <h2 className="text-light fw-bold font-size-title">
                  <span className="font-color-orange">Our Campaigns </span>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col md={12} className="mt-5">
            <Row>
              <Col>
                <CustomCard
                  imageSrc="/assets/images/biharRelief.png"
                  title="Bihar Relief Project"
                  description="250 families including widows were provided with dry ration, medicine and financial assistance. DHL BlueDart provided free logistic support to deliver relief material from Maharashtra to Bihar.
                            "
                  link="#"
                />
              </Col>
              <Col>
                <CustomCard
                  imageSrc="/assets/images/keralaRehabilitation.png"
                  title="Kerala Rehabilitation Project"
                  description="In 2018, Rise India Foundation team reached Chengannur, the flood affected area in Kerala. Under this, water purifiers and solar lamps were provided to schools, anganwadi and rickshaw stands.
                "
                  link="#"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
