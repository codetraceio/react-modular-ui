import React from 'react';

import settings from '../settings';

export default class AbstractComponent extends React.Component {
  getValue(key) {
    if (this.modifiers && this.modifiers[key]) {
      return this.modifiers[key];
    }
    return this.props[key];
  }

  getModifier(...modifiers) {
    return modifiers.filter(m => m !== '').join(settings.getClasses().separator);
  }

  getBlockClassName(blockName) {
    return `${settings.getPrefix()}${settings.getClasses().block
      .replace('{b}', this.camelCaseToDashCase(blockName))}`;
  }

  getElementClassName(blockName, elementName) {
    return `${settings.getPrefix()}${settings.getClasses().element
      .replace('{b}', this.camelCaseToDashCase(blockName))
      .replace('{e}', this.camelCaseToDashCase(elementName))}`;
  }

  getBlockModifierClassName(blockName, modifierName) {
    return settings.getClasses().blockModifier
      .replace('{b}', this.camelCaseToDashCase(blockName))
      .replace('{m}', this.camelCaseToDashCase(modifierName));
  }

  getElementModifierClassName(blockName, elementName, modifierName) {
    return settings.getClasses().elementModifier
      .replace('{b}', this.camelCaseToDashCase(blockName))
      .replace('{e}', this.camelCaseToDashCase(elementName))
      .replace('{m}', this.camelCaseToDashCase(modifierName));
  }

  getComplexModifierValues(modifierValue) {
    const modifierValues = modifierValue.split(' ');
    if (modifierValues.length === 1) {
      return {
        default: modifierValue
      };
    }
    if (modifierValues.length === 2) {
      return {
        vertical: modifierValues[0],
        horizontal: modifierValues[1]
      };
    }
    if (modifierValues.length === 3) {
      return {
        top: modifierValues[0],
        horizontal: modifierValues[1],
        bottom: modifierValues[2]
      };
    }
    if (modifierValues.length === 4) {
      return {
        top: modifierValues[0],
        right: modifierValues[1],
        bottom: modifierValues[2],
        left: modifierValues[3]
      };
    }
  }

  getBlockModifierWithComplexValueClassName(blockName, modifierKey, modifierValue, modifierMedia = '') {
    const modifierValues = this.getComplexModifierValues(modifierValue);
    return Object.keys(modifierValues).filter((key) => modifierValues[key] !== '0').map((key) => {
      const newModifierKey = key === 'default' ? modifierKey : `${modifierKey}-${key}`;
      return this.getBlockModifierClassName(
        blockName, this.getModifier(newModifierKey, modifierValues[key], modifierMedia)
      );
    }).join(' ');
  }

  getElementModifierWithComplexValueClassName(blockName, elementName, modifierKey, modifierValue, modifierMedia = '') {
    const modifierValues = this.getComplexModifierValues(modifierValue);
    return Object.keys(modifierValues).filter((key) => modifierValues[key] !== '0').map((key) => {
      const newModifierKey = key === 'default' ? modifierKey : `${modifierKey}-${key}`;
      return this.getElementModifierClassName(
        blockName, elementName, this.getModifier(newModifierKey, modifierValues[key], modifierMedia)
      );
    }).join(' ');
  }

  getBlockName(blockName, modifiers) {
    const blockNameClass = this.getBlockClassName(blockName);
    const modifiersClass = this.getModifiers(blockName, null, modifiers);

    if (modifiersClass !== '') {
      return `${blockNameClass} ${modifiersClass}`
    }

    return blockNameClass;
  }

  getElementName(blockName, elementName, modifiers, isStatic) {
    const elementNameClass = this.getElementClassName(blockName, elementName);

    const modifiersClass = modifiers instanceof Array ? this.getModifiers(blockName, elementName, modifiers, isStatic) : '';

    if (modifiersClass !== '') {
      return `${elementNameClass} ${modifiersClass}`
    }

    return elementNameClass;
  }

  getModifiers(blockName, elementName, modifiers, isStatic) {
    return modifiers.map((key) => {
      const value = this.getValue(key);
      if ((typeof value === 'boolean' && value === true) || isStatic) {
        if (elementName) {
          return this.getElementModifierClassName(blockName, elementName, key);
        }

        return this.getBlockModifierClassName(blockName, key);
      }

      if (typeof value === 'string' || typeof value === 'number') {
        if (elementName) {
          return this.getElementModifierWithComplexValueClassName(blockName, elementName, key, value.toString());
        }

        return this.getBlockModifierWithComplexValueClassName(blockName, key, value.toString());
      }

      if (typeof value === 'object') {
        const result = [];
        Object.keys(value).forEach((valueKey) => {
          const valueValue = value[valueKey];
          if (typeof valueValue === 'boolean' && valueValue === false) {
            return;
          }

          let className = '';
          if (typeof valueValue === 'string' || typeof valueValue === 'number') {
            className = valueValue.toString()
          }

          const media = valueKey;

          if (elementName) {
            if (className !== '') {
              result.push(
                this.getElementModifierWithComplexValueClassName(blockName, elementName, key, className, media)
              );
            } else {
              result.push(
                this.getElementModifierClassName(blockName, elementName, this.getModifier(key, media))
              );
            }
          } else {
            if (className !== '') {
              result.push(
                this.getBlockModifierWithComplexValueClassName(blockName, key, className, media)
              );
            } else {
              result.push(
                this.getBlockModifierClassName(blockName, this.getModifier(key, media))
              );
            }
          }
        });
        return result.join(' ');
      }

      return '';
    }).filter(modifier => modifier !== '').join(' ');
  }

  camelCaseToDashCase(word) {
    return word.replace(/([A-Z])/g, (match) => {
      return `-${match.toLowerCase()}`;
    });
  }
}
