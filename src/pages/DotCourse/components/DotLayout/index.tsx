// @flow
import cx from "classnames";
import { CSSProperties } from "react";
import "./index.less";

type Props = {
  style?: CSSProperties;
  className?: string;
};
export const DotLayout = (props: Props) => {
  return (
    <div className={cx("my-dot-layout", props.className)} style={props.style}>
      <div id="child-1" className={"dot-layout-child"}></div>
      <div id="child-2" className={"dot-layout-child"}></div>
      <div id="child-3" className={"dot-layout-child"}></div>
    </div>
  );
};
