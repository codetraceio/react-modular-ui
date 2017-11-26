import * as React from 'react';

import settings from '../services/settingService';
import utilService from '../services/utilService';
import tooltipService from '../services/tooltipService';
import {getBlockClassName} from '../services/componentService';

import Portal from './Portal';

export interface ITooltipProps {
  title: string | JSX.Element;
  prefer?: string;
  portal?: JSX.Element[];

  onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface ITooltipState {
  show: boolean;
}

export default class Tooltip extends React.Component<ITooltipProps, ITooltipState> {
  private wrapperElement: HTMLElement;
  private tooltipElement: HTMLElement;

  constructor(props: ITooltipProps) {
    super(props);

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

    tooltipService.updateTooltip(wrapperElement, tooltipElement, this.props.prefer);
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
    const portalKey: string = settings.isBackend() ? utilService.generateKey() : '';

    return (
      <div
        className={getBlockClassName('tooltip-wrapper')}
        onMouseOver={() => this.onShowTooltip()}
        onMouseOut={() => this.onHideTooltip()}
        ref={(element) => this.updateWrapper(element)}
        data-portal-key={portalKey}
      >
        {this.props.children}
        {this.state.show ? (
          <Portal portal={this.props.portal} portalKey={portalKey}>
            <div className={getBlockClassName('tooltip')} ref={(element) => this.updateTooltip(element)}>
              {this.props.title}
            </div>
          </Portal>
        ) : null}
      </div>
    );
  }
}
