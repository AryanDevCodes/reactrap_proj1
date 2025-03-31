import React from "react";
import { Card, CardBody } from "reactstrap";

const Header = () => {
  return (
    <>
      <Card
        className="my-0.5"
        style={{ backgroundColor: "aqua", textAlign: "center" }}
      >
        <CardBody>
          <h1>This Is My Course Application</h1>
        </CardBody>
      </Card>
    </>
  );
};
export default Header;
