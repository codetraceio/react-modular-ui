export class DropDownService {
  updateDropDown(dropDownElement: HTMLElement, selectElement: HTMLElement, fixed: boolean) {
    const selectRect = selectElement.getBoundingClientRect();

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    if (fixed) {
      dropDownElement.style.position = 'fixed';
      scrollLeft = scrollTop = 0;
    }

    const maxHeight = Math.min(Math.max(window.innerHeight - selectRect.bottom - 32, 256), 512);

    dropDownElement.style.minWidth = `${selectRect.width}px`;
    dropDownElement.style.maxWidth = `${window.innerWidth - 64}px`;
    dropDownElement.style.maxHeight = `${maxHeight}px`;

    let top = selectRect.bottom + scrollTop;
    if (selectRect.bottom + dropDownElement.offsetHeight > window.innerHeight) {
      dropDownElement.style.maxHeight = `${Math.min(selectRect.top - 64, 512)}px`;
      top = selectRect.top - dropDownElement.offsetHeight + scrollTop;
    }
    let left = selectRect.left + scrollLeft;
    let right = 0;
    let availableWidth = window.innerWidth - 16;
    if (selectRect.left + dropDownElement.offsetWidth > availableWidth) {
      left = Math.max(16, availableWidth - dropDownElement.offsetWidth);
      right = Math.max(16, availableWidth - selectRect.left - dropDownElement.offsetWidth);
    }

    dropDownElement.style.top = `${top}px`;
    dropDownElement.style.left = left ? `${left}px` : 'auto';
    dropDownElement.style.right = right ? `${right}px` : 'auto';
  }
}

export default new DropDownService();
