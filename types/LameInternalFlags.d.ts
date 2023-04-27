export = LameInternalFlags;
declare function LameInternalFlags(): void;
declare class LameInternalFlags {
    /********************************************************************
     * internal variables NOT set by calling program, and should not be *
     * modified by the calling program *
     ********************************************************************/
    /**
     * Some remarks to the Class_ID field: The Class ID is an Identifier for a
     * pointer to this struct. It is very unlikely that a pointer to
     * lame_global_flags has the same 32 bits in it's structure (large and other
     * special properties, for instance prime).
     *
     * To test that the structure is right and initialized, use: if ( gfc .
     * Class_ID == LAME_ID ) ... Other remark: If you set a flag to 0 for uninit
     * data and 1 for init data, the right test should be "if (flag == 1)" and
     * NOT "if (flag)". Unintended modification of this element will be
     * otherwise misinterpreted as an init.
     */
    Class_ID: number;
    lame_encode_frame_init: number;
    iteration_init_init: number;
    fill_buffer_resample_init: number;
    mfbuf: any;
    /**
     * granules per frame
     */
    mode_gr: number;
    /**
     * number of channels in the input data stream (PCM or decoded PCM)
     */
    channels_in: number;
    /**
     * number of channels in the output data stream (not used for decoding)
     */
    channels_out: number;
    /**
     * input_samp_rate/output_samp_rate
     */
    resample_ratio: number;
    mf_samples_to_encode: number;
    mf_size: number;
    /**
     * min bitrate index
     */
    VBR_min_bitrate: number;
    /**
     * max bitrate index
     */
    VBR_max_bitrate: number;
    bitrate_index: number;
    samplerate_index: number;
    mode_ext: number;
    /**
     * normalized frequency bounds of passband
     */
    lowpass1: number;
    lowpass2: number;
    /**
     * normalized frequency bounds of passband
     */
    highpass1: number;
    highpass2: number;
    /**
     * 0 = none 1 = ISO AAC model 2 = allow scalefac_select=1
     */
    noise_shaping: number;
    /**
     * 0 = ISO model: amplify all distorted bands<BR>
     * 1 = amplify within 50% of max (on db scale)<BR>
     * 2 = amplify only most distorted band<BR>
     * 3 = method 1 and refine with method 2<BR>
     */
    noise_shaping_amp: number;
    /**
     * 0 = no substep<BR>
     * 1 = use substep shaping at last step(VBR only)<BR>
     * (not implemented yet)<BR>
     * 2 = use substep inside loop<BR>
     * 3 = use substep inside loop and last step<BR>
     */
    substep_shaping: number;
    /**
     * 1 = gpsycho. 0 = none
     */
    psymodel: number;
    /**
     * 0 = stop at over=0, all scalefacs amplified or<BR>
     * a scalefac has reached max value<BR>
     * 1 = stop when all scalefacs amplified or a scalefac has reached max value<BR>
     * 2 = stop when all scalefacs amplified
     */
    noise_shaping_stop: number;
    /**
     * 0 = no, 1 = yes
     */
    subblock_gain: number;
    /**
     * 0 = no. 1=outside loop 2=inside loop(slow)
     */
    use_best_huffman: number;
    /**
     * 0 = stop early after 0 distortion found. 1 = full search
     */
    full_outer_loop: number;
    l3_side: IIISideInfo;
    ms_ratio: Float32Array;
    /**
     * padding for the current frame?
     */
    padding: number;
    frac_SpF: number;
    slot_lag: number;
    /**
     * optional ID3 tags
     */
    tag_spec: any;
    nMusicCRC: number;
    OldValue: Int32Array;
    CurrentStep: Int32Array;
    masking_lower: number;
    bv_scf: Int32Array;
    pseudohalf: Int32Array;
    /**
     * will be set in lame_init_params
     */
    sfb21_extra: boolean;
    inbuf_old: any[];
    blackfilt: any[];
    itime: Float64Array;
    sideinfo_len: number;
    sb_sample: any;
    amp_filter: Float32Array;
    header: any[];
    h_ptr: number;
    w_ptr: number;
    ancillary_flag: number;
    /**
     * in bits
     */
    ResvSize: number;
    /**
     * in bits
     */
    ResvMax: number;
    scalefac_band: ScaleFac;
    minval_l: Float32Array;
    minval_s: Float32Array;
    nb_1: any;
    nb_2: any;
    nb_s1: any;
    nb_s2: any;
    s3_ss: any;
    s3_ll: any;
    decay: number;
    thm: any[];
    en: any[];
    /**
     * fft and energy calculation
     */
    tot_ener: Float32Array;
    /**
     * loudness^2 approx. per granule and channel
     */
    loudness_sq: any;
    /**
     * account for granule delay of L3psycho_anal
     */
    loudness_sq_save: Float32Array;
    /**
     * Scale Factor Bands
     */
    mld_l: Float32Array;
    mld_s: Float32Array;
    bm_l: Int32Array;
    bo_l: Int32Array;
    bm_s: Int32Array;
    bo_s: Int32Array;
    npart_l: number;
    npart_s: number;
    s3ind: any;
    s3ind_s: any;
    numlines_s: Int32Array;
    numlines_l: Int32Array;
    rnumlines_l: Float32Array;
    mld_cb_l: Float32Array;
    mld_cb_s: Float32Array;
    numlines_s_num1: number;
    numlines_l_num1: number;
    pe: Float32Array;
    ms_ratio_s_old: number;
    ms_ratio_l_old: number;
    ms_ener_ratio_old: number;
    /**
     * block type
     */
    blocktype_old: Int32Array;
    /**
     * variables used for --nspsytune
     */
    nsPsy: NsPsy;
    /**
     * used for Xing VBR header
     */
    VBR_seek_table: VBRSeekInfo;
    /**
     * all ATH related stuff
     */
    ATH: any;
    PSY: any;
    nogap_total: number;
    nogap_current: number;
    decode_on_the_fly: boolean;
    findReplayGain: boolean;
    findPeakSample: boolean;
    PeakSample: number;
    RadioGain: number;
    AudiophileGain: number;
    rgdata: any;
    /**
     * gain change required for preventing clipping
     */
    noclipGainChange: number;
    /**
     * user-specified scale factor required for preventing clipping
     */
    noclipScale: number;
    bitrate_stereoMode_Hist: any;
    /**
     * norm/start/short/stop/mixed(short)/sum
     */
    bitrate_blockType_Hist: any;
    pinfo: any;
    hip: any;
    in_buffer_nsamples: number;
    in_buffer_0: any;
    in_buffer_1: any;
    iteration_loop: any;
}
declare namespace LameInternalFlags {
    const MFSIZE: number;
    const MAX_HEADER_BUF: number;
    const MAX_BITS_PER_CHANNEL: number;
    const MAX_BITS_PER_GRANULE: number;
    const BPC: number;
}
import IIISideInfo = require("./IIISideInfo.js");
import ScaleFac = require("./ScaleFac.js");
import NsPsy = require("./NsPsy.js");
import VBRSeekInfo = require("./VBRSeekInfo.js");
