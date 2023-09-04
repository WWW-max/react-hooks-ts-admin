
import { RouterAPI } from "dva";
import { Router, Route } from "dva/router"; // dva中的router和react-router-dom一样
import Layout from "./layout/layout";

export default (api?: RouterAPI) => {
    if (api) {
        return (
            <Router history={api.history}>
                <Route path="/">
                    <Layout></Layout>
                </Route>
            </Router>
        )
    }
    return {}
}