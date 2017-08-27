export class TooltipService {
  updateTooltip(wrapperElement: HTMLElement, tooltipElement: HTMLElement, prefer?: string) {
    let rect: ClientRect = wrapperElement.getBoundingClientRect();
    let wrapperWidth: number = wrapperElement.offsetWidth;
    let wrapperHeight: number = wrapperElement.offsetHeight;
    let width: number = tooltipElement.offsetWidth;
    let height: number = tooltipElement.offsetHeight;
    let left: number = 0;
    let top: number = 0;
    let tailSize: number = 8;
    let fitsRight: boolean = rect.left + width + tailSize < window.innerWidth;
    let fitsRightHalf: boolean = rect.left + width / 2 + tailSize < window.innerWidth;
    let fitsBottom: boolean = rect.bottom + height + tailSize < window.innerHeight;
    let fitsLeft: boolean = rect.left - width - tailSize > 0;
    let fitsLeftHalf: boolean = rect.left - width - tailSize / 2 > 0;
    let fitsTop: boolean = rect.top - height - tailSize > 0;
    let position: string;

    let scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollLeft: number = document.documentElement.scrollLeft || document.body.scrollLeft;

    tooltipElement.classList.remove('-tail-top');
    tooltipElement.classList.remove('-tail-right');
    tooltipElement.classList.remove('-tail-bottom');
    tooltipElement.classList.remove('-tail-left');

    if (prefer === 'left' && fitsLeft) {
      position = 'left';
    } else if (prefer === 'right' && fitsRight) {
      position = 'right';
    } else if (prefer === 'top' && fitsRightHalf && fitsLeftHalf && fitsTop) {
      position = 'top';
    } else if (fitsRightHalf && fitsLeftHalf && (fitsTop || fitsBottom)) {
      position = fitsBottom ? 'bottom' : 'top';
    } else {
      position = fitsRight ? 'right' : 'left';
    }

    if (position === 'top' || position === 'bottom') {
      left = rect.left - width / 2 + wrapperWidth / 2;
      if (position === 'top') {
        top = rect.top - height - tailSize;
        tooltipElement.classList.add('-tail-bottom');
      } else {
        top = rect.top + wrapperHeight + tailSize;
        tooltipElement.classList.add('-tail-top');
      }
    } else {
      top = rect.top - height / 2 + wrapperHeight / 2;
      if (position === 'left') {
        left = rect.left - width - tailSize;
        tooltipElement.classList.add('-tail-right');
      } else {
        left = rect.left + wrapperWidth + tailSize;
        tooltipElement.classList.add('-tail-left');
      }
    }

    tooltipElement.style.left = (scrollLeft + left) + 'px';
    tooltipElement.style.top = (scrollTop + top) + 'px';
  }
}

export default new TooltipService();
