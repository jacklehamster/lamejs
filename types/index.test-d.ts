import { Mp3Encoder } from ".";
import {expectType} from "tsd";

const channelCount: number = 2;
const kbps: number = 192;
const sampleRate: number = 44100;
const mp3encoder = new Mp3Encoder(channelCount, sampleRate, kbps);
expectType<Mp3Encoder>(mp3encoder);

const left: Int16Array = new Int16Array(0);
const right: Int16Array = new Int16Array(0);
const mp3buf: Int8Array = mp3encoder.encodeBuffer(left, right);
expectType<Int8Array>(mp3buf);
