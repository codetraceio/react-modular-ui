import AbstractComponent from './AbstractComponent';

export default class Button extends AbstractComponent {
  getModifiers() {
    return {
      size: this.props.size,
      view: this.props.view,
      type: this.props.type,
      selected: this.props.selected,
      disabled: this.props.disabled
    };
  }

  render() {
    return (
      <div className={this.blockName('button', this.getModifiers())}>
        {this.props.children}
      </div>
    )
  }
}
