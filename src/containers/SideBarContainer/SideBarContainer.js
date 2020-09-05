import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../utils/assets/img/word_logo.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function SideBarContainer (props) {
    const { routes } = props;
    var brand = (
        <div className="brand__wrapper">
            <div className="brand__logo__wrapper">
              <img src={logo} alt="logo" className="brand__logo__image" />
            </div>
            어드민 페이지
        </div>
    );
    var links = (
        <List>
            {routes.map((prop, key) => 
             <NavLink
                to={prop.layout + prop.path}
                className="sidebar__links__link"
                activeClassName="active"
                key={key}
            >
             <ListItem button className="sidebar__links__link__button">
                 <prop.icon className="sidebar__links__link__icon"/>
                 <ListItemText
                     primary= {prop.name}
                     className="sidebar__links__link__text"
                     disableTypography={true}
                 />
             </ListItem>
         </NavLink>
            )}
        </List>
    )

    return (
        <div>
            {brand}
            {links}
        </div>
    );
}

export default SideBarContainer;