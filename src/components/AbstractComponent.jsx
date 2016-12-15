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

  camelCaseToDashCase(word) {
    return word.replace(/([A-Z])/g, (match) => {
      return `-${match.toLowerCase()}`;
    });
  }

  blockName(blockName, modifiers) {
    const blockNameClass = `${settings.getPrefix()}${settings.getClasses().block
      .replace('{b}', this.camelCaseToDashCase(blockName))}`;
    const modifiersClass = this.modifiers(blockName, null, modifiers);

    if (modifiers) {
      return `${blockNameClass} ${modifiersClass}`
    }

    return blockNameClass;
  }

  elementName(elementName, modifiers) {
    const elementNameClass = settings.getClasses().element
      .replace('{b}', this.camelCaseToDashCase(this.options.blockName))
      .replace('{e}', this.camelCaseToDashCase(elementName));

    const modifiersClass = this.modifiers(null, elementName, modifiers);

    if (modifiers) {
      return `${elementNameClass} ${modifiersClass}`
    }

    return elementNameClass;
  }

  modifiers(blockName, elementName, modifiers) {
    const classes = settings.getClasses();
    return modifiers.map((key) => {
      const value = this.props[key];
      if (typeof value === 'boolean' && value === true) {
        if (elementName) {
          return classes.elementModifier
            .replace('{b}', this.camelCaseToDashCase(blockName))
            .replace('{e}', this.camelCaseToDashCase(elementName))
            .replace('{m}', this.camelCaseToDashCase(key));
        }

        return classes.blockModifier
          .replace('{b}', this.camelCaseToDashCase(blockName))
          .replace('{m}', this.camelCaseToDashCase(key));
      }

      if (typeof value === 'string' || typeof value === 'number') {
        if (elementName) {
          return classes.elementModifierWithValue
            .replace('{b}', this.camelCaseToDashCase(blockName))
            .replace('{e}', this.camelCaseToDashCase(elementName))
            .replace('{mk}', this.camelCaseToDashCase(key))
            .replace('{mv}', this.camelCaseToDashCase(value.toString()));
        }

        return classes.blockModifierWithValue
          .replace('{b}', this.camelCaseToDashCase(blockName))
          .replace('{mk}', this.camelCaseToDashCase(key))
          .replace('{mv}', this.camelCaseToDashCase(value.toString()));
      }

      if (typeof value === 'object') {
        const result = [];
        Object.keys(value).forEach((valueKey) => {
          const valueValue = value[valueKey];
          let className;
          if (valueKey === 'default') {
            className = valueValue.toString();
          } else {
            className = `${valueValue}-${valueKey}`;
          }
          if (elementName) {
            result.push(
              classes.elementModifierWithValue
                .replace('{b}', this.camelCaseToDashCase(blockName))
                .replace('{e}', this.camelCaseToDashCase(elementName))
                .replace('{mk}', this.camelCaseToDashCase(key))
                .replace('{mv}', this.camelCaseToDashCase(className))
            );
          } else {
            result.push(
              classes.blockModifierWithValue
                .replace('{b}', this.camelCaseToDashCase(blockName))
                .replace('{mk}', this.camelCaseToDashCase(key))
                .replace('{mv}', this.camelCaseToDashCase(className))
            );
          }
        });
        return result.join(' ');
      }

      return '';
    }).join(' ');
  }
}
