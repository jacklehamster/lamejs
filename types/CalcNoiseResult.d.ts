export = CalcNoiseResult;
declare function CalcNoiseResult(): void;
declare class CalcNoiseResult {
    /**
     * sum of quantization noise > masking
     */
    over_noise: number;
    /**
     * sum of all quantization noise
     */
    tot_noise: number;
    /**
     * max quantization noise
     */
    max_noise: number;
    /**
     * number of quantization noise > masking
     */
    over_count: number;
    /**
     * SSD-like cost of distorted bands
     */
    over_SSD: number;
    bits: number;
}
