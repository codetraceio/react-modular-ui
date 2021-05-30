interface DragState {
  dragged: HTMLElement;
  placeholder: HTMLElement;
}

const state: DragState = {
  dragged: null,
  placeholder: null,
};

export function setDragged(element: HTMLElement) {
  return state.dragged = element;
}

export function getDragged() {
  return state.dragged;
}

export function setPlaceholder(element: HTMLElement) {
  return state.placeholder = element;
}

export function getPlaceholder() {
  return state.placeholder;
}
