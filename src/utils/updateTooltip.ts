export function updateTooltip(wrapperElement: HTMLElement, tooltipElement: HTMLElement, prefer?: string) {
  if (!wrapperElement || !tooltipElement) {
    return;
  }
  const rect = wrapperElement.getBoundingClientRect();
  const wrapperWidth: number = wrapperElement.offsetWidth;
  const wrapperHeight: number = wrapperElement.offsetHeight;
  const width: number = tooltipElement.offsetWidth;
  const height: number = tooltipElement.offsetHeight;
  const tailSize: number = 8;
  const fitsRight: boolean = rect.left + width + tailSize < window.innerWidth;
  const fitsRightHalf: boolean = rect.left + width / 2 + tailSize < window.innerWidth;
  const fitsBottom: boolean = rect.bottom + height + tailSize < window.innerHeight;
  const fitsLeft: boolean = rect.left - width - tailSize > 0;
  const fitsLeftHalf: boolean = rect.left - width - tailSize / 2 > 0;
  const fitsTop: boolean = rect.top - height - tailSize > 0;
  const scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollLeft: number = document.documentElement.scrollLeft || document.body.scrollLeft;

  let left: number = 0;
  let top: number = 0;
  let position: string;


  if (prefer === "left" && fitsLeft) {
    position = "left";
  } else if (prefer === "right" && fitsRight) {
    position = "right";
  } else if (prefer === "top" && fitsRightHalf && fitsLeftHalf && fitsTop) {
    position = "top";
  } else if (fitsRightHalf && fitsLeftHalf && (fitsTop || fitsBottom)) {
    position = fitsBottom ? "bottom" : "top";
  } else {
    position = fitsRight ? "right" : "left";
  }

  if (position === "top" || position === "bottom") {
    left = rect.left - width / 2 + wrapperWidth / 2;
    if (position === "top") {
      top = rect.top - height - tailSize;
      tooltipElement.setAttribute("data-tail", "bottom");
    } else {
      top = rect.top + wrapperHeight + tailSize;
      tooltipElement.setAttribute("data-tail", "top");
    }
  } else {
    top = rect.top - height / 2 + wrapperHeight / 2;
    if (position === "left") {
      left = rect.left - width - tailSize;
      tooltipElement.setAttribute("data-tail", "right");
    } else {
      left = rect.left + wrapperWidth + tailSize;
      tooltipElement.setAttribute("data-tail", "left");
    }
  }

  tooltipElement.style.left = (scrollLeft + left) + "px";
  tooltipElement.style.top = (scrollTop + top) + "px";
}
