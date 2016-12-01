import React from 'react';
import settings from '../settings';

export default class AbstractComponent extends React.Component {
  constructor(props) {
    super(props);

    this.bindKeys(this.__proto__);
  }

  bindKeys(object) {
    Object.keys(object).forEach((key) => {
      let method = this[key];

      if (typeof method === 'function') {
        this[key] = method.bind(this);
      }

      if (object instanceof AbstractComponent) {
        this.bindKeys(object.__proto__);
      }
    });
  }

  blockName(blockName, modifiers) {
    const blockNameClass = `${settings.getPrefix()}${settings.getClasses().block.replace('{b}', blockName)}`;
    const modifiersClass = this.modifiers(blockName, null, modifiers);

    if (modifiers) {
      return `${blockNameClass} ${modifiersClass}`
    }

    return blockNameClass;
  }

  elementName(elementName, modifiers) {
    const elementNameClass = settings.getClasses().element
      .replace('{b}', this.options.blockName)
      .replace('{e}', elementName);

    const modifiersClass = this.modifiers(null, elementName, modifiers);

    if (modifiers) {
      return `${elementNameClass} ${modifiersClass}`
    }

    return elementNameClass;
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
      return '';
    }).join(' ');
  }
}
