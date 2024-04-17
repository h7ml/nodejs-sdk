export = AipImageCensor;
/**
 * AipContentCensor类，构造调用图像审核对象
 *
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipImageCensor extends BaseClient {
    constructor(appId: any, ak: any, sk: any);
    commonImpl(param: any): Promise<any>;
    jsonRequestImpl(param: any): Promise<any>;
    imageCensorUserDefined(image: any, type: any): Promise<any>;
    textCensorUserDefined(text: any, type: any): Promise<any>;
    report(feedback: any): Promise<any>;
}
import BaseClient = require("./client/baseClient");
