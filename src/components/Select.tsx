import React = require("react");

import clickOutsideService from "../services/clickOutsideService";
import { updateDropDown } from "../services/dropDownService";
import settingService from "../services/settingService";
import { generateKey } from "../services/utilService";

import { Modifiers, getBlockName, getElementName } from "../services/componentService";
import Icon from "./Icon";
import Portal from "./Portal";

export interface SelectProps {
  placeholder?: string;
  label?: string;
  size?: string | number;
  view?: string;
  disabled?: boolean;
  opened?: boolean;
  fixed?: boolean;
  portal?: JSX.Element[];
  options?: SelectOption[];
  value?: string;

  onChangeOpened?: (opened: boolean) => void;
  onChange?: (value: string, option: SelectOption) => void;
}

export interface SelectState {
  opened: boolean;
  scroll: boolean;
}

export interface SelectOption {
  title: string;
  value: string;
}

export default class Select extends React.PureComponent<SelectProps, SelectState> {
  private dropDownElement: HTMLElement;
  private selectElement: HTMLElement;

  state = {
    opened: false,
    scroll: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onWindowScroll, true);
    window.addEventListener("resize", this.onUpdateDropDown, true);
    clickOutsideService.on(this.onClose);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScroll, true);
    window.removeEventListener("resize", this.onUpdateDropDown, true);
    clickOutsideService.off(this.onClose);
  }

  getModifierObject(): Modifiers {
    return {
      size: this.props.size,
      view: this.props.view,
      disabled: this.props.disabled,
      selected: this.isOpened(),
    };
  }

  getOptionModifierObject(value: string): Modifiers {
    return {
      selected: value === this.props.value,
    };
  }

  getOptions(): SelectOption[] {
    return this.props.options || [];
  }

  getTitle() {
    if (this.props.value) {
      const option: SelectOption = this.props.options.find((option: SelectOption) => {
        return option.value === this.props.value;
      });
      if (option) {
        return option.title;
      }
    }
    return this.props.placeholder;
  }

  isOpened(): boolean {
    return this.props.opened || this.state.opened;
  }

  onClose = () => {
    this.onSetOpened(false);
  };

  onUpdateDropDownElement = (element: HTMLElement) => {
    this.dropDownElement = element;

    this.onUpdateDropDown();
  };

  onUpdateSelectElement = (element: HTMLElement) => {
    this.selectElement = element;
  };

  onClick = () => {
    this.onSetOpened(!this.isOpened());
  };

  onSetOpened = (opened: boolean) => {
    this.setState({
      opened: opened,
      scroll: opened
    });

    if (this.props.onChangeOpened) {
      this.props.onChangeOpened(opened);
    }
  };

  onUpdateDropDown = () => {
    if (!this.dropDownElement) {
      return;
    }
    updateDropDown(this.dropDownElement, this.selectElement, this.state.scroll, this.props.fixed);

    if (this.state.scroll) {
      this.setState({
        scroll: false
      });
    }
  };

  onWindowScroll = () => {
    if (this.isOpened()) {
      const selectElement = this.selectElement.getBoundingClientRect();

      if (selectElement.bottom < 32 || selectElement.top > window.innerHeight) {
        this.onClose();
      } else {
        this.onUpdateDropDown();
      }
    }
  };

  onChange = (value: string, option: SelectOption) => {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(value, option);
    }

    this.onClose();
  };

  renderLabel() {
    if (!this.props.label) {
      return null;
    }

    return (
      <div className={getElementName("select", "label")}>
        {this.props.label}
      </div>
    );
  }

  renderOptions() {
    return this.getOptions().map((option: SelectOption) => {
      return (
        <div
          key={option.value}
          className={getElementName(
            "select", "option", this.getOptionModifierObject(option.value)
          )}
          onClick={() => this.onChange(option.value, option)}
          data-selected={option.value === this.props.value}
        >
          {option.title}
        </div>
      );
    });
  }

  render() {
    const portalKey: string = settingService.isBackend() ? generateKey() : "";

    return (
      <div
        className={getBlockName("select", this.getModifierObject())}
      >
        {this.renderLabel()}
        <div
          className={getElementName("select", "box")}
          onClick={this.onClick}
          data-inside={this.isOpened()}
          ref={this.onUpdateSelectElement}
        >
          <div className={getElementName("select", "value")}>
            {this.getTitle()}
          </div>
          <div className={getElementName("select", "icon")}>
            <Icon width="12" rotate={this.isOpened() ? 180 : 0} name="drop-down" />
          </div>
        </div>
        {this.isOpened() ? (
          <Portal
            portal={this.props.portal}
            portalKey={portalKey}
            onUpdate={this.onUpdateDropDown}
          >
            <div
              className={getElementName("select", "drop-down")}
              ref={this.onUpdateDropDownElement}
              data-inside
            >
              {this.renderOptions()}
            </div>
          </Portal>
         ) : null}
      </div>
    );
  }
}
