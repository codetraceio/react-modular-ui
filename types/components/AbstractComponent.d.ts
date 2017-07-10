/// <reference types="react" />
import * as React from 'react';
export interface ISpace {
    vertical?: string;
    horizontal?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    'default'?: string;
    [key: string]: string;
}
export interface IModifiers {
    [key: string]: IProp<string | number | boolean>;
}
export declare type IProp<T> = T | {
    [key: string]: T;
};
export default class AbstractComponent<P, S> extends React.Component<P, S> {
    getModifier(...modifiers: string[]): string;
    getBlockClassName(blockName: string): string;
    getElementClassName(blockName: string, elementName: string): string;
    getBlockModifierClassName(blockName: string, modifierName: string): string;
    getElementModifierClassName(blockName: string, elementName: string, modifierName: string): string;
    getComplexModifierValues(modifierValue: string): ISpace;
    getBlockModifierWithComplexValueClassName(blockName: string, modifierKey: string, modifierValue: string, modifierMedia?: string): string;
    getElementModifierWithComplexValueClassName(blockName: string, elementName: string, modifierKey: string, modifierValue: string, modifierMedia?: string): string;
    getBlockName(blockName: string, modifiers?: IModifiers): string;
    getElementName(blockName: string, elementName: string, modifiers?: IModifiers, isStatic?: boolean): string;
    getModifiers(blockName: string, elementName: string, modifiers: IModifiers, isStatic?: boolean): string;
    camelCaseToDashCase(word: string): string;
}
