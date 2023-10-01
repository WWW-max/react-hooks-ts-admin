import { Form, Input, Card, Button } from 'antd';
import './Login.scss';
import { ILoginParams } from './Login.type';
export default function Login() {
    const login = (values: ILoginParams) => {
        console.log('values', values);
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