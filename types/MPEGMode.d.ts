export = MPEGMode;
declare function MPEGMode(ordinal: any): void;
declare class MPEGMode {
    constructor(ordinal: any);
    ordinal: () => any;
}
declare namespace MPEGMode {
    const STEREO: MPEGMode;
    const JOINT_STEREO: MPEGMode;
    const DUAL_CHANNEL: MPEGMode;
    const MONO: MPEGMode;
    const NOT_SET: MPEGMode;
}
