export = ReplayGain;
declare function ReplayGain(): void;
declare class ReplayGain {
    linprebuf: Float32Array;
    /**
     * left input samples, with pre-buffer
     */
    linpre: number;
    lstepbuf: Float32Array;
    /**
     * left "first step" (i.e. post first filter) samples
     */
    lstep: number;
    loutbuf: Float32Array;
    /**
     * left "out" (i.e. post second filter) samples
     */
    lout: number;
    rinprebuf: Float32Array;
    /**
     * right input samples ...
     */
    rinpre: number;
    rstepbuf: Float32Array;
    rstep: number;
    routbuf: Float32Array;
    rout: number;
    /**
     * number of samples required to reach number of milliseconds required
     * for RMS window
     */
    sampleWindow: number;
    totsamp: number;
    lsum: number;
    rsum: number;
    freqindex: number;
    first: number;
    A: Int32Array;
    B: Int32Array;
}
