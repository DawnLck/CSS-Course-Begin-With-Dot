import React from "react";
import { Row, Col, Tree, TreeProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { treeData } from "./constant";

const DotCourse: React.FC = () => {
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <div style={{ width: "100vh" }}>
      <Row>
        <Col span="6">
          <Tree
            showLine
            switcherIcon={<DownOutlined />}
            defaultExpandedKeys={["0-0-0"]}
            onSelect={onSelect}
            treeData={treeData}
          />
        </Col>
        <Col span="18">Hello World</Col>
      </Row>
    </div>
  );
};

export default DotCourse;
