import axios, { AxiosResponse } from 'axios';
import { IBaseResponse } from '../type';
import { message } from 'antd';

/** 
 * AxiosResponse接收两个泛型
 * 第一个T是规定业务层的请求体类型，也就是接口定义的类型
 * 所以用统一的返回结果IBaseReponse
 * 
 * IBaseResponse又接收一个类型 这个类型就泛指具体业务
 */
axios.interceptors.response.use(
    (response: AxiosResponse<IBaseResponse<any>>) => {
    /**
     * 返回code非1000时都是报错，需要前端提示出来message
     */
    if (response.data.code !== 1000) {
        /** 提示报错信息 */
        message.error(response.data.message);
        /** 抛出错误，阻塞后续程序运行 */
        throw new Error(response.data.message);
    }

    /**
     * 正常的话，正常返回
     * 
     * 返回给业务层的数据只希望关心业务，所以不需要code等字段，不直接写return response;
     */
    return response.data.data;
})

export default axios;