import React = require("react");

import Input from "./Input";
import Portal from "./Portal";
import settingService from "../services/settingService";
import { generateKey } from "../services/utilService";
import { getElementName, getBlockName } from "../services/componentService";
import { updateDropDown } from "../services/dropDownService";
import { clickOutsideService } from "..";

export type TypeaheadInputCallback<T> = (
  option: string | ITypeaheadInputOption,
  event: T
) => void;

export type ChangeCallback = TypeaheadInputCallback<React.ChangeEvent<HTMLInputElement>>;

export type KeyboardCallback = TypeaheadInputCallback<React.KeyboardEvent<HTMLInputElement>>;

export type FocusCallback = TypeaheadInputCallback<React.FocusEvent<HTMLInputElement>>;

export type MouseCallback = TypeaheadInputCallback<React.MouseEvent<HTMLInputElement>>;

export type InputEvent = (
  React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> |
  React.FocusEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>
);

export interface ITypeaheadInputOption {
  value: string; // visible value
  key: string;   // key
}

export interface ITypeaheadInputProps {
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
  options?: (string | ITypeaheadInputOption)[];
  matchingOptionsOnly?: boolean;
  hideInitialOptions?: boolean;

  portal?: JSX.Element[];

  onChange?: ChangeCallback;
  onKeyDown?: KeyboardCallback;
  onKeyUp?: KeyboardCallback;
  onKeyPress?: KeyboardCallback;
  onSubmit?: KeyboardCallback;
  onFocus?: FocusCallback;
  onBlur?: FocusCallback;
  onClick?: MouseCallback;
}

export interface ITypeaheadInputState {
  opened?: boolean;
  scroll?: boolean;
}

export default class TypeaheadInput extends React.Component<ITypeaheadInputProps, ITypeaheadInputState> {
  private dropDownElement: HTMLElement;
  private visibleElement: HTMLElement;
  private optionMap: {[key: string]: string};
  private isOptionObject: boolean = false;

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

  componentWillReceiveProps(props: ITypeaheadInputProps) {
    if (props.options !== this.props.options) {
      this.updateOptionMap(props.options);
    }
  }
  
  updateOptionMap(options: (string | ITypeaheadInputOption)[]) {
    this.optionMap = {};
    if (options && typeof options[0] === "object") {
      this.isOptionObject = true;
    }
    options.forEach((option: string | ITypeaheadInputOption) => {
      const value = typeof option === "string" ? option : option.value;
      const key = typeof option === "string" ? option : option.key;
      this.optionMap[value] = key;
    });
  }

  isValid(value: string): boolean {
    return typeof this.optionMap[value] === "string";
  }

  isOpened(): boolean {
    return this.props.opened || this.state.opened;
  }

  triggerExtenalEvent(callback: TypeaheadInputCallback<InputEvent>) {
    return (value: string, event: InputEvent) => {
      if (typeof callback === "function") {
        const key = this.optionMap[value];
        const option = this.isOptionObject ? {
          key: key,
          value: value,
        } : value;
        callback(option, event);
      }
    }
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
    this.triggerExtenalEvent(this.props.onChange)(value, event);

    this.onOpen();
  };

  onKeyDown = (value: string, event:  React.KeyboardEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onKeyDown)(value, event);
  }

  onKeyUp = (value: string, event:  React.KeyboardEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onKeyUp)(value, event);
  }

  onKeyPress = (value: string, event:  React.KeyboardEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onKeyPress)(value, event);
  }

  onSubmit = (value: string, event:  React.KeyboardEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onSubmit)(value, event);
  }

  onFocus = (value: string, event:  React.FocusEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onFocus)(value, event);
  }

  onBlur = (value: string, event: React.FocusEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onBlur)(value, event);

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
    this.triggerExtenalEvent(this.props.onChange)(option, null);
    this.onClose();
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
      return this.props.options.filter((option: string | ITypeaheadInputOption) => {
        const value: string = typeof option === "string" ? option : option.value;
        return value.toLowerCase().includes(currentValue);
      });
    }

    return this.props.options;
  }

  renderOptions() {
    return this.getOptions().map((option: string | ITypeaheadInputOption) => {
      const value = typeof option === "string" ? option : option.value;
      return (
        <div
          key={value}
          className={getElementName("typeahead-input", "option")}
          onClick={() => this.onSelectOption(value)}
        >
          {value}
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
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          onKeyPress={this.onKeyPress}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSubmit={this.onSubmit}
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
