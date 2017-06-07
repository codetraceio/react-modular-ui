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

  renderPrev(page) {
    return (
      <div
        className={this.getElementClassName('pagination', 'prev', {
          disabled: page === 1
        })}
        onClick={() => this.onChange(page - 1)}
      >
        <Icon name="prev" />
      </div>
    );
  }

  renderNext(page, lastPage) {
    return (
      <div
        className={this.getElementClassName('pagination', 'next', {
          disabled: page === lastPage
        })}
        onClick={() => this.onChange(page - 1)}
      >
        <Icon name="next" />
      </div>
    );
  }

  renderPages(pages, currentPage) {
    let prevPage = 0;
    const result = [];
    pages.forEach((page, index) => {
      let afterEllipsis = false;
      if (page !== (prevPage + 1)) {
        result.push(<div className="ellipsis" key={'ellipsis.' + page} />);
        afterEllipsis = true;
      }

      if (!(index === pages.length - 1 && afterEllipsis && this.props.hideLastPage)) {
        result.push(
          <div
            key={page}
            className={this.getElementClassName('pagination', 'item', {
              current: page === currentPage,
              characters: page.toString().length
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
