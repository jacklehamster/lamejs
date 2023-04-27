export = Encoder;
declare class Encoder {
    setModules(_bs: any, _psy: any, _qupvt: any, _vbr: any): void;
    psy: any;
    /**
     * <PRE>
     * encodeframe()           Layer 3
     *
     * encode a single frame
     *
     *
     *    lame_encode_frame()
     *
     *
     *                           gr 0            gr 1
     *    inbuf:           |--------------|--------------|--------------|
     *
     *
     *    Polyphase (18 windows, each shifted 32)
     *    gr 0:
     *    window1          <----512---.
     *    window18                 <----512---.
     *
     *    gr 1:
     *    window1                         <----512---.
     *    window18                                <----512---.
     *
     *
     *
     *    MDCT output:  |--------------|--------------|--------------|
     *
     *    FFT's                    <---------1024---------.
     *                                             <---------1024-------.
     *
     *
     *
     *        inbuf = buffer of PCM data size=MP3 framesize
     *        encoder acts on inbuf[ch][0], but output is delayed by MDCTDELAY
     *        so the MDCT coefficints are from inbuf[ch][-MDCTDELAY]
     *
     *        psy-model FFT has a 1 granule delay, so we feed it data for the
     *        next granule.
     *        FFT is centered over granule:  224+576+224
     *        So FFT starts at:   576-224-MDCTDELAY
     *
     *        MPEG2:  FFT ends at:  BLKSIZE+576-224-MDCTDELAY      (1328)
     *        MPEG1:  FFT ends at:  BLKSIZE+2*576-224-MDCTDELAY    (1904)
     *
     *        MPEG2:  polyphase first window:  [0..511]
     *                          18th window:   [544..1055]          (1056)
     *        MPEG1:            36th window:   [1120..1631]         (1632)
     *                data needed:  512+framesize-32
     *
     *        A close look newmdct.c shows that the polyphase filterbank
     *        only uses data from [0..510] for each window.  Perhaps because the window
     *        used by the filterbank is zero for the last point, so Takehiro's
     *        code doesn't bother to compute with it.
     *
     *        FFT starts at 576-224-MDCTDELAY (304)  = 576-FFTOFFSET
     *
     * </PRE>
     */
    lame_encode_mp3_frame: (gfp: any, inbuf_l: any, inbuf_r: any, mp3buf: any, mp3bufPos: any, mp3buf_size: any) => any;
}
