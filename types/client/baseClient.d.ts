export = BaseClient;
/**
* BaseClient类
* 各具体接口类基类，处理鉴权逻辑等
*
* @constructor
* @param {string} appid appid.
* @param {string} ak The access key.
* @param {string} sk The security key.
*/
declare class BaseClient {
    constructor(appId: any, ak: any, sk: any, options: any);
    appId: number;
    ak: any;
    sk: any;
    options: any;
    authType: number;
    status: number;
    devAccessToken: any;
    devAuth: DevAuth;
    setAccessToken(token: any, expireTime: any): void;
    authTypeReq(): Promise<any>;
    pms: Promise<any>;
    gotDevAuthSuccess(token: any): void;
    gotDevAuthFail(err: any): void;
    doRequest(requestInfo: any, httpClient: any): Promise<any>;
    checkDevPermission(requestInfo: any): any;
    preRequest(requestInfo: any): boolean;
}
import DevAuth = require("../auth/devAuth");
