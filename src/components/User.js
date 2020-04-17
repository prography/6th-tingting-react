import React from "react";
import PropTypes from "prop-types";
import "./User.css";

function User({ id, gender, image }) {
    return <div className="user">
        <img src={image} alt={id} title={id}/>
        <div className="user__data">
            <h3 className="user__id">{id}</h3>
            <h3 className="user__gender">{gender}</h3>
        </div>
        {id}
        </div>
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    gender: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export default User;