import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import { className } from "../utils/className";

interface GroupProps {
  variant?: string;
  children: React.ReactNode;
}

function flattenChildren(children: React.ReactNode): ReactElement[] {
  const result: ReactElement[] = [];
  Children.toArray(children).forEach((child) => {
    if (isValidElement(child) && child.type === React.Fragment) {
      result.push(...flattenChildren(child.props.children));
    } else if (isValidElement(child)) {
      result.push(child);
    }
  });
  return result;
}

function getPlacement(index: number, count: number) {
  if (count === 1) {
    return "";
  }
  if (index === 0) {
    return "start";
  }
  if (index === count - 1) {
    return "end";
  }
  return "middle";
}

export default function Group({ variant, children }: GroupProps) {
  const validChildren = flattenChildren(children);
  const count = validChildren.length;

  return (
    <div className={className("group")} data-variant={variant}>
      {validChildren.map((child, index) =>
        cloneElement(child, {
          placement: getPlacement(index, count),
        }),
      )}
    </div>
  );
}
