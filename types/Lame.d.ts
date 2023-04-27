export = Lame;
declare function Lame(): void;
declare class Lame {
    enc: Encoder;
    setModules: (_ga: any, _bs: any, _p: any, _qupvt: any, _qu: any, _vbr: any, _ver: any, _id3: any, _mpglib: any) => void;
    lame_init: () => LameGlobalFlags;
    nearestBitrateFullIndex: (bitrate: any) => number;
    /********************************************************************
     * initialize internal params based on data in gf (globalflags struct filled
     * in by calling program)
     *
     * OUTLINE:
     *
     * We first have some complex code to determine bitrate, output samplerate
     * and mode. It is complicated by the fact that we allow the user to set
     * some or all of these parameters, and need to determine best possible
     * values for the rest of them:
     *
     * 1. set some CPU related flags 2. check if we are mono.mono, stereo.mono
     * or stereo.stereo 3. compute bitrate and output samplerate: user may have
     * set compression ratio user may have set a bitrate user may have set a
     * output samplerate 4. set some options which depend on output samplerate
     * 5. compute the actual compression ratio 6. set mode based on compression
     * ratio
     *
     * The remaining code is much simpler - it just sets options based on the
     * mode & compression ratio:
     *
     * set allow_diff_short based on mode select lowpass filter based on
     * compression ratio & mode set the bitrate index, and min/max bitrates for
     * VBR modes disable VBR tag if it is not appropriate initialize the
     * bitstream initialize scalefac_band data set sideinfo_len (based on
     * channels, CRC, out_samplerate) write an id3v2 tag into the bitstream
     * write VBR tag into the bitstream set mpeg1/2 flag estimate the number of
     * frames (based on a lot of data)
     *
     * now we set more flags: nspsytune: see code VBR modes see code CBR/ABR see
     * code
     *
     * Finally, we set the algorithm flags based on the gfp.quality value
     * lame_init_qval(gfp);
     *
     ********************************************************************/
    lame_init_params: (gfp: any) => 0 | -1 | -6;
    lame_encode_flush: (gfp: any, mp3buffer: any, mp3bufferPos: any, mp3buffer_size: any) => number;
    lame_encode_buffer: (gfp: any, buffer_l: any, buffer_r: any, nsamples: any, mp3buf: any, mp3bufPos: any, mp3buf_size: any) => any;
}
import Encoder = require("./Encoder.js");
import LameGlobalFlags = require("./LameGlobalFlags.js");
