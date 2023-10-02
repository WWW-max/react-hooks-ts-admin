/** 
 * 通用返回体
 */
export interface IBaseResponse<T> {
    /** 错误码，除1000外都是错误 */
    code: number,
    /** 报错信息 */
    message: string,
    /** 接口具体返回的数据 */
    data: T,
}
/**
 * 用户角色枚举
 */
export enum Role {
    /** 用户管理角色 */
    USEMANAGE = 'userManage',
    /** 活动管理角色 */
    ACTIVITIMANAGE = 'activitiManage',
}