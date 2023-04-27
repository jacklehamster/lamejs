declare function ID3TagSpec(): void;
declare class ID3TagSpec {
    flags: number;
    year: number;
    title: any;
    artist: any;
    album: any;
    comment: any;
    track_id3v1: number;
    genre_id3v1: number;
    albumart: any;
    albumart_size: number;
    padding_size: number;
    albumart_mimetype: any;
    values: any[];
    num_values: number;
    v2_head: any;
    v2_tail: any;
}
