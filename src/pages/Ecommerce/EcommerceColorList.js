import React, { useMemo } from "react";
import TableContainer from "../../components/Common/TableContainer";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Card, CardBody, Container } from "reactstrap";
import { orders } from "../../common/data/ecommerce";
import { Link } from "react-router-dom";

const EcommerceColorList = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Serial No.",
        accessor: "Number",
        disableFilters: true,
        filterable: false,
      },

      {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Action",
        accessor: (cellProps) => {
          return (
            <React.Fragment>
              <Link to="#" className="me-3 text-primary">
                <i className="mdi mdi-pencil font-size-18"></i>
              </Link>
              <Link to="#" className="text-danger">
                <i className="mdi mdi-trash-can font-size-18"></i>
              </Link>
            </React.Fragment>
          );
        },
        disableFilters: true,
        filterable: false,
      },
    ],
    []
  );

  const breadcrumbItems = [
    { title: "Ecommerce", link: "/" },
    { title: "Color list", link: "#" },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Color List" breadcrumbItems={breadcrumbItems} />
          <Card>
            <CardBody>
              <TableContainer
                columns={columns || []}
                data={orders || []}
                isPagination={false}
                // isGlobalFilter={false}
                iscustomPageSize={false}
                isBordered={false}
                customPageSize={10}
                className="custom-header-css table align-middle table-nowrap"
                tableClassName="table-centered align-middle table-nowrap mb-0"
                theadClassName="text-muted table-light"
              />
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceColorList;
