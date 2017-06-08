import React from 'react';
import AbstractComponent from './AbstractComponent';
import Icon from './Icon';

export default class Pagination extends AbstractComponent {
  getModifierObject() {
    return {
      size: this.props.size,
      color: this.props.color
    };
  }

  getSize() {
    return this.props.size || 24;
  }

  getInfo() {
    const count = parseInt(this.props.count) || 0;
    const limit = parseInt(this.props.limit) || 10;
    if (count <= limit) {
      return null;
    }

    let offset = parseInt(this.props.offset) || 0;
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

  onChange(page) {
    let offset = (page - 1) * this.props.limit;
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(offset, page);
    }
  }

  renderPrev(page) {
    return (
      <div
        className={this.getElementName('pagination', 'prev', {
          disabled: page === 1
        })}
        onClick={() => this.onChange(page - 1)}
      >
        <Icon height={this.getSize()} name="pagination" />
      </div>
    );
  }

  renderNext(page, lastPage) {
    return (
      <div
        className={this.getElementName('pagination', 'next', {
          disabled: page === lastPage
        })}
        onClick={() => this.onChange(page + 1)}
      >
        <Icon height={this.getSize()} name="pagination" rotate="180" />
      </div>
    );
  }

  renderPages(pages, currentPage) {
    let prevPage = 0;
    const result = [];
    pages.forEach((page, index) => {
      let afterEllipsis = false;
      if (page !== (prevPage + 1)) {
        result.push(<div className={this.getElementName('pagination', 'ellipsis')} key={'ellipsis.' + page}>…</div>);
        afterEllipsis = true;
      }

      if (!(index === pages.length - 1 && afterEllipsis && this.props.hideLastPage)) {
        const characterLength = page.toString().length;
        let characters = 'single';
        if (characterLength === 2) {
          characters = 'double';
        }
        if (characterLength > 2) {
          characters = 'multiple';
        }
        result.push(
          <div
            key={page}
            className={this.getElementName('pagination', 'item', {
              current: page === currentPage,
              characters: characters
            })}
            onClick={() => this.onChange(page)}
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
    const info = this.getInfo();
    if (!info) {
      return null;
    }

    return (
      <div
        className={this.getBlockName('pagination', this.getModifierObject())}
      >
        {this.renderPrev(info.page)}
        {this.renderPages(info.pages, info.page)}
        {this.renderNext(info.page, info.lastPage)}
      </div>
    )
  }
}
