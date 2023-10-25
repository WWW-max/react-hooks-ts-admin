import { Form, Input, Card, Button } from 'antd';
import './Login.scss';
import { ILoginParams } from './Login.type';
import API from './../../api';

export default function Login() {
    const login = async (values: ILoginParams) => {
        /** 调登录接口，并且传对应的登录参数 */
        const data = await API.login(values);
        /**
         * 调用完接口，拿到token和登录角色信息
         * 将token全局封装到axios中
         * 使用角色过滤对应菜单
         * 跳转到欢迎页面
         */
    }
    return (
        <div id="login">
            <Card style={{ width: 300 }}>
                <h2 className='title'>活动管理平台</h2>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={login}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                        >
                        <Input.Password />
                    </Form.Item>
                    <div className='login-btn'>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </div>
                </Form>
            </Card>
        </div>
    )
}