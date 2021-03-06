import React, {Component} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import './comment/css/reset.css'

import Layout from "./components/layout";
import {routers} from "./components/routers";






class App extends Component {
    render() {
        return (
            <Router basename={"98jiameng"}>
                <Layout>
                    <Switch>
                        {
                        routers.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    exact={item.exact}
                                    path={item.path}
                                    component={item.component}
                                ></Route>
                            )
                        })
                    }
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
