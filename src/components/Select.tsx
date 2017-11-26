import React = require('react');

import clickOutsideService from '../services/clickOutsideService';
import dropDownService from '../services/dropDownService';
import settingService from '../services/settingService';
import utilService from '../services/utilService';

import { IModifiers, getBlockName, getElementName } from '../services/componentService';
import Icon from './Icon';
import Portal from './Portal';

export interface ISelectProps {
  placeholder?: string;
  label?: string;
  size?: string | number;
  view?: string;
  disabled?: boolean;
  opened?: boolean;
  fixed?: boolean;
  portal?: JSX.Element[];
  options?: ISelectOption[];
  value?: string;

  onChangeOpened?: (opened: boolean) => void;
  onChange?: (value: string, option: ISelectOption) => void;
}

export interface ISelectState {
  opened: boolean;
  scroll: boolean;
}

export interface ISelectOption {
  title: string;
  value: string;
}

export default class Select extends React.Component<ISelectProps, ISelectState> {
  private dropDownElement: HTMLElement;
  private selectElement: HTMLElement;

  private onClickHandler: () => void;
  private onUpdateDropDownHandler: (event: Event) => void;
  private onWindowScrollHandler: () => void;
  private onUpdateSelectElementHandler: (element: HTMLElement) => void;
  private onUpdateDropDownElementHandler: (element: HTMLElement) => void;
  private onCloseHandler: () => void;

  constructor(props: ISelectProps) {
    super(props);

    this.state = {
      opened: false,
      scroll: false,
    };

    this.onClickHandler = this.onClick.bind(this);
    this.onUpdateDropDownHandler = this.onUpdateDropDown.bind(this);
    this.onWindowScrollHandler = this.onWindowScroll.bind(this);
    this.onCloseHandler = this.onClose.bind(this);
    this.onUpdateDropDownElementHandler = this.onUpdateDropDownElement.bind(this);
    this.onUpdateSelectElementHandler = this.onUpdateSelectElement.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScrollHandler, true);
    window.addEventListener('resize', this.onUpdateDropDownHandler, true);
    clickOutsideService.on(this.onCloseHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScrollHandler, true);
    window.removeEventListener('resize', this.onUpdateDropDownHandler, true);
    clickOutsideService.off(this.onCloseHandler);
  }

  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      view: this.props.view,
      disabled: this.props.disabled,
      selected: this.isOpened(),
    };
  }

  getOptionModifierObject(value: string): IModifiers {
    return {
      selected: value === this.props.value,
    };
  }

  getOptions(): ISelectOption[] {
    return this.props.options || [];
  }

  getTitle() {
    if (this.props.value) {
      const option: ISelectOption = this.props.options.find((option: ISelectOption) => {
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

  onClose() {
    this.onSetOpened(false);
  }

  onUpdateDropDownElement(element: HTMLElement) {
    this.dropDownElement = element;

    this.onUpdateDropDown();
  }

  onUpdateSelectElement(element: HTMLElement) {
    this.selectElement = element;
  }

  onClick() {
    this.onSetOpened(!this.isOpened());
  }

  onSetOpened(opened: boolean) {
    this.setState({
      opened: opened,
      scroll: opened
    });

    if (this.props.onChangeOpened) {
      this.props.onChangeOpened(opened);
    }
  }

  onUpdateDropDown() {
    if (!this.dropDownElement) {
      return;
    }
    dropDownService.updateDropDown(this.dropDownElement, this.selectElement, this.state.scroll, this.props.fixed);

    if (this.state.scroll) {
      this.setState({
        scroll: false
      });
    }
  }

  onWindowScroll() {
    if (this.isOpened()) {
      const selectElement = this.selectElement.getBoundingClientRect();

      if (selectElement.bottom < 32 || selectElement.top > window.innerHeight) {
        this.onClose();
      } else {
        this.onUpdateDropDown();
      }
    }
  }

  onChange(value: string, option: ISelectOption) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value, option);
    }

    this.onClose();
  }

  renderLabel() {
    if (!this.props.label) {
      return null;
    }

    return (
      <div className={getElementName('select', 'label')}>
        {this.props.label}
      </div>
    );
  }

  renderOptions() {
    return this.getOptions().map((option: ISelectOption) => {
      return (
        <div
          key={option.value}
          className={getElementName(
            'select', 'option', this.getOptionModifierObject(option.value)
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
    const portalKey: string = settingService.isBackend() ? utilService.generateKey() : '';

    return (
      <div
        className={getBlockName('select', this.getModifierObject())}
      >
        {this.renderLabel()}
        <div
          className={getElementName('select', 'box')}
          onClick={this.onClickHandler}
          data-inside={this.isOpened()}
          ref={this.onUpdateSelectElementHandler}
        >
          <div className={getElementName('select', 'value')}>
            {this.getTitle()}
          </div>
          <div className={getElementName('select', 'icon')}>
            <Icon width="12" rotate={this.isOpened() ? 180 : 0} name="drop-down" />
          </div>
        </div>
        {this.isOpened() ? (
          <Portal
            portal={this.props.portal}
            portalKey={portalKey}
            onUpdate={() => this.onUpdateDropDown()}
          >
            <div
              className={getElementName('select', 'drop-down')}
              ref={this.onUpdateDropDownElementHandler}
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
