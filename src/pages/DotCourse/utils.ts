import { DataNode } from "antd/es/tree";
import { MyTreeNode } from "./constant";

export function flattenArray(arr: Array<DataNode>): DataNode[] {
  let result: any = [];
  for (let item of arr) {
    if (item.children?.length) {
      result = result.concat(flattenArray(item.children));
    } else {
      result.push(item);
    }
  }
  return result;
}

export function findNodeByKey(
  tree: MyTreeNode[],
  key: string
): MyTreeNode | null {
  for (let item of tree) {
    if (item.key === key) {
      return item;
    }
    if (item.children?.length) {
      const result = findNodeByKey(item.children, key);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
