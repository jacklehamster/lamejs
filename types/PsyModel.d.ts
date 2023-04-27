export = PsyModel;
declare function PsyModel(): void;
declare class PsyModel {
    L3psycho_anal_ns: (gfp: any, buffer: any, bufPos: any, gr_out: any, masking_ratio: any, masking_MS_ratio: any, percep_entropy: any, percep_MS_entropy: any, energy: any, blocktype_d: any) => number;
    L3psycho_anal_vbr: (gfp: any, buffer: any, bufPos: any, gr_out: any, masking_ratio: any, masking_MS_ratio: any, percep_entropy: any, percep_MS_entropy: any, energy: any, blocktype_d: any) => number;
    /**
     * NOTE: the bitrate reduction from the inter-channel masking effect is low
     * compared to the chance of getting annyoing artefacts. L3psycho_anal_vbr
     * does not use this feature. (Robert 071216)
     */
    psymodel_init: (gfp: any) => number;
    ATHformula: (f: any, gfp: any) => number;
}
