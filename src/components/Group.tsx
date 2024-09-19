import React from "react";
import { className } from "../utils/className";

interface GroupProps {
  children: React.ReactNode;
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
          placement:
            index === 0 ? "start" : index === count - 1 ? "end" : "middle",
        });
      })}
    </div>
  );
}
