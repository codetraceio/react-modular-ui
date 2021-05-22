import * as React from "react";

import { Modifiers, getBlockName, getElementName } from "../services/componentService";
import Icon from "./Icon";

export interface PaginationProps {
  size?: string | number;
  color?: string;
  count?: string | number;
  limit?: string | number;
  offset?: string | number;
  hideLastPage?: boolean;

  onChange?: (offset: number, page: number) => void;
}

export interface PaginationInfo {
  count: number;
  limit: number;
  offset: number;
  page: number;
  lastPage: number;
  pages: number[];
}

export default class Pagination extends React.PureComponent<PaginationProps, {}> {
  getModifierObject(): Modifiers {
    return {
      size: this.props.size,
      color: this.props.color,
    };
  }

  getLimit(): number {
    if (typeof this.props.limit === "string" || typeof this.props.limit === "number") {
      return parseInt(this.props.limit.toString(), 10);
    }
    return 10;
  }

  getSize(): number {
    if (typeof this.props.size === "string" || typeof this.props.size === "number") {
      return parseInt(this.props.size.toString(), 10);
    }
    return 24;
  }

  getCount(): number {
    if (typeof this.props.count === "string" || typeof this.props.count === "number") {
      return parseInt(this.props.count.toString(), 10);
    }
    return 0;
  }

  getOffset(): number {
    if (typeof this.props.offset === "string" || typeof this.props.offset === "number") {
      return parseInt(this.props.offset.toString(), 10);
    }
    return 0;
  }

  getInfo(): PaginationInfo {
    const count: number = this.getCount();
    const limit: number = this.getLimit();
    if (count <= limit) {
      return null;
    }

    let offset: number = this.getOffset();
    if (offset < 0) {
      offset = 0;
    }
    if (offset > count - 2) {
      offset = count - 2;
    }

    const page = Math.ceil(offset / limit) + 1;
    const lastPage = Math.ceil(count / limit) || 1;
    let startPage = page - 2;
    if (startPage < 1) {
      startPage = 1;
    }
    let endPage = page + 2;
    if (endPage > lastPage) {
      endPage = lastPage;
    }
    let pages = [];
    pages.push(1);
    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== lastPage) {
        pages.push(i);
      }
    }
    if (lastPage !== 1) {
      pages.push(lastPage);
    }

    return {
      count: count,
      limit: limit,
      offset: offset,
      page: page,
      lastPage: lastPage,
      pages: pages
    };
  };

  onChange = (page: number) => {
    const offset: number = (page - 1) * this.getLimit();
    if (typeof this.props.onChange === "function") {
      this.props.onChange(offset, page);
    }
  };

  renderPrev(page: number, onChange: (page: number) => void) {
    return (
      <div
        className={getElementName("pagination", "prev", {
          disabled: page === 1
        })}
        onClick={() => onChange(page - 1)}
      >
        <Icon height={this.getSize()} name="pagination" />
      </div>
    );
  }

  renderNext(page: number, lastPage: number, onChange: (page: number) => void) {
    return (
      <div
        className={getElementName("pagination", "next", {
          disabled: page === lastPage
        })}
        onClick={() => onChange(page + 1)}
      >
        <Icon height={this.getSize()} name="pagination" rotate="180" />
      </div>
    );
  }

  renderPages(pages: number[], currentPage: number, onChange: (page: number) => void) {
    let prevPage: number = 0;
    const result: JSX.Element[] = [];
    pages.forEach((page, index) => {
      let afterEllipsis: boolean = false;
      if (page !== (prevPage + 1)) {
        result.push(
          <div
            key={"ellipsis." + page}
            className={getElementName("pagination", "ellipsis")}
          >
            …
          </div>
        );
        afterEllipsis = true;
      }

      if (!(index === pages.length - 1 && afterEllipsis && this.props.hideLastPage)) {
        const characterLength: number = page.toString().length;
        let characters: string = "single";
        if (characterLength === 2) {
          characters = "double";
        }
        if (characterLength > 2) {
          characters = "multiple";
        }
        result.push(
          <div
            key={page}
            className={getElementName("pagination", "item", {
              current: page === currentPage,
              characters: characters
            })}
            onClick={() => onChange(page)}
          >
            {page}
          </div>
        );
      }
      prevPage = page;
    });
    return result;
  }

  render() {
    const info: PaginationInfo = this.getInfo();
    if (!info) {
      return null;
    }

    return (
      <div
        className={getBlockName("pagination", this.getModifierObject())}
      >
        {this.renderPrev(info.page, this.onChange)}
        {this.renderPages(info.pages, info.page, this.onChange)}
        {this.renderNext(info.page, info.lastPage, this.onChange)}
      </div>
    );
  }
}
