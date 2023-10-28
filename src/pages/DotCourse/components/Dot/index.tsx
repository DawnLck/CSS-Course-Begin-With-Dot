// @flow
import cx from "classnames";
import { CSSProperties } from "react";
import "./index.less";

type Props = {
  style?: CSSProperties;
  className?: string;
};
export const Dot = (props: Props) => {
  return (
    <div className={cx("my-dot", props.className)} style={props.style}></div>
  );
};
