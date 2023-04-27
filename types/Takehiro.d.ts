export = Takehiro;
declare class Takehiro {
    setModules(_qupvt: any): void;
    qupvt: any;
    /**
     * count_bit
     */
    noquant_count_bits: (gfc: any, gi: any, prev_noise: any) => number;
    count_bits: (gfc: any, xr: any, gi: any, prev_noise: any) => number;
    best_huffman_divide: (gfc: any, gi: any) => void;
    /**
     * Find the optimal way to store the scalefactors. Only call this routine
     * after final scalefactors have been chosen and the channel/granule will
     * not be re-encoded.
     */
    best_scalefac_store: (gfc: any, gr: any, ch: any, l3_side: any) => void;
    /**
     * Also calculates the number of bits necessary to code the scalefactors.
     */
    scale_bitcount: (cod_info: any) => boolean;
    /**
     * Also counts the number of bits to encode the scalefacs but for MPEG 2
     * Lower sampling frequencies (24, 22.05 and 16 kHz.)
     *
     * This is reverse-engineered from section 2.4.3.2 of the MPEG2 IS,
     * "Audio Decoding Layer III"
     */
    scale_bitcount_lsf: (gfc: any, cod_info: any) => boolean;
    huffman_init: (gfc: any) => void;
}
