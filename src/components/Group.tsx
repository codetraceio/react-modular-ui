import React from "react";
import { className } from "../utils/className";

interface GroupProps {
  children: React.ReactNode;
}

export default function Group({ children }: GroupProps) {
  const count = React.Children.count(children);

  return (
    <div className={className("group")}>
      {React.Children.map(children, (child, index) => {
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
