export = DevAuth;
/**
* devAuth类
* 百度开发者token获取类
*
* @constructor
* @param {string} ak API Key.
* @param {string} sk Secret Key.
*/
declare class DevAuth {
    constructor(ak: any, sk: any);
    ak: any;
    sk: any;
    httpClient: HttpClient;
    gotData(data: any): DevAuthToken;
    gotDataError(err: any): void;
    getToken(): Promise<any>;
}
declare namespace DevAuth {
    let EVENT_ERRTYPE_ILLEGAL_RESPONSE: string;
    let EVENT_ERRTYPE_NETWORK: string;
    let EVENT_ERRTYPE_NORMAL: string;
}
import HttpClient = require("../http/httpClient");
import DevAuthToken = require("./devAuthToken");
