import { DownOutlined } from "@ant-design/icons";
import { useMount } from "ahooks";
import { Col, ConfigProvider, Row, Tree, theme as antdTheme } from "antd";
import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import { Toolbar } from "./Toolbar";
import { Dot } from "./components/Dot";
import { DotLayout } from "./components/DotLayout";
import { treeData } from "./constant";
import "./index.less";
import { findNodeByKey, flattenArray } from "./utils";

const flattenedTreeData = flattenArray(treeData);
const lessonSteps = flattenedTreeData.map((item) => item.key) as string[];

const DotCourse: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [dotClasses, setDotClasses] = useState("");
  const [currentStep, setCurrentStep] = useState<string[]>(["dot_default"]);

  useMount(() => {
    const isPreferDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Init theme
    if (isPreferDark.matches) {
      setTheme("dark");
    }

    // Watch
    isPreferDark.addListener((e) => {
      setTheme(e.matches ? "dark" : "light");
    });
  });

  const handleStepChange = (diff: number) => {
    const _index = lessonSteps.findIndex((item) => item === currentStep[0]);
    const _next = Math.min(Math.max(0, _index + diff), lessonSteps.length - 1);
    setCurrentStep([lessonSteps[_next]]);
  };

  window.onkeydown = function (event) {
    event.preventDefault();

    switch (event.key ?? event.keyCode) {
      case "ArrowLeft":
        handleStepChange(-1);
        return;
      case "ArrowRight":
        handleStepChange(1);
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    const node = findNodeByKey(treeData, currentStep[0]);
    setDotClasses(classNames(node?.classes ?? []));
  }, [currentStep]);

  const coreModule = useMemo(() => {
    const lessonStepKey = currentStep[0];
    if (lessonStepKey.startsWith("layout")) {
      return <DotLayout className={dotClasses}></DotLayout>;
    }
    return <Dot className={dotClasses}></Dot>;
  }, [currentStep, dotClasses]);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "light"
            ? antdTheme.defaultAlgorithm
            : antdTheme.darkAlgorithm,
      }}
    >
      <div className="content-container">
        <Row gutter={16}>
          <Col span="6">
            <div className="card-wrapper course-tree-container">
              <Tree
                selectedKeys={currentStep}
                defaultExpandAll
                showLine
                switcherIcon={<DownOutlined />}
                defaultExpandedKeys={["0-0-0"]}
                onSelect={(keys) => {
                  setCurrentStep(keys as string[]);
                }}
                treeData={treeData}
              />
            </div>
          </Col>
          <Col span="18">
            <div className="card-wrapper" style={{ marginBottom: 10 }}>
              <Toolbar
                currentStep={currentStep[0]}
                onPrev={() => {
                  handleStepChange(-1);
                }}
                onNext={() => {
                  handleStepChange(1);
                }}
              ></Toolbar>
            </div>
            <div className="card-wrapper canvas-container">{coreModule}</div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default DotCourse;
