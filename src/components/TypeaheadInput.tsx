import React = require("react");

import Input from "./Input";
import Portal from "./Portal";
import settingService from "../services/settingService";
import { generateKey } from "../services/utilService";
import { getElementName, getBlockName } from "../services/componentService";
import { updateDropDown } from "../services/dropDownService";
import { clickOutsideService } from "..";

export interface IInputTypeaheadProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  shape?: string;
  opened?: boolean;
  fixed?: boolean;
  options?: string[];
  matchingOptionsOnly?: boolean;
  hideInitialOptions?: boolean;

  portal?: JSX.Element[];

  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (value: string, event: React.MouseEvent<HTMLInputElement>) => void;
}

export interface IInputTypeaheadState {
  opened?: boolean;
  scroll?: boolean;
}

export default class InputTypeahead extends React.Component<IInputTypeaheadProps, IInputTypeaheadState> {
  private dropDownElement: HTMLElement;
  private visibleElement: HTMLElement;
  private optionMap: {[key: string]: boolean};

  state = {
    opened: false,
    scroll: false,
  }

  componentWillMount() {
    this.updateOptionMap(this.props.options);
  }

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

  componentWillReceiveProps(props: IInputTypeaheadProps) {
    if (props.options !== this.props.options) {
      this.updateOptionMap(props.options);
    }
    if (this.isValid(props.value)) {
      this.onClose();
    }
  }
  
  updateOptionMap(options: string[]) {
    this.optionMap = {};
    options.forEach((option: string) => {
      this.optionMap[option] = true;
    });
  }

  isValid(value: string): boolean {
    return this.optionMap[value];
  }

  isOpened(): boolean {
    return this.props.opened || this.state.opened;
  }

  onUpdateDropDownElement = (element: HTMLElement) => {
    this.dropDownElement = element;

    this.onUpdateDropDown();
  };

  onUpdateVisibleElement = (element: HTMLElement) => {
    this.visibleElement = element;
  };

  onUpdateDropDown = () => {
    if (!this.dropDownElement) {
      return;
    }
    updateDropDown(this.dropDownElement, this.visibleElement, this.state.scroll, this.props.fixed);

    if (this.state.scroll) {
      this.setState({
        scroll: false
      });
    }
  };

  onChange = (value: string, event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(value, event);
    }

    this.onOpen();
  };

  onBlur = (value: string, event: React.FocusEvent<HTMLInputElement>) => {
    if (typeof this.props.onBlur === "function") {
      this.props.onBlur(value, event);
    }

    if (event.relatedTarget) {
      this.onClose();
    }
  };

  onWindowScroll = () => {
    if (this.isOpened()) {
      const selectElement = this.visibleElement.getBoundingClientRect();

      if (selectElement.bottom < 32 || selectElement.top > window.innerHeight) {
        this.onClose();
      } else {
        this.onUpdateDropDown();
      }
    }
  };


  onOpen = () => {
    this.setState({
      opened: true,
    }, () => {
      this.onUpdateDropDown();
    });
  }

  onClose = () => {
    this.setState({
      opened: false,
    });
  };

  onSelectOption = (option: string) => {
    this.onChange(option, null);
    if (typeof this.props.onSubmit === "function") {
      this.props.onSubmit(option, null);
    }
  };

  onClick = () => {
    if (!this.isValid(this.props.value)) {
      this.onOpen();
    }
  }

  getOptions() {
    if (!this.props.options || this.props.hideInitialOptions && this.props.value === "") {
      return [];
    }

    if (this.props.matchingOptionsOnly) {
      const currentValue = this.props.value.toLowerCase();
      return this.props.options.filter((value) => value.toLowerCase().includes(currentValue));
    }

    return this.props.options;
  }

  renderOptions() {
    return this.getOptions().map((option: string) => {
      return (
        <div
          key={option}
          className={getElementName("typeahead-input", "option")}
          onClick={() => this.onSelectOption(option)}
        >
          {option}
        </div>
      );
    });
  }

  render() {
    const portalKey: string = settingService.isBackend() ? generateKey() : "";

    return (
      <div
        className={getBlockName("typeahead-input")}
        ref={this.onUpdateVisibleElement}
      >
        <Input
          size={this.props.size}
          view={this.props.view}
          color={this.props.color || this.isValid(this.props.value) && "success"}
          disabled={this.props.disabled}
          name={this.props.name}
          label={this.props.label}
          value={this.props.value}
          placeholder={this.props.placeholder}
          shape={this.props.shape}

          onChange={this.onChange}
          onKeyDown={this.props.onKeyDown}
          onKeyUp={this.props.onKeyUp}
          onKeyPress={this.props.onKeyPress}
          onFocus={this.props.onFocus}
          onBlur={this.onBlur}
          onSubmit={this.props.onSubmit}
          onClick={this.onClick}
        />
        {this.isOpened() ? (
          <Portal
            portal={this.props.portal}
            portalKey={portalKey}
            onUpdate={this.onUpdateDropDown}
          >
            <div
              className={getElementName("typeahead-input", "drop-down")}
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
