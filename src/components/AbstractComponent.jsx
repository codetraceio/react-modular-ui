import React from 'react';
import settings from '../settings';

export default class AbstractComponent extends React.Component {
  constructor(props, options) {
    super(props);

    this.options = {
      blockName: options.blockName,
      modifiers: options.modifiers
    };
  }

  blockName() {
    const blockName = settings.getClasses().block
      .replace('{b}', this.options.blockName);
    const modifiers = this.modifiers(this.options.blockName, null, this.options.modifiers);

    if (modifiers) {
      return `${blockName} ${modifiers}`
    }

    return blockName;
  }

  elementName(elementName, modifiers) {
    return settings.getClasses().element
      .replace('{b}', this.options.blockName)
      .replace('{e}', elementName);
  }

  modifiers(blockName, elementName, modifiers) {
    const classes = settings.getClasses();
    return Object.keys(modifiers).map((key) => {
      const value = modifiers[key];

      if (typeof value === 'boolean' && value === true) {
        return classes.modifier
          .replace('{b}', blockName)
          .replace('{e}', elementName)
          .replace('{m}', key);
      }

      if (typeof value === 'string' || typeof value === 'number') {
        return classes.modifierWithValue
          .replace('{b}', blockName)
          .replace('{e}', elementName)
          .replace('{mk}', key)
          .replace('{mv}', value.toString());
      }
    }).join(' ');
  }
}
