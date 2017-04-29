import React from 'react';

import AbstractComponent from './AbstractComponent';
import Portal from './Portal';

export default class Tooltip extends AbstractComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.wrapperElemenet = null;
    this.tooltipElement = null;
  }

  updateWrapper(element) {
    this.wrapperElemenet = element;
  }

  updateTooltip(element) {
    this.tooltipElement = element;
  }

  onUpdateTooltip() {
    const wrapperElement = this.wrapperElemenet;
    const tooltipElement = this.tooltipElement;

    if (!wrapperElement || !tooltipElement) {
      return;
    }

    let rect = wrapperElement.getBoundingClientRect();
    let wrapperWidth = wrapperElement.offsetWidth;
    let wrapperHeight = wrapperElement.offsetHeight;
    let width = tooltipElement.offsetWidth;
    let height = tooltipElement.offsetHeight;
    let left = 0;
    let top = 0;
    let tailSize = 8;
    let fitsRight = rect.left + width + tailSize < window.innerWidth;
    let fitsRightHalf = rect.left + width / 2 + tailSize < window.innerWidth;
    let fitsBottom = rect.bottom + height + tailSize < window.innerHeight;
    let fitsLeft = rect.left - width - tailSize > 0;
    let fitsLeftHalf = rect.left - width - tailSize / 2 > 0;
    let fitsTop = rect.top - height - tailSize > 0;
    let position;

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    tooltipElement.classList.remove('-tail-top');
    tooltipElement.classList.remove('-tail-right');
    tooltipElement.classList.remove('-tail-bottom');
    tooltipElement.classList.remove('-tail-left');

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
        tooltipElement.classList.add('-tail-bottom');
      } else {
        top = rect.top + wrapperHeight + tailSize;
        tooltipElement.classList.add('-tail-top');
      }
    } else {
      top = rect.top - height / 2 + wrapperHeight / 2;
      if (position === 'left') {
        left = rect.left - width - tailSize;
        tooltipElement.classList.add('-tail-right');
      } else {
        left = rect.left + wrapperWidth + tailSize;
        tooltipElement.classList.add('-tail-left');
      }
    }

    tooltipElement.style.left = (scrollLeft + left) + 'px';
    tooltipElement.style.top = (scrollTop + top) + 'px';
  }

  onShowTooltip() {
    this.setState({
      show: true
    }, () => this.onUpdateTooltip());
  }

  onHideTooltip() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.onShowTooltip()}
        onMouseOut={() => this.onHideTooltip()}
        ref={(element) => this.updateWrapper(element)}
      >
        {this.props.children}
        <Portal show={this.state.show}>
          <div className={this.getBlockClassName('tooltip')} ref={(element) => this.updateTooltip(element)}>
            {this.props.title}
          </div>
        </Portal>
      </div>
    );
  }
}
