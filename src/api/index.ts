import { ILoginParams, ILoginResponse } from '../pages/Login/Login.type';
import request from './../utils/request';

/**
 * 如果业务复杂的话可以分割模块
 * 现在整个api作为一层
 */
export default {
    login(data: ILoginParams) {
        return request.post<ILoginParams, ILoginResponse>(
            '/admin/base/open/login',
             data
        );
    }
}