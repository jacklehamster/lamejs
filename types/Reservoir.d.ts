export = Reservoir;
declare function Reservoir(): void;
declare class Reservoir {
    setModules: (_bs: any) => void;
    ResvFrameBegin: (gfp: any, mean_bits: any) => number;
    /**
     * returns targ_bits: target number of bits to use for 1 granule<BR>
     * extra_bits: amount extra available from reservoir<BR>
     * Mark Taylor 4/99
     */
    ResvMaxBits: (gfp: any, mean_bits: any, targ_bits: any, cbr: any) => any;
    /**
     * Called after a granule's bit allocation. Readjusts the size of the
     * reservoir to reflect the granule's usage.
     */
    ResvAdjust: (gfc: any, gi: any) => void;
    /**
     * Called after all granules in a frame have been allocated. Makes sure that
     * the reservoir size is within limits, possibly by adding stuffing bits.
     */
    ResvFrameEnd: (gfc: any, mean_bits: any) => void;
}
