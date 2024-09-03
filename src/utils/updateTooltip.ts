import { className } from "./className";

export function updateTooltip(
  wrapperElement: HTMLElement,
  tooltipElement: HTMLElement,
  prefer?: "left" | "right" | "top" | "bottom",
): boolean {
  if (!wrapperElement || !tooltipElement) {
    return false;
  }

  const tailElement = tooltipElement.querySelector(
    `.${className("tooltip", "tail")}`,
  ) as HTMLElement;

  const rect = wrapperElement.getBoundingClientRect();
  const wrapperWidth = wrapperElement.offsetWidth;
  const wrapperHeight = wrapperElement.offsetHeight;
  const width = tooltipElement.offsetWidth;
  const height = tooltipElement.offsetHeight;
  const tailSize = 8;

  const fitsRight = rect.right + width + tailSize <= window.innerWidth;
  const fitsBottom = rect.bottom + height + tailSize <= window.innerHeight;
  const fitsLeft = rect.left - width - tailSize >= 0;
  const fitsTop = rect.top - height - tailSize >= 0;

  let left = 0;
  let top = 0;
  let tailLeft;
  let tailTop;

  const positionMap = {
    left: () => fitsLeft && "left",
    right: () => fitsRight && "right",
    top: () => fitsTop && "top",
    bottom: () => fitsBottom && "bottom",
  };

  const position =
    (prefer && positionMap[prefer]()) ||
    (fitsBottom && "bottom") ||
    (fitsTop && "top") ||
    (fitsRight && "right") ||
    (fitsLeft && "left") ||
    "bottom"; // fallback

  switch (position) {
    case "top":
      left = rect.left + wrapperWidth / 2 - width / 2;
      top = rect.top - height - tailSize;
      tailLeft = width / 2;
      tailElement.setAttribute("data-position", "bottom");
      break;
    case "bottom":
      left = rect.left + wrapperWidth / 2 - width / 2;
      top = rect.bottom + tailSize;
      tailLeft = width / 2;
      tailElement.setAttribute("data-position", "top");
      break;
    case "left":
      left = rect.left - width - tailSize;
      top = rect.top + wrapperHeight / 2 - height / 2;
      tailTop = height / 2;
      tailElement.setAttribute("data-position", "right");
      break;
    case "right":
      left = rect.right + tailSize;
      top = rect.top + wrapperHeight / 2 - height / 2;
      tailTop = height / 2;
      tailElement.setAttribute("data-position", "left");
      break;
  }

  // Ensure the tooltip stays within the viewport
  const originalLeft = left;
  const originalTop = top;
  left = Math.max(0, Math.min(left, window.innerWidth - width));
  top = Math.max(0, Math.min(top, window.innerHeight - height));

  // Adjust tail position if tooltip position was changed
  if (position === "top" || position === "bottom") {
    tailLeft -= left - originalLeft;
  } else {
    tailTop -= top - originalTop;
  }

  tooltipElement.style.left = `${left}px`;
  tooltipElement.style.top = `${top}px`;
  tailElement.style.left = typeof tailLeft === "number" && `${tailLeft}px`;
  tailElement.style.top = typeof tailTop === "number" && `${tailTop}px`;

  return true;
}
