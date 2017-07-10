import * as React from 'react';

import settings from '../settings';
import utils from '../utils';

import AbstractComponent from './AbstractComponent';
import Portal from './Portal';

export interface ITooltipProps {
  title: string;
  prefer?: string;
  portal?: JSX.Element[];

  onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface ITooltipState {
  show: boolean;
}

export default class Tooltip extends AbstractComponent<ITooltipProps, ITooltipState> {
  private wrapperElement: HTMLElement;
  private tooltipElement: HTMLElement;

  constructor() {
    super();

    this.state = {
      show: false
    };

    this.wrapperElement = null;
    this.tooltipElement = null;
  }

  updateWrapper(element: HTMLElement) {
    this.wrapperElement = element;
  }

  updateTooltip(element: HTMLElement) {
    this.tooltipElement = element;
  }

  onUpdateTooltip() {
    const wrapperElement: HTMLElement = this.wrapperElement;
    const tooltipElement: HTMLElement = this.tooltipElement;

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
    const portalKey: string = settings.isBackend() ? utils.generateKey() : '';

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
