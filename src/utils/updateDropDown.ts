export const DROP_DOWN_ORIENTATION_TOP = "top";
export const DROP_DOWN_ORIENTATION_BOTTOM = "bottom";

export function updateDropDown(
  dropDownElement: HTMLElement,
  selectElement: HTMLElement,
) {
  if (!dropDownElement || !selectElement) {
    return;
  }

  const selectRect = selectElement.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
  let orientation = DROP_DOWN_ORIENTATION_BOTTOM;

  // if (fixed) {
  //   dropDownElement.style.position = "fixed";
  //   scrollLeft = scrollTop = 0;
  // }

  const maxHeight = Math.min(Math.max(window.innerHeight - selectRect.bottom - 32, 256), 512);

  dropDownElement.style.minWidth = `${selectRect.width}px`;
  dropDownElement.style.maxWidth = `${window.innerWidth - 64}px`;
  dropDownElement.style.maxHeight = `${maxHeight}px`;

  let top = selectRect.bottom + scrollTop;
  if (selectRect.bottom + dropDownElement.offsetHeight > window.innerHeight) {
    orientation = DROP_DOWN_ORIENTATION_TOP;
    dropDownElement.style.maxHeight = `${Math.min(selectRect.top - 32, 512)}px`;
    top = selectRect.top - dropDownElement.offsetHeight + scrollTop;
  }
  let left = selectRect.left + scrollLeft;
  let right = 0;
  const availableWidth = window.innerWidth - 16;
  if (selectRect.left + dropDownElement.offsetWidth > availableWidth) {
    left = Math.max(16, availableWidth - dropDownElement.offsetWidth);
    right = Math.max(16, availableWidth - selectRect.left - dropDownElement.offsetWidth);
  }

  dropDownElement.style.top = `${top}px`;
  dropDownElement.style.left = left ? `${left}px` : "auto";
  dropDownElement.style.right = right ? `${right}px` : "auto";

  dropDownElement.setAttribute("data-orientation", orientation);
  // if (scroll) {
  //   const selectedElement: HTMLDivElement = (
  //     dropDownElement.querySelector("[data-selected=true]") as HTMLDivElement
  //   );
  //   if (selectedElement) {
  //     dropDownElement.scrollTop = selectedElement.offsetTop;
  //   }
  // }
}
