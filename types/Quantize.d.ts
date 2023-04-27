export = Quantize;
declare class Quantize {
    setModules(_bs: any, _rv: any, _qupvt: any, _tk: any): void;
    bs: any;
    rv: any;
    qupvt: any;
    tk: any;
    vbr: VBRQuantize;
    init_xrpow: (gfc: any, cod_info: any, xrpow: any) => boolean;
    init_outer_loop: (gfc: any, cod_info: any) => void;
    trancate_smallspectrums: (gfc: any, gi: any, l3_xmin: any, work: any) => void;
    /**
     * <PRE>
     *  Function: The outer iteration loop controls the masking conditions
     *  of all scalefactorbands. It computes the best scalefac and
     *  global gain. This module calls the inner iteration loop
     *
     *  mt 5/99 completely rewritten to allow for bit reservoir control,
     *  mid/side channels with L/R or mid/side masking thresholds,
     *  and chooses best quantization instead of last quantization when
     *  no distortion free quantization can be found.
     *
     *  added VBR support mt 5/99
     *
     *  some code shuffle rh 9/00
     * </PRE>
     *
     * @param l3_xmin
     *            allowed distortion
     * @param xrpow
     *            coloured magnitudes of spectral
     * @param targ_bits
     *            maximum allowed bits
     */
    outer_loop: (gfp: any, cod_info: any, l3_xmin: any, xrpow: any, ch: any, targ_bits: any) => number;
    /**
     * Robert Hegemann 2000-09-06
     *
     * update reservoir status after FINAL quantization/bitrate
     */
    iteration_finish_one: (gfc: any, gr: any, ch: any) => void;
    /**
     *
     * 2000-09-04 Robert Hegemann
     *
     * @param l3_xmin
     *            allowed distortion of the scalefactor
     * @param xrpow
     *            coloured magnitudes of spectral values
     */
    VBR_encode_granule: (gfp: any, cod_info: any, l3_xmin: any, xrpow: any, ch: any, min_bits: any, max_bits: any) => void;
    /**
     * Robert Hegemann 2000-09-05
     *
     * calculates * how many bits are available for analog silent granules * how
     * many bits to use for the lowest allowed bitrate * how many bits each
     * bitrate would provide
     */
    get_framebits: (gfp: any, frameBits: any) => void;
    /**
     * <PRE>
     *  2000-09-04 Robert Hegemann
     *
     *  * converts LR to MS coding when necessary
     *  * calculates allowed/adjusted quantization noise amounts
     *  * detects analog silent frames
     *
     *  some remarks:
     *  - lower masking depending on Quality setting
     *  - quality control together with adjusted ATH MDCT scaling
     *    on lower quality setting allocate more noise from
     *    ATH masking, and on higher quality setting allocate
     *    less noise from ATH masking.
     *  - experiments show that going more than 2dB over GPSYCHO's
     *    limits ends up in very annoying artefacts
     * </PRE>
     */
    VBR_old_prepare: (gfp: any, pe: any, ms_ener_ratio: any, ratio: any, l3_xmin: any, frameBits: any, min_bits: any, max_bits: any, bands: any) => number;
    bitpressure_strategy: (gfc: any, l3_xmin: any, min_bits: any, max_bits: any) => void;
    VBR_new_prepare: (gfp: any, pe: any, ratio: any, l3_xmin: any, frameBits: any, max_bits: any) => number;
    /**
     * calculates target bits for ABR encoding
     *
     * mt 2000/05/31
     */
    calc_target_bits: (gfp: any, pe: any, ms_ener_ratio: any, targ_bits: any, analog_silence_bits: any, max_frame_bits: any) => void;
}
import VBRQuantize = require("./VBRQuantize.js");
