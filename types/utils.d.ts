import { BuilderType } from './builder';
/** Format a value that is valid for query builder type */
export declare const formatValue: (builderType: BuilderType, value: any) => any;
/** Map a variable to an AWS type */
export declare const getType: (variable: any) => "BOOL" | "S" | "N" | "B";
/** Simple way to check if the object is empty */
export declare const isEmpty: (object: object) => boolean;
/** Create a chainable function out of a void function */
export declare const chainable: <T extends any[], U>(fn: (...args: T) => void, weeSomething: U) => (...args: T) => U;
