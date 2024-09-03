import React, { MouseEvent, useCallback, useContext, useMemo } from "react";

import { className } from "../utils/className";
import Icon from "./Icon";
import { ThemeContext } from "./ThemeContext";

export interface PaginationProps {
  size?: string | number;
  color?: string;
  count?: number;
  limit?: number;
  offset?: number;
  hideLastPage?: boolean;
  theme?: string;

  onChange?: (offset: number, page: number) => void;
}

export default function Pagination({
  size = 24,
  color,
  count = 0,
  limit = 10,
  offset,
  hideLastPage,
  theme,

  onChange,
  ...props
}: PaginationProps) {
  const themeContext = useContext(ThemeContext);

  const normalizedOffset = Math.max(Math.min(offset ?? 0, count - 1), 0);
  const page = limit > 0 ? Math.ceil(normalizedOffset / limit) + 1 : 0;
  const lastPage = limit > 0 ? Math.ceil(count / limit) : 0;
  const startPage = Math.max(page - 2, 1);
  const endPage = Math.min(page + 2, lastPage);

  const pages = useMemo(() => {
    const result = [];
    result.push(1);
    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== lastPage) {
        result.push(i);
      }
    }
    if (lastPage !== 1) {
      result.push(lastPage);
    }
    return result;
  }, [startPage, endPage, lastPage]);

  const handleChange = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const newPage = Number(event.currentTarget.getAttribute("data-page"));
      const newOffset: number = (newPage - 1) * limit;
      if (typeof onChange === "function") {
        onChange(newOffset, newPage);
      }
    },
    [limit, onChange],
  );

  const prevElement = useMemo(() => {
    return (
      <button
        className={className("pagination", "prev")}
        aria-disabled={page === 1}
        data-page={page - 1}
        onClick={handleChange}
      >
        <Icon height={size} icon="pagination" />
      </button>
    );
  }, [page, size, handleChange]);

  const nextElement = useMemo(() => {
    return (
      <button
        className={className("pagination", "next")}
        aria-disabled={page === lastPage}
        data-page={page + 1}
        onClick={handleChange}
      >
        <Icon height={size} icon="pagination" rotate={180} />
      </button>
    );
  }, [page, size, lastPage, handleChange]);

  const pagesElement = useMemo(() => {
    let prevPage = 0;
    const result: JSX.Element[] = [];
    pages.forEach((currentPage, index) => {
      let afterEllipsis = false;
      if (currentPage !== prevPage + 1) {
        result.push(
          <div
            key={"ellipsis." + currentPage}
            className={className("pagination", "ellipsis")}
          >
            …
          </div>,
        );
        afterEllipsis = true;
      }

      if (!(index === pages.length - 1 && afterEllipsis && hideLastPage)) {
        const characterLength: number = currentPage.toString().length;
        let characters = "single";
        if (characterLength === 2) {
          characters = "double";
        }
        if (characterLength > 2) {
          characters = "multiple";
        }
        result.push(
          <button
            key={currentPage}
            className={className("pagination", "item")}
            data-current={page === currentPage}
            data-characters={characters}
            data-page={currentPage}
            onClick={handleChange}
          >
            {currentPage}
          </button>,
        );
      }
      prevPage = currentPage;
    });
    return result;
  }, [pages, page, hideLastPage, handleChange]);

  if (!page || count <= limit) {
    return null;
  }

  return (
    <div
      className={className("pagination")}
      data-size={size}
      data-color={color}
      data-theme={theme ?? themeContext}
      {...props}
    >
      {prevElement}
      {pagesElement}
      {nextElement}
    </div>
  );
}
