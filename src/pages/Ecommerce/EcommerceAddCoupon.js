import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Input,
  Label,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
} from "reactstrap";

import Dropzone from "react-dropzone";
import classnames from "classnames";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const EcommerceAddCoupon = () => {
  const breadcrumbItems = [
    { title: "Ecommerce", link: "#" },
    { title: "Add Coupon", link: "#" },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Add Coupon" breadcrumbItems={breadcrumbItems} />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div
                    id="addproduct-nav-pills-wizard"
                    className="twitter-bs-wizard"
                  >
                    <TabContent className="twitter-bs-wizard-tab-content">
                      <TabPane>
                        <CardTitle className="h5">Basic Information</CardTitle>
                        <p className="card-title-desc">
                          Fill all information below
                        </p>
                        <form>
                          <div className="mb-3">
                            <Label className="form-label" htmlFor="productname">
                              Brand Name
                            </Label>
                            <Input
                              id="productname"
                              name="productname"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label" htmlFor="productname">
                              Enter Expiry Date
                            </Label>
                            <Input
                              id="productname"
                              name="productname"
                              type="date"
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <Label className="form-label" htmlFor="productname">
                              Enter Discount
                            </Label>
                            <Input
                              id="productname"
                              name="productname"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </form>
                      </TabPane>
                    </TabContent>
                    <ul className="pager wizard twitter-bs-wizard-pager-link">
                      <li>
                        <Link to="#">Add</Link>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceAddCoupon;
