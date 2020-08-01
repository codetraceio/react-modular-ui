import React = require("react");

import Input from "./Input";
import Portal from "./Portal";
import settingService from "../services/settingService";
import { generateKey } from "../services/utilService";
import { getElementName, getBlockName } from "../services/componentService";
import { updateDropDown } from "../services/dropDownService";
import clickOutsideService from "../services/clickOutsideService";

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
  title: string;
  value: string;
}

export interface ITypeaheadInputProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  title?: string;
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
  options?: (string | ITypeaheadInputOption)[];
  optionMap?: Record<string, string>
}

function getOptionMap(options: (string | ITypeaheadInputOption)[]) {
  const optionMap: Record<string, string> = {};
  options.forEach((option) => {
    const title = typeof option === "string" ? option : option.title;
    const value = typeof option === "string" ? option : option.value;
    optionMap[title] = value;
  });
  return optionMap;
}

export default class TypeaheadInput extends React.Component<ITypeaheadInputProps, ITypeaheadInputState> {
  private dropDownElement: HTMLElement;
  private visibleElement: HTMLElement;

  state: ITypeaheadInputState = {
    opened: false,
    scroll: false,
    options: [],
    optionMap: {},
  };

  constructor(props: ITypeaheadInputProps) {
    super(props);
  
    this.state.optionMap = getOptionMap(props.options);
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

  static getDerivedStateFromProps(props: ITypeaheadInputProps, state: ITypeaheadInputState) {
    if (state.options === props.options) {
      return null;
    }

    return {
      options: props.options,
      optionMap: getOptionMap(props.options),
    };
  }

  isOptionObject() {
    return this.props.options && typeof this.props.options[0] === "object";
  }

  isValid(title: string): boolean {
    return typeof this.state.optionMap[title] === "string";
  }

  isOpened(): boolean {
    return this.props.opened || this.state.opened;
  }

  triggerExtenalEvent(callback: TypeaheadInputCallback<InputEvent>) {
    return (title: string, event: InputEvent) => {
      if (typeof callback === "function") {
        const value = this.state.optionMap[title];
        const option: ITypeaheadInputOption | string = this.isOptionObject() ? {
          title,
          value,
        } : title;
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

  onChange = (title: string, event: React.ChangeEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onChange)(title, event);

    this.onOpen();
  };

  onKeyDown = (title: string, event:  React.KeyboardEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onKeyDown)(title, event);
  }

  onKeyUp = (title: string, event:  React.KeyboardEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onKeyUp)(title, event);
  }

  onKeyPress = (title: string, event:  React.KeyboardEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onKeyPress)(title, event);
  }

  onSubmit = (title: string, event:  React.KeyboardEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onSubmit)(title, event);
  }

  onFocus = (title: string, event:  React.FocusEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onFocus)(title, event);
  }

  onBlur = (title: string, event: React.FocusEvent<HTMLInputElement>) => {
    this.triggerExtenalEvent(this.props.onBlur)(title, event);

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
    this.triggerExtenalEvent(this.props.onSubmit)(option, null);
  };

  onClick = () => {
    if (!this.isValid(this.props.title)) {
      this.onOpen();
    }
  }

  getOptions() {
    if (!this.props.options || this.props.hideInitialOptions && this.props.title === "") {
      return [];
    }

    if (this.props.matchingOptionsOnly) {
      const currentTitle = this.props.title.toLowerCase();
      return this.props.options.filter((option: string | ITypeaheadInputOption) => {
        const title: string = typeof option === "string" ? option : option.title;
        return title.toLowerCase().includes(currentTitle);
      });
    }

    return this.props.options;
  }

  renderOptions() {
    return this.getOptions().map((option: string | ITypeaheadInputOption) => {
      const title = typeof option === "string" ? option : option.title;
      return (
        <div
          key={title}
          className={getElementName("typeahead-input", "option")}
          onClick={() => this.onSelectOption(title)}
        >
          {title}
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
          color={this.props.color || this.isValid(this.props.title) && "success"}
          disabled={this.props.disabled}
          name={this.props.name}
          label={this.props.label}
          value={this.props.title}
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
