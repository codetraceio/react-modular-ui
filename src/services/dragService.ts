interface DragState {
  dragged: HTMLElement;
  placeholder: HTMLElement;
}

function dragService() {
  const state: DragState = {
    dragged: null,
    placeholder: null,
  };

  function setDragged(element: HTMLElement) {
    return (state.dragged = element);
  }

  function getDragged() {
    return state.dragged;
  }

  function setPlaceholder(element: HTMLElement) {
    return (state.placeholder = element);
  }

  function getPlaceholder() {
    return state.placeholder;
  }

  return {
    setDragged,
    getDragged,
    setPlaceholder,
    getPlaceholder,
  };
}

export default dragService();
