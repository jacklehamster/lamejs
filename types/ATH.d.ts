export = ATH;
/**
 * ATH related stuff, if something new ATH related has to be added, please plug
 * it here into the ATH.
 */
declare function ATH(): void;
declare class ATH {
    /**
     * Method for the auto adjustment.
     */
    useAdjust: number;
    /**
     * factor for tuning the (sample power) point below which adaptive threshold
     * of hearing adjustment occurs
     */
    aaSensitivityP: number;
    /**
     * Lowering based on peak volume, 1 = no lowering.
     */
    adjust: number;
    /**
     * Limit for dynamic ATH adjust.
     */
    adjustLimit: number;
    /**
     * Determined to lower x dB each second.
     */
    decay: number;
    /**
     * Lowest ATH value.
     */
    floor: number;
    /**
     * ATH for sfbs in long blocks.
     */
    l: Float32Array;
    /**
     * ATH for sfbs in short blocks.
     */
    s: Float32Array;
    /**
     * ATH for partitioned sfb21 in long blocks.
     */
    psfb21: Float32Array;
    /**
     * ATH for partitioned sfb12 in short blocks.
     */
    psfb12: Float32Array;
    /**
     * ATH for long block convolution bands.
     */
    cb_l: Float32Array;
    /**
     * ATH for short block convolution bands.
     */
    cb_s: Float32Array;
    /**
     * Equal loudness weights (based on ATH).
     */
    eql_w: Float32Array;
}
