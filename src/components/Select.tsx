import React = require('react');
import AbstractComponent, {IModifiers} from './AbstractComponent';
import Icon from './Icon';

export interface ISelectProps {
  placeholder?: string;
  size?: string | number;
  view?: string;
  disabled?: boolean;
}

export default class Select extends AbstractComponent<ISelectProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      view: this.props.view,
      disabled: this.props.disabled,
    };
  }

  render() {
    return (
      <div className={this.getBlockName('select', this.getModifierObject())}>
        <div>
          {this.props.placeholder}
        </div>
        <Icon name="" />
      </div>
    );
  }
}
