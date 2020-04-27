import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
// Footer 추가

import routes from "../../routes";

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route 
                        path = {prop.layout + prop.path}
                        component = {prop.component}
                        key = {key}
                    />
                );
            }
            return null;
        } )}
    </Switch>
)

function Admin () {
    return (
        <div className = "admin__wrapper">
            <Header />
            <SideBar 
                routes={routes}
                // handleDrawerToggle={handleDrawerToggle}
                // open={mobileOpen}
                // {...rest}
            />
            <div className = "sidebar__contents">
                {switchRoutes}
            </div>
        </div>
    )

}

export default Admin;