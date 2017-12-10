import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "./components/HomePage";
import CustomerPage from "./components/Customer/CustomerPage";

let Routes = () => {
    return (
        <div className="container-fluid">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/customers' component={CustomerPage} />
            </Switch>
        </div>

    );
}
export default Routes