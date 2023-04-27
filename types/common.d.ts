export namespace System {
    function arraycopy(src: any, srcPos: any, dest: any, destPos: any, length: any): void;
    namespace out {
        function println(message: any): void;
        function printf(...args: any[]): void;
    }
}
export function VbrMode(ordinal: any): void;
export class VbrMode {
    constructor(ordinal: any);
    ordinal: any;
}
export namespace VbrMode {
    export const vbr_off: VbrMode;
    export const vbr_mt: VbrMode;
    export const vbr_rh: VbrMode;
    export const vbr_abr: VbrMode;
    export const vbr_mtrh: VbrMode;
    import vbr_default = vbr_mtrh;
    export { vbr_default };
}
export namespace Float {
    const MAX_VALUE: number;
}
export function ShortBlock(ordinal: any): void;
export class ShortBlock {
    constructor(ordinal: any);
    ordinal: any;
}
export namespace ShortBlock {
    const short_block_allowed: ShortBlock;
    const short_block_coupled: ShortBlock;
    const short_block_dispensed: ShortBlock;
    const short_block_forced: ShortBlock;
}
export namespace Util {
    const SQRT2: number;
    function FAST_LOG10(x: any): number;
    function FAST_LOG10_X(x: any, y: any): number;
}
export namespace Arrays {
    function fill(a: any, fromIndex: any, toIndex: any, val: any, ...args: any[]): void;
}
export function new_array_n(args: any): any;
export function new_byte(count: any): Int8Array;
export function new_double(count: any): Float64Array;
export function new_float(count: any): Float32Array;
export function new_float_n(args: any): any;
export function new_int(count: any): Int32Array;
export function new_int_n(args: any): any;
export function new_short(count: any): Int16Array;
export function new_short_n(args: any): any;
export function assert(x: any): void;
