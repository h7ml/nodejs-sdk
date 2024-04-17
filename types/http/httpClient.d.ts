export = HttpClient;
/**
 * HttpClient类
 * 通用接口调用，依赖request库
 * @see https://github.com/request/request
 *
 * @class
 * @constructor
 */
declare class HttpClient {
    postWithInfo(requestInfo: any): Promise<any>;
    req(options: any): Promise<any>;
}
declare namespace HttpClient {
    /**
     * 用来设置request库的参数，会覆盖所有options，设置时请确保你知道它的作用
     * @see https://github.com/request/request#requestoptions-callback
     * @see https://github.com/request/request
     */
    function setRequestOptions(options: any): void;
    /**
     * 用来获取和设置request库的参数，会覆盖所有options，设置时请确保你知道它的作用
     * 优先级高于setRequestOptions
     *
     * @see https://github.com/request/request#requestoptions-callback
     * @see https://github.com/request/request
     */
    function setRequestInterceptor(interceptorCallback: any): void;
    let REQUEST_GLOBAL_OPTIONS: any;
    let REQUEST_INTERCEPTOR: any;
    let DEFAULT_TIMEOUT: number;
}
