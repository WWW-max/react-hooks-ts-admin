
import { RouterAPI } from "dva";
import { Router, Route, Switch } from "dva/router"; // dva中的router和react-router-dom一样
import Layout from "./layout/layout";
import Login from "./pages/Login/Login";

export default (api?: RouterAPI) => {
    if (api) {
        return (
            <Router history={api.history}>
                {/* Switch匹配到第一个停住，故/不能在/login之前 */}
               <Switch>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/">
                    <Layout></Layout>
                </Route>
               </Switch>
            </Router>
        )
    }
    return {}
}