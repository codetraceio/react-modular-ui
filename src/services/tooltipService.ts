export function updateTooltip(wrapperElement: HTMLElement, tooltipElement: HTMLElement, prefer?: string) {
  const rect: ClientRect = wrapperElement.getBoundingClientRect();
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

  tooltipElement.classList.remove("-tail-top");
  tooltipElement.classList.remove("-tail-right");
  tooltipElement.classList.remove("-tail-bottom");
  tooltipElement.classList.remove("-tail-left");

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
      tooltipElement.classList.add("-tail-bottom");
    } else {
      top = rect.top + wrapperHeight + tailSize;
      tooltipElement.classList.add("-tail-top");
    }
  } else {
    top = rect.top - height / 2 + wrapperHeight / 2;
    if (position === "left") {
      left = rect.left - width - tailSize;
      tooltipElement.classList.add("-tail-right");
    } else {
      left = rect.left + wrapperWidth + tailSize;
      tooltipElement.classList.add("-tail-left");
    }
  }

  tooltipElement.style.left = (scrollLeft + left) + "px";
  tooltipElement.style.top = (scrollTop + top) + "px";
}
