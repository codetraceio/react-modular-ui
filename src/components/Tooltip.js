import React from 'react';

import settings from '../settings';
import utils from '../utils';

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

    utils.updateTooltip(wrapperElement, tooltipElement, this.props.prefer);
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
    const portalKey = settings.isBackend() ? utils.generateKey() : null;

    return (
      <div
        className={this.getBlockClassName('tooltip-wrapper')}
        onMouseOver={() => this.onShowTooltip()}
        onMouseOut={() => this.onHideTooltip()}
        ref={(element) => this.updateWrapper(element)}
        data-portal-key={portalKey}
      >
        {this.props.children}
        <Portal show={this.state.show} portal={this.props.portal} portalKey={portalKey}>
          <div className={this.getBlockClassName('tooltip')} ref={(element) => this.updateTooltip(element)}>
            {this.props.title}
          </div>
        </Portal>
      </div>
    );
  }
}
