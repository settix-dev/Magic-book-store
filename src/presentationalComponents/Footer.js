import Card from "react-bootstrap/Card";
import React from "react";

const Footer = () => {
  // return (
  //     <div className="footer">
  //         <p>Project by Lamech</p>
  //     </div>
  // )

  return (
    <Card className="footer">
      <Card.Footer as="h5">Project By Lamech</Card.Footer>
    </Card>
  );
};

export default Footer;
