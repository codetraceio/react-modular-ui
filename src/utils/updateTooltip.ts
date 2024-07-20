export function updateTooltip(wrapperElement: HTMLElement, tooltipElement: HTMLElement, prefer?: "left" | "right" | "top" | "bottom"): boolean {
  if (!wrapperElement || !tooltipElement) {
    return false;
  }
  const rect = wrapperElement.getBoundingClientRect();
  const wrapperWidth = wrapperElement.offsetWidth;
  const wrapperHeight = wrapperElement.offsetHeight;
  const width = tooltipElement.offsetWidth;
  const height = tooltipElement.offsetHeight;
  const tailSize = 8;
  const fitsRight = rect.right + width + tailSize <= window.innerWidth;
  const fitsRightHalf = rect.right + width / 2 + tailSize <= window.innerWidth;
  const fitsBottom = rect.bottom + height + tailSize <= window.innerHeight;
  const fitsLeft = rect.left - width - tailSize >= 0;
  const fitsLeftHalf = rect.left - width / 2 - tailSize >= 0;
  const fitsTop = rect.top - height - tailSize >= 0;

  let left = 0;
  let top = 0;
  let position: string;

  if (prefer === "left" && fitsLeft) {
    position = "left";
  } else if (prefer === "right" && fitsRight) {
    position = "right";
  } else if (prefer === "top" && fitsRightHalf && fitsLeftHalf && fitsTop) {
    position = "top";
  } else if (prefer === "bottom" && fitsRightHalf && fitsLeftHalf && fitsBottom) {
    position = "bottom";
  } else if (fitsRightHalf && fitsLeftHalf && (fitsTop || fitsBottom)) {
    position = fitsBottom ? "bottom" : "top";
  } else if (fitsRight || fitsLeft) {
    position = fitsRight ? "right" : "left";
  } else {
    // Fallback: center the tooltip over the wrapper
    position = "center";
  }

  switch (position) {
    case "top":
      left = rect.left + wrapperWidth / 2 - width / 2;
      top = rect.top - height - tailSize;
      tooltipElement.setAttribute("data-tail", "bottom");
      break;
    case "bottom":
      left = rect.left + wrapperWidth / 2 - width / 2;
      top = rect.bottom + tailSize;
      tooltipElement.setAttribute("data-tail", "top");
      break;
    case "left":
      left = rect.left - width - tailSize;
      top = rect.top + wrapperHeight / 2 - height / 2;
      tooltipElement.setAttribute("data-tail", "right");
      break;
    case "right":
      left = rect.right + tailSize;
      top = rect.top + wrapperHeight / 2 - height / 2;
      tooltipElement.setAttribute("data-tail", "left");
      break;
    case "center":
      left = rect.left + wrapperWidth / 2 - width / 2;
      top = rect.top + wrapperHeight / 2 - height / 2;
      tooltipElement.removeAttribute("data-tail");
      break;
  }

  // Ensure the tooltip stays within the viewport
  left = Math.max(0, Math.min(left, window.innerWidth - width));
  top = Math.max(0, Math.min(top, window.innerHeight - height));

  tooltipElement.style.left = `${left}px`;
  tooltipElement.style.top = `${top}px`;

  return true;
}
