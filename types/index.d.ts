export function Mp3Encoder(channels: any, samplerate: any, kbps: any, ...args: any[]): void;
export class Mp3Encoder {
    constructor(channels: any, samplerate: any, kbps: any, ...args: any[]);
    encodeBuffer: (left: any, right: any) => Int8Array;
    flush: () => Int8Array;
}
export function WavHeader(): void;
export class WavHeader {
    dataOffset: number;
    dataLen: number;
    channels: number;
    sampleRate: number;
}
export namespace WavHeader {
    const RIFF: number;
    const WAVE: number;
    const fmt_: number;
    const data: number;
    function readHeader(dataView: any): WavHeader;
}
