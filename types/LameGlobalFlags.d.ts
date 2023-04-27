export = LameGlobalFlags;
declare function LameGlobalFlags(): void;
declare class LameGlobalFlags {
    class_id: number;
    /**
     * number of samples. default=-1
     */
    num_samples: number;
    /**
     * input number of channels. default=2
     */
    num_channels: number;
    /**
     * input_samp_rate in Hz. default=44.1 kHz
     */
    in_samplerate: number;
    /**
     * output_samp_rate. default: LAME picks best value at least not used for
     * MP3 decoding: Remember 44.1 kHz MP3s and AC97
     */
    out_samplerate: number;
    /**
     * scale input by this amount before encoding at least not used for MP3
     * decoding
     */
    scale: number;
    /**
     * scale input of channel 0 (left) by this amount before encoding
     */
    scale_left: number;
    /**
     * scale input of channel 1 (right) by this amount before encoding
     */
    scale_right: number;
    /**
     * collect data for a MP3 frame analyzer?
     */
    analysis: boolean;
    /**
     * add Xing VBR tag?
     */
    bWriteVbrTag: boolean;
    /**
     * use lame/mpglib to convert mp3 to wav
     */
    decode_only: boolean;
    /**
     * quality setting 0=best, 9=worst default=5
     */
    quality: number;
    /**
     * see enum default = LAME picks best value
     */
    mode: MPEGMode;
    /**
     * force M/S mode. requires mode=1
     */
    force_ms: boolean;
    /**
     * use free format? default=0
     */
    free_format: boolean;
    /**
     * find the RG value? default=0
     */
    findReplayGain: boolean;
    /**
     * decode on the fly? default=0
     */
    decode_on_the_fly: boolean;
    /**
     * 1 (default) writes ID3 tags, 0 not
     */
    write_id3tag_automatic: boolean;
    /**
     * bitrate
     */
    brate: number;
    /**
     * sizeof(wav file)/sizeof(mp3 file)
     */
    compression_ratio: number;
    /**
     * mark as copyright. default=0
     */
    copyright: number;
    /**
     * mark as original. default=1
     */
    original: number;
    /**
     * the MP3 'private extension' bit. Meaningless
     */
    extension: number;
    /**
     * Input PCM is emphased PCM (for instance from one of the rarely emphased
     * CDs), it is STRONGLY not recommended to use this, because psycho does not
     * take it into account, and last but not least many decoders don't care
     * about these bits
     */
    emphasis: number;
    /**
     * use 2 bytes per frame for a CRC checksum. default=0
     */
    error_protection: number;
    /**
     * enforce ISO spec as much as possible
     */
    strict_ISO: boolean;
    /**
     * use bit reservoir?
     */
    disable_reservoir: boolean;
    quant_comp: number;
    quant_comp_short: number;
    experimentalY: boolean;
    experimentalZ: number;
    exp_nspsytune: number;
    preset: number;
    VBR: any;
    /**
     * Range [0,...,1[
     */
    VBR_q_frac: number;
    /**
     * Range [0,...,9]
     */
    VBR_q: number;
    VBR_mean_bitrate_kbps: number;
    VBR_min_bitrate_kbps: number;
    VBR_max_bitrate_kbps: number;
    /**
     * strictly enforce VBR_min_bitrate normaly, it will be violated for analog
     * silence
     */
    VBR_hard_min: number;
    /**
     * freq in Hz. 0=lame choses. -1=no filter
     */
    lowpassfreq: number;
    /**
     * freq in Hz. 0=lame choses. -1=no filter
     */
    highpassfreq: number;
    /**
     * freq width of filter, in Hz (default=15%)
     */
    lowpasswidth: number;
    /**
     * freq width of filter, in Hz (default=15%)
     */
    highpasswidth: number;
    maskingadjust: number;
    maskingadjust_short: number;
    /**
     * only use ATH
     */
    ATHonly: boolean;
    /**
     * only use ATH for short blocks
     */
    ATHshort: boolean;
    /**
     * disable ATH
     */
    noATH: boolean;
    /**
     * select ATH formula
     */
    ATHtype: number;
    /**
     * change ATH formula 4 shape
     */
    ATHcurve: number;
    /**
     * lower ATH by this many db
     */
    ATHlower: number;
    /**
     * select ATH auto-adjust scheme
     */
    athaa_type: number;
    /**
     * select ATH auto-adjust loudness calc
     */
    athaa_loudapprox: number;
    /**
     * dB, tune active region of auto-level
     */
    athaa_sensitivity: number;
    short_blocks: any;
    /**
     * use temporal masking effect
     */
    useTemporal: boolean;
    interChRatio: number;
    /**
     * Naoki's adjustment of Mid/Side maskings
     */
    msfix: number;
    /**
     * 0 off, 1 on
     */
    tune: boolean;
    /**
     * used to pass values for debugging and stuff
     */
    tune_value_a: number;
    /************************************************************************/
    /************************************************************************/
    /**
     * 0=MPEG-2/2.5 1=MPEG-1
     */
    version: number;
    encoder_delay: number;
    /**
     * number of samples of padding appended to input
     */
    encoder_padding: number;
    framesize: number;
    /**
     * number of frames encoded
     */
    frameNum: number;
    /**
     * is this struct owned by calling program or lame?
     */
    lame_allocated_gfp: number;
    /**************************************************************************/
    /**************************************************************************/
    internal_flags: any;
}
import MPEGMode = require("./MPEGMode.js");
