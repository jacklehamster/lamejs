export = GrInfo;
declare function GrInfo(): void;
declare class GrInfo {
    xr: Float32Array;
    l3_enc: Int32Array;
    scalefac: Int32Array;
    xrpow_max: number;
    part2_3_length: number;
    big_values: number;
    count1: number;
    global_gain: number;
    scalefac_compress: number;
    block_type: number;
    mixed_block_flag: number;
    table_select: Int32Array;
    subblock_gain: Int32Array;
    region0_count: number;
    region1_count: number;
    preflag: number;
    scalefac_scale: number;
    count1table_select: number;
    part2_length: number;
    sfb_lmax: number;
    sfb_smin: number;
    psy_lmax: number;
    sfbmax: number;
    psymax: number;
    sfbdivide: number;
    width: Int32Array;
    window: Int32Array;
    count1bits: number;
    /**
     * added for LSF
     */
    sfb_partition_table: any;
    slen: Int32Array;
    max_nonzero_coeff: number;
    assign: (other: any) => void;
}
