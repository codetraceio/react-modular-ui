import * as React from 'react';

import { IModifiers, getBlockName, getElementName } from '../services/componentService';
import Icon from './Icon';

export interface IPaginationProps {
  size?: string | number;
  color?: string;
  count?: string | number;
  limit?: string | number;
  offset?: string | number;
  hideLastPage?: boolean;

  onChange?: (offset: number, page: number) => void;
}

export interface IPaginationInfo {
  count: number;
  limit: number;
  offset: number;
  page: number;
  lastPage: number;
  pages: number[];
}

function getModifierObject(props: IPaginationProps): IModifiers {
  return {
    size: props.size,
    color: props.color
  };
}

function getLimit(props: IPaginationProps): number {
  if (typeof props.limit === 'string' || typeof props.limit === 'number') {
    return parseInt(props.limit.toString(), 10);
  }
  return 10;
}

function getSize(props: IPaginationProps): number {
  if (typeof props.size === 'string' || typeof props.size === 'number') {
    return parseInt(props.size.toString(), 10);
  }
  return 24;
}

function getCount(props: IPaginationProps): number {
  if (typeof props.count === 'string' || typeof props.count === 'number') {
    return parseInt(props.count.toString(), 10);
  }
  return 0;
}

function getOffset(props: IPaginationProps): number {
  if (typeof props.offset === 'string' || typeof props.offset === 'number') {
    return parseInt(props.offset.toString(), 10);
  }
  return 0;
}

function getInfo(props: IPaginationProps): IPaginationInfo {
  const count: number = getCount(props);
  const limit: number = getLimit(props);
  if (count <= limit) {
    return null;
  }

  let offset: number = getOffset(props);
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
}

function renderPrev(props: IPaginationProps, page: number, onChange: (page: number) => void) {
  return (
    <div
      className={getElementName('pagination', 'prev', {
        disabled: page === 1
      })}
      onClick={() => onChange(page - 1)}
    >
      <Icon height={getSize(props)} name="pagination" />
    </div>
  );
}

function renderNext(props: IPaginationProps, page: number, lastPage: number, onChange: (page: number) => void) {
  return (
    <div
      className={getElementName('pagination', 'next', {
        disabled: page === lastPage
      })}
      onClick={() => onChange(page + 1)}
    >
      <Icon height={getSize(props)} name="pagination" rotate="180" />
    </div>
  );
}

function renderPages(props: IPaginationProps, pages: number[], currentPage: number, onChange: (page: number) => void) {
  let prevPage: number = 0;
  const result: JSX.Element[] = [];
  pages.forEach((page, index) => {
    let afterEllipsis: boolean = false;
    if (page !== (prevPage + 1)) {
      result.push(<div className={getElementName('pagination', 'ellipsis')} key={'ellipsis.' + page}>…</div>);
      afterEllipsis = true;
    }

    if (!(index === pages.length - 1 && afterEllipsis && props.hideLastPage)) {
      const characterLength: number = page.toString().length;
      let characters: string = 'single';
      if (characterLength === 2) {
        characters = 'double';
      }
      if (characterLength > 2) {
        characters = 'multiple';
      }
      result.push(
        <div
          key={page}
          className={getElementName('pagination', 'item', {
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


export default function Pagination(props: IPaginationProps) {
  function onChange(page: number): void {
    const offset: number = (page - 1) * getLimit(props);
    if (typeof props.onChange === 'function') {
      props.onChange(offset, page);
    }
  }

  const info: IPaginationInfo = getInfo(props);
  if (!info) {
    return null;
  }

  return (
    <div
      className={getBlockName('pagination', getModifierObject(props))}
    >
      {renderPrev(props, info.page, onChange)}
      {renderPages(props, info.pages, info.page, onChange)}
      {renderNext(props, info.page, info.lastPage, onChange)}
    </div>
  )
}
