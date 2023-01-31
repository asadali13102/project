import React from "react";
import Col from "antd/es/grid/col";
import { Row } from "antd";

const ReviewWrapper = ({ children }) => {
  return (
    <div className="mt-15">
      <Row>
        <Col span={6}>
            {children[0]}
            </Col>
        <Col span={18}>
            {children[1]}
            </Col>
      </Row>
    </div>
  );
};

export default ReviewWrapper;
