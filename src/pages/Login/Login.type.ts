import { Role } from "../../type"

/** 登录传参类型 */
export interface ILoginParams {
    username: string,
    password: string,
}
/** 登录接口返回值类型 */
export interface ILoginResponse {
    token: string
    roles: Role[]
}