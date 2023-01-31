export function getFilename(n: string): string
export function getDirname(n: string): string
type FnP = (...arg: [string, ...any[]]) => any
type MixedFnP<P extends FnP> = { [I in keyof P]: P[I] } & ((n: string) => ReturnType<P>)
export function fnFilename<P extends FnP>(p: P): MixedFnP<P>
export function fnDirname<P extends FnP>(p: P): MixedFnP<P>
