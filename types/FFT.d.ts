export = FFT;
declare function FFT(): void;
declare class FFT {
    fft_short: (gfc: any, x_real: any, chn: any, buffer: any, bufPos: any) => void;
    fft_long: (gfc: any, y: any, chn: any, buffer: any, bufPos: any) => void;
    init_fft: (gfc: any) => void;
}
