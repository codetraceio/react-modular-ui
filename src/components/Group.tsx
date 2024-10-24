import React, { Children, cloneElement, ReactElement } from "react";
import { className } from "../utils/className";

interface GroupProps {
  children: React.ReactNode;
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

export default function Group({ children }: GroupProps) {
  const validChildren = Children.map(children, (child) => child).filter(
    Boolean,
  );
  const count = validChildren.length;

  return (
    <div className={className("group")}>
      {validChildren.map((child, index) => {
        if (!child) {
          return null;
        }
        return cloneElement(child as ReactElement, {
          placement: getPlacement(index, count),
        });
      })}
    </div>
  );
}
