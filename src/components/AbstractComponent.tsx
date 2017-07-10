import * as React from 'react';

import settings from '../settings';

interface ISpace {
  vertical?: string;
  horizontal?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  default?: string;
  [key: string]: string;
}

interface IModifiers {
  [key: string]: IProp<string | number | boolean>;
}

export type IProp<T> = T | {[key: string]: T};

export default class AbstractComponent<P, S> extends React.Component<P, S> {
  public getModifier(...modifiers: string[]): string {
    return modifiers.filter(m => m !== '').join(settings.getClasses().separator);
  }

  public getBlockClassName(blockName: string): string {
    return `${settings.getPrefix()}${settings.getClasses().block
      .replace('{b}', this.camelCaseToDashCase(blockName))}`;
  }

  public getElementClassName(blockName: string, elementName: string): string {
    return `${settings.getPrefix()}${settings.getClasses().element
      .replace('{b}', this.camelCaseToDashCase(blockName))
      .replace('{e}', this.camelCaseToDashCase(elementName))}`;
  }

  public getBlockModifierClassName(blockName: string, modifierName: string): string {
    return settings.getClasses().blockModifier
      .replace('{b}', this.camelCaseToDashCase(blockName))
      .replace('{m}', this.camelCaseToDashCase(modifierName));
  }

  public getElementModifierClassName(blockName: string, elementName: string, modifierName: string): string {
    return settings.getClasses().elementModifier
      .replace('{b}', this.camelCaseToDashCase(blockName))
      .replace('{e}', this.camelCaseToDashCase(elementName))
      .replace('{m}', this.camelCaseToDashCase(modifierName));
  }

  getComplexModifierValues(modifierValue: string): ISpace {
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

  getBlockModifierWithComplexValueClassName(
      blockName: string, modifierKey: string, modifierValue: string, modifierMedia: string = ''
  ) {
    const modifierValues: ISpace = this.getComplexModifierValues(modifierValue);
    return Object.keys(modifierValues).filter((key: string) => modifierValues[key] !== '0').map((key) => {
      const newModifierKey = key === 'default' ? modifierKey : `${modifierKey}-${key}`;
      return this.getBlockModifierClassName(
        blockName, this.getModifier(newModifierKey, modifierValues[key], modifierMedia)
      );
    }).join(' ');
  }

  getElementModifierWithComplexValueClassName(
      blockName: string, elementName: string, modifierKey: string, modifierValue: string, modifierMedia: string = ''
  ) {
    const modifierValues: ISpace = this.getComplexModifierValues(modifierValue);
    return Object.keys(modifierValues).filter((key) => modifierValues[key] !== '0').map((key) => {
      const newModifierKey = key === 'default' ? modifierKey : `${modifierKey}-${key}`;
      return this.getElementModifierClassName(
        blockName, elementName, this.getModifier(newModifierKey, modifierValues[key], modifierMedia)
      );
    }).join(' ');
  }

  getBlockName(blockName: string, modifiers: IModifiers): string {
    const blockNameClass: string = this.getBlockClassName(blockName);
    const modifiersClass: string = this.getModifiers(blockName, null, modifiers);

    if (modifiersClass !== '') {
      return `${blockNameClass} ${modifiersClass}`
    }

    return blockNameClass;
  }

  getElementName(
      blockName: string, elementName: string, modifiers: IModifiers, isStatic: boolean = false
  ) {
    const elementNameClass: string = this.getElementClassName(blockName, elementName);

    const modifiersClass: string = this.getModifiers(blockName, elementName, modifiers, isStatic);

    if (modifiersClass !== '') {
      return `${elementNameClass} ${modifiersClass}`
    }

    return elementNameClass;
  }

  getModifiers(
      blockName: string, elementName: string, modifiers: IModifiers, isStatic: boolean = false
  ): string {
    if (typeof modifiers !== 'object') {
      return '';
    }

    return Object.keys(modifiers).map((key) => {
      const value: IProp<string | number | boolean> = modifiers[key];
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
        const result: string[] = [];
        Object.keys(value).forEach((valueKey) => {
          const valueValue: string | number | boolean = value[valueKey];
          if (typeof valueValue === 'boolean' && valueValue === false) {
            return;
          }

          let className: string = '';
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

  camelCaseToDashCase(word: string): string {
    return word.replace(/([A-Z])/g, (match) => {
      return `-${match.toLowerCase()}`;
    });
  }
}
