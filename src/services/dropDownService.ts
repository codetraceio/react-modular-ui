import settingService from '../services/settingService'

export const DROP_DOWN_ORIENTATION_TOP = 'top';
export const DROP_DOWN_ORIENTATION_BOTTOM = 'bottom';

export class DropDownService {
  updateDropDown(dropDownElement: HTMLElement, selectElement: HTMLElement, scroll: boolean, fixed: boolean) {
    const selectRect: ClientRect = selectElement.getBoundingClientRect();

    let scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollLeft: number = document.documentElement.scrollLeft || document.body.scrollLeft;
    let orientation: string = DROP_DOWN_ORIENTATION_BOTTOM;

    if (fixed) {
      dropDownElement.style.position = 'fixed';
      scrollLeft = scrollTop = 0;
    }

    const maxHeight: number = Math.min(Math.max(window.innerHeight - selectRect.bottom - 32, 256), 512);

    dropDownElement.style.minWidth = `${selectRect.width}px`;
    dropDownElement.style.maxWidth = `${window.innerWidth - 64}px`;
    dropDownElement.style.maxHeight = `${maxHeight}px`;

    let top: number = selectRect.bottom + scrollTop;
    if (selectRect.bottom + dropDownElement.offsetHeight > window.innerHeight) {
      orientation = DROP_DOWN_ORIENTATION_TOP;
      dropDownElement.style.maxHeight = `${Math.min(selectRect.top - 32, 512)}px`;
      top = selectRect.top - dropDownElement.offsetHeight + scrollTop;
    }
    let left: number = selectRect.left + scrollLeft;
    let right: number = 0;
    let availableWidth: number = window.innerWidth - 16;
    if (selectRect.left + dropDownElement.offsetWidth > availableWidth) {
      left = Math.max(16, availableWidth - dropDownElement.offsetWidth);
      right = Math.max(16, availableWidth - selectRect.left - dropDownElement.offsetWidth);
    }

    dropDownElement.style.top = `${top}px`;
    dropDownElement.style.left = left ? `${left}px` : 'auto';
    dropDownElement.style.right = right ? `${right}px` : 'auto';

    const separator: string = settingService.getClasses().separator;
    const orientationTopClassName: string = `${separator}orientation${separator}${DROP_DOWN_ORIENTATION_TOP}`;
    const orientationBottomClassName: string = `${separator}orientation${separator}${DROP_DOWN_ORIENTATION_BOTTOM}`;
    dropDownElement.classList.add(
      orientation === DROP_DOWN_ORIENTATION_TOP ? orientationTopClassName : orientationBottomClassName
    );
    dropDownElement.classList.remove(
      orientation === DROP_DOWN_ORIENTATION_TOP ? orientationBottomClassName : orientationTopClassName
    );
    if (scroll) {
      const selectedElement: HTMLDivElement = (
        dropDownElement.querySelector('[data-selected=true]') as HTMLDivElement
      );
      if (selectedElement) {
        dropDownElement.scrollTop = selectedElement.offsetTop;
      }
    }
  }
}

export default new DropDownService();
