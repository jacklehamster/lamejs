export = NsPsy;
/**
 * Variables used for --nspsytune
 *
 * @author Ken
 *
 */
declare function NsPsy(): void;
declare class NsPsy {
    last_en_subshort: any;
    lastAttacks: Int32Array;
    pefirbuf: Float32Array;
    longfact: Float32Array;
    shortfact: Float32Array;
    /**
     * short block tuning
     */
    attackthre: number;
    attackthre_s: number;
}
