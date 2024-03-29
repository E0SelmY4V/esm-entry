/**
 * ESM Entry
 * @version 1.0.4
 * @license MIT
 * @link https://github.com/E0SelmY4V/esm-entry
 */
declare module '.';
export function getFilename(n: string): string;
export function getDirname(n: string): string;
export function safely<P, R>(fn: (arg: P) => R, arg: P): R | P;
export type FnP = (...arg: [string, ...any[]]) => any;
export type MixedFnP<P extends FnP> = { [I in keyof P]: P[I] } & ((n: string) => ReturnType<P>);
export function fnFilename<P extends FnP>(p: P): MixedFnP<P>;
export function fnDirname<P extends FnP>(p: P): MixedFnP<P>;
import * as A from '.';
export default A;
