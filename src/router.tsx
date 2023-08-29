
import { RouterAPI } from "dva";
import { Router, Route } from "dva/router";
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