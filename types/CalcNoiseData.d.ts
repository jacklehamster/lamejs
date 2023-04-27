export = CalcNoiseData;
declare function CalcNoiseData(): void;
declare class CalcNoiseData {
    global_gain: number;
    sfb_count1: number;
    step: Int32Array;
    noise: Float32Array;
    noise_log: Float32Array;
}
