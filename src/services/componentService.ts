import settings from "../services/settingService";

export interface Space {
  vertical?: string;
  horizontal?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  "default"?: string;
  [key: string]: string;
}

export interface Modifiers {
  [key: string]: Prop<string | number | boolean>;
}

export type Prop<T> = T | {[key: string]: T};

export function getModifier(...modifiers: string[]): string {
  return modifiers.filter((m) => m !== "").join(settings.getClasses().separator);
}

export function getBlockClassName(blockName: string): string {
  return `${settings.getPrefix()}${settings.getClasses().block
    .replace("{b}", camelCaseToDashCase(blockName))}`;
}

export function getElementClassName(blockName: string, elementName: string): string {
  return `${settings.getPrefix()}${settings.getClasses().element
    .replace("{b}", camelCaseToDashCase(blockName))
    .replace("{e}", camelCaseToDashCase(elementName))}`;
}

export function getModifierClassName(prefix: string, modifierName: string): string {
  return settings.getClasses().modifier
    .replace("{p}", camelCaseToDashCase(prefix))
    .replace("{m}", camelCaseToDashCase(modifierName));
}

export function getComplexModifierValues(modifierValue: string): Space {
  const modifierValues = modifierValue.split(" ");
  if (modifierValues.length === 1) {
    return {
      default: modifierValue,
    };
  }
  if (modifierValues.length === 2) {
    return {
      vertical: modifierValues[0],
      horizontal: modifierValues[1],
    };
  }
  if (modifierValues.length === 3) {
    return {
      top: modifierValues[0],
      horizontal: modifierValues[1],
      bottom: modifierValues[2],
    };
  }
  if (modifierValues.length === 4) {
    return {
      top: modifierValues[0],
      right: modifierValues[1],
      bottom: modifierValues[2],
      left: modifierValues[3],
    };
  }
}

export function getBlockModifierWithComplexValueClassName(
  blockName: string,
  modifierKey: string,
  modifierValue: string,
  modifierMedia: string = "",
) {
  const modifierValues: Space = getComplexModifierValues(modifierValue);
  return Object.keys(modifierValues)
  .filter((key: string) => modifierValues[key] !== "0")
  .map((key) => {
    const newModifierKey = key === "default" ? modifierKey : `${modifierKey}-${key}`;
    return getModifierClassName(
      getBlockName(blockName), getModifier(newModifierKey, modifierValues[key], modifierMedia),
    );
  }).join(" ");
}

export function getElementModifierWithComplexValueClassName(
  blockName: string,
  elementName: string,
  modifierKey: string,
  modifierValue: string,
  modifierMedia: string = "",
) {
  const modifierValues: Space = getComplexModifierValues(modifierValue);
  return Object.keys(modifierValues)
  .filter((key) => modifierValues[key] !== "0")
  .map((key) => {
    const newModifierKey = key === "default" ? modifierKey : `${modifierKey}-${key}`;
    return getModifierClassName(
      getElementClassName(blockName, elementName), getModifier(newModifierKey, modifierValues[key], modifierMedia),
    );
  }).join(" ");
}

export function getBlockName(blockName: string, modifiers: Modifiers = {}): string {
  const blockNameClass: string = getBlockClassName(blockName);
  const modifiersClass: string = getModifiers(blockName, null, modifiers);

  if (modifiersClass !== "") {
    return `${blockNameClass} ${modifiersClass}`;
  }

  return blockNameClass;
}

export function getElementName(
  blockName: string,
  elementName: string,
  modifiers: Modifiers = {},
  isStatic: boolean = false,
) {
  const elementNameClass: string = getElementClassName(blockName, elementName);

  const modifiersClass: string = getModifiers(blockName, elementName, modifiers, isStatic);

  if (modifiersClass !== "") {
    return `${elementNameClass} ${modifiersClass}`;
  }

  return elementNameClass;
}

export function getModifiers(
  blockName: string,
  elementName: string,
  modifiers: Modifiers,
  isStatic: boolean = false,
): string {
  if (typeof modifiers !== "object") {
    return "";
  }

  return Object.keys(modifiers).map((key) => {
    const value: Prop<string | number | boolean> = modifiers[key];
    if ((typeof value === "boolean" && value === true) || isStatic) {
      if (elementName) {
        return getModifierClassName(getElementClassName(blockName, elementName), key);
      }

      return getModifierClassName(getBlockName(blockName), key);
    }

    if (typeof value === "string" || typeof value === "number") {
      if (elementName) {
        return getElementModifierWithComplexValueClassName(blockName, elementName, key, value.toString());
      }

      return getBlockModifierWithComplexValueClassName(blockName, key, value.toString());
    }

    if (typeof value === "object") {
      const result: string[] = [];
      Object.keys(value).forEach((valueKey) => {
        const valueValue: string | number | boolean = value[valueKey];
        if (typeof valueValue === "boolean" && valueValue === false) {
          return;
        }

        let className: string = "";
        if (typeof valueValue === "string" || typeof valueValue === "number") {
          className = valueValue.toString();
        }

        const media = valueKey;

        if (elementName) {
          if (className !== "") {
            result.push(
              getElementModifierWithComplexValueClassName(blockName, elementName, key, className, media),
            );
          } else {
            result.push(
              getModifierClassName(getElementClassName(blockName, elementName), getModifier(key, media)),
            );
          }
        } else {
          if (className !== "") {
            result.push(
              getBlockModifierWithComplexValueClassName(blockName, key, className, media),
            );
          } else {
            result.push(
              getModifierClassName(getBlockClassName(blockName), getModifier(key, media)),
            );
          }
        }
      });
      return result.join(" ");
    }

    return "";
  }).filter((modifier) => modifier !== "").join(" ");
}

export function camelCaseToDashCase(word: string): string {
  return word.replace(/([A-Z])/g, (match) => {
    return `-${match.toLowerCase()}`;
  });
}

export default {
  getBlockName,
  getElementName,
};
