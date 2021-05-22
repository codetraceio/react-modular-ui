import * as React from "react";

import settings from "../services/settingService";
import { generateKey } from "../services/utilService";
import { updateTooltip } from "../services/tooltipService";
import { getBlockClassName } from "../services/componentService";

import Portal from "./Portal";

export interface TooltipProps {
  title: string | JSX.Element;
  prefer?: string;
  portal?: JSX.Element[];

  onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface TooltipState {
  show: boolean;
}

export default class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
  private wrapperElement: HTMLElement = null;
  private tooltipElement: HTMLElement = null;

  state = {
    show: false
  };

  updateWrapper(element: HTMLElement) {
    this.wrapperElement = element;
  }

  updateTooltip(element: HTMLElement) {
    this.tooltipElement = element;
  }

  componentDidUpdate(prevProps: TooltipProps) {
    if (this.props.title !== prevProps.title) {
      this.onUpdateTooltip();
    }
  }

  onUpdateTooltip() {
    const wrapperElement: HTMLElement = this.wrapperElement;
    const tooltipElement: HTMLElement = this.tooltipElement;

    if (!wrapperElement || !tooltipElement) {
      return;
    }

    updateTooltip(wrapperElement, tooltipElement, this.props.prefer);
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
    const portalKey: string = settings.isBackend() ? generateKey() : "";

    return (
      <div
        className={getBlockClassName("tooltip-wrapper")}
        onMouseOver={() => this.onShowTooltip()}
        onMouseOut={() => this.onHideTooltip()}
        ref={(element) => this.updateWrapper(element)}
        data-portal-key={portalKey}
      >
        {this.props.children}
        {this.state.show || settings.isBackend() ? (
          <Portal portal={this.props.portal} portalKey={portalKey}>
            <div className={getBlockClassName("tooltip")} ref={(element) => this.updateTooltip(element)}>
              {this.props.title}
            </div>
          </Portal>
        ) : null}
      </div>
    );
  }
}
