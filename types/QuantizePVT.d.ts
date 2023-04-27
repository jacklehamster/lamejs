export = QuantizePVT;
declare function QuantizePVT(): void;
declare class QuantizePVT {
    setModules: (_tk: any, _rv: any, _psy: any) => void;
    IPOW20: (x: any) => number;
    /**
     * The following table is used to implement the scalefactor partitioning for
     * MPEG2 as described in section 2.4.3.2 of the IS. The indexing corresponds
     * to the way the tables are presented in the IS:
     *
     * [table_number][row_in_table][column of nr_of_sfb]
     */
    nr_of_sfb_block: number[][][];
    pretab: number[];
    /**
     * Here are MPEG1 Table B.8 and MPEG2 Table B.1 -- Layer III scalefactor
     * bands. <BR>
     * Index into this using a method such as:<BR>
     * idx = fr_ps.header.sampling_frequency + (fr_ps.header.version * 3)
     */
    sfBandIndex: ScaleFac[];
    adj43: Float32Array;
    /**
     * initialization for iteration_loop
     */
    iteration_init: (gfp: any) => void;
    /**
     * allocate bits among 2 channels based on PE<BR>
     * mt 6/99<BR>
     * bugfixes rh 8/01: often allocated more than the allowed 4095 bits
     */
    on_pe: (gfp: any, pe: any, targ_bits: any, mean_bits: any, gr: any, cbr: any) => any;
    reduce_side: (targ_bits: any, ms_ener_ratio: any, mean_bits: any, max_bits: any) => void;
    /**
     *  Robert Hegemann 2001-04-27:
     *  this adjusts the ATH, keeping the original noise floor
     *  affects the higher frequencies more than the lower ones
     */
    athAdjust: (a: any, x: any, athFloor: any) => number;
    /**
     * Calculate the allowed distortion for each scalefactor band, as determined
     * by the psychoacoustic model. xmin(sb) = ratio(sb) * en(sb) / bw(sb)
     *
     * returns number of sfb's with energy > ATH
     */
    calc_xmin: (gfp: any, ratio: any, cod_info: any, pxmin: any) => number;
    calc_noise_core: (cod_info: any, startline: any, l: any, step: any) => number;
    /**
     * <PRE>
     * -oo dB  =>  -1.00
     * - 6 dB  =>  -0.97
     * - 3 dB  =>  -0.80
     * - 2 dB  =>  -0.64
     * - 1 dB  =>  -0.38
     *   0 dB  =>   0.00
     * + 1 dB  =>  +0.49
     * + 2 dB  =>  +1.06
     * + 3 dB  =>  +1.68
     * + 6 dB  =>  +3.69
     * +10 dB  =>  +6.45
     * </PRE>
     */
    calc_noise: (cod_info: any, l3_xmin: any, distort: any, res: any, prev_noise: any) => number;
    /**
     * updates plotting data
     *
     * Mark Taylor 2000-??-??
     *
     * Robert Hegemann: moved noise/distortion calc into it
     */
    set_pinfo: (gfp: any, cod_info: any, ratio: any, gr: any, ch: any) => void;
}
declare namespace QuantizePVT {
    const Q_MAX: number;
    const Q_MAX2: number;
    const LARGE_BITS: number;
    const IXMAX_VAL: number;
}
import ScaleFac = require("./ScaleFac.js");
