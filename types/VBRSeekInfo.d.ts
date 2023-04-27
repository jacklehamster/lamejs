export = VBRSeekInfo;
declare function VBRSeekInfo(): void;
declare class VBRSeekInfo {
    /**
     * What we have seen so far.
     */
    sum: number;
    /**
     * How many frames we have seen in this chunk.
     */
    seen: number;
    /**
     * How many frames we want to collect into one chunk.
     */
    want: number;
    /**
     * Actual position in our bag.
     */
    pos: number;
    /**
     * Size of our bag.
     */
    size: number;
    /**
     * Pointer to our bag.
     */
    bag: any;
    nVbrNumFrames: number;
    nBytesWritten: number;
    TotalFrameSize: number;
}
