export = GainAnalysis;
declare function GainAnalysis(): void;
declare class GainAnalysis {
    InitGainAnalysis: (rgData: any, samplefreq: any) => any;
    AnalyzeSamples: (rgData: any, left_samples: any, left_samplesPos: any, right_samples: any, right_samplesPos: any, num_samples: any, num_channels: any) => any;
    GetTitleGain: (rgData: any) => any;
}
declare namespace GainAnalysis {
    export const STEPS_per_dB: number;
    export const MAX_dB: number;
    export const GAIN_NOT_ENOUGH_SAMPLES: number;
    export const GAIN_ANALYSIS_ERROR: number;
    export const GAIN_ANALYSIS_OK: number;
    export const INIT_GAIN_ANALYSIS_ERROR: number;
    export const INIT_GAIN_ANALYSIS_OK: number;
    export const YULE_ORDER: number;
    import MAX_ORDER = YULE_ORDER;
    export { MAX_ORDER };
    export const MAX_SAMP_FREQ: number;
    export const RMS_WINDOW_TIME_NUMERATOR: number;
    export const RMS_WINDOW_TIME_DENOMINATOR: number;
    export const MAX_SAMPLES_PER_WINDOW: number;
}
