import React, { DragEvent, useCallback } from "react";
import dragService from "../services/dragService";

export interface SortableItem {
  key: string;
}

export interface SortableChange {
  sourceKey: string;
  targetKey: string;
  sourceSortableName?: string;
  targetSortableName?: string;
}

interface SortableProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  onChange: (change: SortableChange) => void;
  unique: keyof T;

  name?: string;
  space?: string | number;
  padding?: string | number;
  layout?: "horizontal" | "vertical";
  disabled?: boolean;
  useHandle?: boolean;
}

export function removeElement<T>(elements: T[], elementKey: string, unique: keyof T): [T[], T] {
  const element = elements.find((e) => e[unique].toString() === elementKey);
  const updatedElements = elements.filter((e) => e[unique]  as any !== elementKey);
  return [updatedElements, element];
}

export function insertElement<T>(elements: T[], element: T, targetKey: string, unique: keyof T) {
  if (!elements || elements.length === 0) {
    return [element];
  }
  const targetIndex = elements.findIndex((e) => e[unique].toString() === targetKey);
  const items = [].concat(elements);
  items.splice(targetIndex + 1, 0, element);
  return items;
}

function getElement(element: HTMLElement, includeTypes: string[], excludeTypes: string[] = []): HTMLElement {
  if (!element) {
    return null;
  }
  const dataType = element.getAttribute("data-type");
  if (includeTypes.includes(dataType)) {
    return element;
  }
  if (excludeTypes.includes(dataType)) {
    return null;
  }
  return getElement(element.parentElement, includeTypes, excludeTypes);
}

function getDraggableElement(element: HTMLElement): HTMLElement | null {
  return getElement(element, ["draggable"], ["sortable", "placeholder"]);
}

function getHandleElement(element: HTMLElement): HTMLElement | null {
  return getElement(element, ["handle"], ["sortable"]);
}

function getSortableElement(element: HTMLElement): HTMLElement | null {
  return getElement(element, ["sortable"], []);
}

function createPlaceholder() {
  const element = document.createElement("div");
  element.setAttribute("data-type", "placeholder");
  return element;
}

function ensurePlaceholder() {
  return dragService.getPlaceholder() || dragService.setPlaceholder(createPlaceholder());
}

export default function Sortable<T>(props: SortableProps<T>) {
  const isHorizontal = props.layout === "horizontal";
  const lastIndex = props.items.length - 1;

  const getItemStyle = useCallback((index: number) => {
    return {
      marginBottom: !isHorizontal && index !== lastIndex && props.space ? `${props.space}px` : "",
      marginRight: isHorizontal && index !== lastIndex && props.space ? `${props.space}px` : "",
    };
  }, [isHorizontal, lastIndex, props.space]);

  const onDragStart = useCallback((e: DragEvent<HTMLDivElement>) => {
    const dragged = e.currentTarget;
    const placeholder = ensurePlaceholder();
    e.dataTransfer.effectAllowed = "move";
    placeholder.style.height = `${dragged.offsetHeight}px`;
    dragService.setDragged(dragged);
    dragged.parentElement.insertBefore(placeholder, dragged.nextElementSibling);
  }, [props.items, props.useHandle]);

  const onDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dragged = dragService.getDragged();

    dragged.style.display = "none";
    const element = getDraggableElement(e.target as HTMLElement);
    const sortable = getSortableElement(e.target as HTMLElement);
    const placeholder = ensurePlaceholder();

    if (element === dragged || e.target === placeholder) {
      return;
    }

    if (!element) {
      sortable.appendChild(placeholder);
      return;
    }

    if (isHorizontal) {
      const positionX = element.offsetLeft - e.clientX;
      const width = element.offsetWidth;
      placeholder.style.width = `${width}px`;
      placeholder.style.height = "auto";
      if (positionX > width / 2) {
        sortable.insertBefore(placeholder, element.nextElementSibling);
      } else {
        sortable.insertBefore(placeholder, element);
      }
    } else {
      const positionY = element.offsetTop - e.clientY;
      const height = element.offsetHeight;
      placeholder.style.height = `${height}px`;
      placeholder.style.width = "auto";
      if (positionY > height / 2) {
        sortable.insertBefore(placeholder, element.nextElementSibling);
      } else {
        sortable.insertBefore(placeholder, element);
      }
    }
  }, [props.items, isHorizontal]);

  const onMouseDown = useCallback((e: DragEvent<HTMLDivElement>) => {
    if (props.disabled || props.useHandle && !getHandleElement(e.target as HTMLElement)) {
      return;
    }
    const draggable = getDraggableElement(e.target as HTMLElement);
    if (!draggable) {
      return;
    }
    draggable.draggable = true;
  }, [props.items]);

  const onDragEnd = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dragged = dragService.getDragged();
    const placeholder = ensurePlaceholder();
    dragged.style.display = "block";
    dragged.draggable = false;

    if (!placeholder) {
      return;
    }
    const sourceKey = dragged.getAttribute("data-key");
    const targetKey = placeholder.previousElementSibling ? placeholder.previousElementSibling.getAttribute("data-key") : "";
    const sourceSortable = getSortableElement(dragged);
    const targetSortable = getSortableElement(placeholder);
    const sourceSortableName = sourceSortable && sourceSortable.getAttribute("data-name");
    const targetSortableName = targetSortable && targetSortable.getAttribute("data-name");

    if (placeholder.parentNode) {
      placeholder.parentNode.removeChild(placeholder);
    }
    if (sourceKey !== targetKey) {
      props.onChange({ sourceKey, targetKey, sourceSortableName, targetSortableName });
    }
  }, [props.items]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        padding: props.padding ? `${props.padding}px` : "",
      }}
      onDragOver={!props.disabled ? onDragOver : null}
      data-type="sortable"
      data-name={props.name}
    >
      {props.items.map((item, index) => (
        <div
          key={item[props.unique].toString()}
          data-type="draggable"
          data-key={item[props.unique].toString()}
          onDragStart={!props.disabled ? onDragStart : null}
          onDragEnd={!props.disabled ? onDragEnd : null}
          onMouseDown={!props.disabled ? onMouseDown : null}
          style={getItemStyle(index)}
        >
          {props.renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}
