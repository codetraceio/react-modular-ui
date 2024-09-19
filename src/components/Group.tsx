import React from "react";
import { className } from "../utils/className";

interface GroupProps {
  children: React.ReactNode;
}

function getPlacement(index: number, count: number) {
  if (count === 0) {
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
  const validChildren = React.Children.map(children, (child) => child).filter(
    Boolean,
  );
  const count = validChildren.length;

  return (
    <div className={className("group")}>
      {validChildren.map((child, index) => {
        if (!child) {
          return null;
        }
        return React.cloneElement(child as React.ReactElement, {
          placement: getPlacement(index, count),
        });
      })}
    </div>
  );
}
