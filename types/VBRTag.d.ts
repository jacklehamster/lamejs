export = VBRTag;
declare function VBRTag(): void;
declare class VBRTag {
    setModules: (_lame: any, _bs: any, _v: any) => void;
    /**
     * Add VBR entry, used to fill the VBR TOC entries.
     *
     * @param gfp
     *            global flags
     */
    addVbrFrame: (gfp: any) => void;
    /**
     * Get VBR tag information
     *
     * @param buf
     *            header to analyze
     * @param bufPos
     *            offset into the header
     * @return VBR tag data
     */
    getVbrTag: (buf: any) => any;
    /**
     * Initializes the header
     *
     * @param gfp
     *            global flags
     */
    InitVbrTag: (gfp: any) => void;
    updateMusicCRC: (crc: any, buffer: any, bufferPos: any, size: any) => void;
    getLameTagFrame: (gfp: any, buffer: any) => any;
    /**
     * Write final VBR tag to the file.
     *
     * @param gfp
     *            global flags
     * @param stream
     *            stream to add the VBR tag to
     * @return 0 (OK), -1 else
     * @throws IOException
     *             I/O error
     */
    putVbrTag: (gfp: any, stream: any) => 0 | -1;
}
declare namespace VBRTag {
    const NUMTOCENTRIES: number;
    const MAXFRAMESIZE: number;
}
