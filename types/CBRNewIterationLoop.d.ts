export = CBRNewIterationLoop;
declare function CBRNewIterationLoop(_quantize: any): void;
declare class CBRNewIterationLoop {
    constructor(_quantize: any);
    quantize: any;
    iteration_loop: (gfp: any, pe: any, ms_ener_ratio: any, ratio: any) => void;
}
