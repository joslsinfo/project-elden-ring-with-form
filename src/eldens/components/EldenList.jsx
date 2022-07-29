import React from "react";
import EldenCard from "./EldenCard";
import Row from "react-bootstrap/Row";

const EldenList = ({ eldens }) => {
  return (
    <Row>
      {eldens.map((elden) => (
        <EldenCard key={elden.id} elden={elden} />
      ))}
    </Row>
  );
};

export default EldenList;
