import dva from 'dva';
import router from './router';
import './index.css';
import global from './model/global';

const app = dva();

app.model(global);
app.router(router);
// 挂载并启动项目 
app.start('#root');