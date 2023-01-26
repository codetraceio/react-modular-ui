import React, { useCallback, useContext, useMemo } from "react";

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

  onChange?: (offset: number, page: number) => void;
}


export default function Pagination(props: PaginationProps) {
  const { onChange, hideLastPage } = props;

  const theme = useContext(ThemeContext);

  const limit = props.limit ?? 10;
  const count = props.count ?? 0;
  const offset = Math.max(Math.min(props.offset ?? 0, count - 1), 0);
  const size = props.size ?? 24;
  const page = limit > 0 ? Math.ceil(offset / limit) + 1 : 0;
  const lastPage =  limit > 0 ? Math.ceil(count / limit) : 0;
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

  const handleChangeCreator = useCallback((newPage: number) => () => {
    const newOffset: number = (newPage - 1) * limit;
    if (typeof onChange === "function") {
      onChange(newOffset, newPage);
    }
  }, [limit, onChange]);

  const prevElement = useMemo(() => {
    return (
      <div
        className={className("pagination", "prev")}
        aria-disabled={page === 1}
        onClick={handleChangeCreator(page - 1)}
      >
        <Icon height={size} icon="pagination" />
      </div>
    );
  }, [page, size, handleChangeCreator]);

  const nextElement = useMemo(() => {
    return (
      <div
        className={className("pagination", "next")}
        aria-disabled={page === lastPage}
        onClick={handleChangeCreator(page + 1)}
      >
        <Icon height={size} icon="pagination" rotate={180} />
      </div>
    );
  }, [page, size, lastPage, handleChangeCreator]);

  const pagesElement = useMemo(() => {
    let prevPage = 0;
    const result: JSX.Element[] = [];
    pages.forEach((currentPage, index) => {
      let afterEllipsis = false;
      if (currentPage !== (prevPage + 1)) {
        result.push(
          <div
            key={"ellipsis." + currentPage}
            className={className("pagination", "ellipsis")}
          >
            …
          </div>
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
          <div
            key={currentPage}
            className={className("pagination", "item")}
            data-current={page === currentPage}
            data-characters={characters}
            onClick={handleChangeCreator(currentPage)}
          >
            {currentPage}
          </div>
        );
      }
      prevPage = currentPage;
    });
    return result;
  }, [pages, page, hideLastPage, handleChangeCreator]);

  if (!page || count <= limit) {
    return null;
  }

  return (
    <div
      className={className("pagination")}
      data-size={props.size}
      data-color={props.color}
      data-theme={theme}
    >
      {prevElement}
      {pagesElement}
      {nextElement}
    </div>
  );
}
