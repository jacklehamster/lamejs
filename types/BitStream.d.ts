export = BitStream;
declare function BitStream(): void;
declare class BitStream {
    setModules: (_ga: any, _mpg: any, _ver: any, _vbr: any) => void;
    /**
     * compute bitsperframe and mean_bits for a layer III frame
     */
    getframebits: (gfp: any) => number;
    CRC_writeheader: (gfc: any, header: any) => void;
    flush_bitstream: (gfp: any) => void;
    add_dummy_byte: (gfp: any, val: any, n: any) => void;
    /**
     * This is called after a frame of audio has been quantized and coded. It
     * will write the encoded audio to the bitstream. Note that from a layer3
     * encoder's perspective the bit stream is primarily a series of main_data()
     * blocks, with header and side information inserted at the proper locations
     * to maintain framing. (See Figure A.7 in the IS).
     */
    format_bitstream: (gfp: any) => number;
    /**
     * <PRE>
     * copy data out of the internal MP3 bit buffer into a user supplied
     *       unsigned char buffer.
     *
     *       mp3data=0      indicates data in buffer is an id3tags and VBR tags
     *       mp3data=1      data is real mp3 frame data.
     * </PRE>
     */
    copy_buffer: (gfc: any, buffer: any, bufferPos: any, size: any, mp3data: any) => number;
    init_bit_stream_w: (gfc: any) => void;
}
declare namespace BitStream {
    function EQ(a: any, b: any): boolean;
    function NEQ(a: any, b: any): boolean;
}
