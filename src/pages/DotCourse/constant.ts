import type { DataNode } from "antd/es/tree";

export type MyTreeNode = DataNode & {
  classes?: string[];
  children?: MyTreeNode[];
};

export const treeData: MyTreeNode[] = [
  {
    title: "A-Dot",
    key: "lesson",
    children: [
      {
        title: "Dot",
        key: "dot",
        children: [
          {
            title: "default",
            key: "dot_default",
            classes: ["default"],
          },
          {
            title: "size",
            key: "dot_size",
            classes: ["default", "size"],
          },
          {
            title: "color",
            key: "dot_color",
            classes: ["default", "size", "color"],
          },
          {
            title: "border",
            key: "dot-border",
            classes: ["default", "size", "color", "border"],
          },
          {
            title: "shadow",
            key: "dot-shadow",
            classes: ["default", "size", "color", "border", "box-shadow"],
          },
        ],
      },
      {
        title: "Box",
        key: "box",
        children: [
          {
            title: "box",
            key: "default",
            classes: ["box", "default"],
          },
          {
            title: "background-color",
            key: "background-color",
            classes: ["box", "default", "pink"],
          },
          {
            title: "color-gradient",
            key: "color-gradient",
            classes: ["box", "default", "color-gradient"],
          },
          {
            title: "background-image",
            key: "background-image",
            classes: ["box", "default", "background-image"],
          },
          {
            title: "border-radius",
            key: "border-radius",
            classes: ["box", "default", "background-image", "border-radius"],
          },
        ],
      },
      {
        title: "Animation",
        key: "animation",
        children: [
          {
            title: "default",
            key: "animation-default",
            classes: ["animation", "default", "rotate"],
          },
          {
            title: "bounce",
            key: "animation-bounce",
            classes: ["animation", "default", "bounce"],
          },
          {
            title: "scroll",
            key: "animation-scroll",
            classes: ["animation", "default", "scroll"],
          },
        ],
      },
    ],
  },
  {
    title: "More-Dot",
    key: "layout",
    children: [
      {
        title: "layer",
        key: "layout-layer",
        children: [
          {
            title: "layer-default",
            key: "layout-layer-default",
            classes: ["layout", "layer", "default"],
          },
        ],
      },
      {
        title: "flex",
        key: "layout-flex",
        children: [
          {
            title: "flex-default",
            key: "layout-flex-default",
            classes: ["layout", "flex", "default"],
          },
          {
            title: "flex-item",
            key: "layout-flex-item",
            classes: ["layout", "flex", "item"],
          },
          {
            title: "flex-center",
            key: "layout-flex-center",
            classes: ["layout", "flex", "center"],
          },
        ],
      },
    ],
  },
];
