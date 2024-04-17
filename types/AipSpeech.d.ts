export = AipSpeech;
/**
 * AipSpeech类，构造调用语音接口
 *
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipSpeech extends BaseClient {
    constructor(appId: any, ak: any, sk: any);
    recognizePro(buffer: any, format: any, rate: any, options: any): Promise<any>;
    recognize(buffer: any, format: any, rate: any, options: any): Promise<any>;
    recognizeByUrl(url: any, callback: any, format: any, rate: any, options: any): Promise<any>;
    asrImpl(param: any): Promise<any>;
    asrImplPro(param: any): Promise<any>;
    asrImplPath(param: any, url: any): Promise<any>;
    text2audio(text: any, options: any): Promise<any>;
    ttsImpl(param: any): Promise<any>;
}
import BaseClient = require("./client/baseClient");
