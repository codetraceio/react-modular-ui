import React from 'react';
import ReactDOM from 'react-dom';

import AbstractComponent from './AbstractComponent';

export default class Tooltip extends AbstractComponent {
  constructor(props) {
    super(props);

    this.wrapperElemenet = null;
  }

  componentWillUnmount() {
    this.hideTooltip();
  }

  updateWrapper(element) {
    this.wrapperElemenet = element;
  }

  onUpdateTooltip() {
    let rect = this.wrapperElemenet.getBoundingClientRect();
    let tooltip = document.querySelector('.tooltip');
    let wrapperWidth = wrapper.offsetWidth;
    let wrapperHeight = wrapper.offsetHeight;
    let width = tooltip.offsetWidth;
    let height = tooltip.offsetHeight;
    let left = 0;
    let top = 0;
    let tailSize = 8;
    let fitsRight = rect.left + width + tailSize < document.body.scrollWidth;
    let fitsRightHalf = rect.left + width / 2 + tailSize < document.body.scrollWidth;
    let fitsBottom = rect.bottom + height + tailSize < document.body.scrollHeight;
    let fitsLeft = rect.left - width - tailSize > 0;
    let fitsLeftHalf = rect.left - width - tailSize / 2 > 0;
    let fitsTop = rect.top - height - tailSize > 0;
    let position;

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    tooltip.classList.remove('-tail-top');
    tooltip.classList.remove('-tail-right');
    tooltip.classList.remove('-tail-bottom');
    tooltip.classList.remove('-tail-left');

    if (this.props.prefer === 'left' && fitsLeft) {
      position = 'left';
    } else if (this.props.prefer === 'right' && fitsRight) {
      position = 'right';
    } else if (this.props.prefer === 'top' && fitsRightHalf && fitsLeftHalf && fitsTop) {
      position = 'top';
    } else if (fitsRightHalf && fitsLeftHalf && (fitsTop || fitsBottom)) {
      position = fitsBottom ? 'bottom' : 'top';
    } else {
      position = fitsRight ? 'right' : 'left';
    }

    if (position === 'top' || position === 'bottom') {
      left = rect.left - width / 2 + wrapperWidth / 2;
      if (position === 'top') {
        top = rect.top - height - tailSize;
        tooltip.classList.add('-tail-bottom');
      } else {
        top = rect.top + wrapperHeight + tailSize;
        tooltip.classList.add('-tail-top');
      }
    } else {
      top = rect.top - height / 2 + wrapperHeight / 2;
      if (position === 'left') {
        left = rect.left - width - tailSize;
        tooltip.classList.add('-tail-right');
      } else {
        left = rect.left + wrapperWidth + tailSize;
        tooltip.classList.add('-tail-left');
      }
    }

    tooltip.style.left = (scrollLeft + left) + 'px';
    tooltip.style.top = (scrollTop + top) + 'px';
  }

  showTooltip() {
    let element = (
      <div className={this.blockClassName('tooltip')}>
        {this.props.tooltip}
      </div>
    );
    ReactDOM.render(element, document.querySelector('.tooltip-container'), this.onUpdateTooltip);
  }

  hideTooltip() {
    ReactDOM.unmountComponentAtNode(document.querySelector('.tooltip-container'));
  }

  onShowTooltip() {
    this.showTooltip();
  }

  onHideTooltip() {
    this.hideTooltip();
  }

  render() {
    return (
      <div
        onMouseOver={this.onShowTooltip}
        onMouseOut={this.onHideTooltip}
        ref={this.updateWrapper}
      >
        {this.props.children}
      </div>
    );
  }
}
