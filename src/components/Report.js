import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Report({ id, category, date }) {
    return (
    <Link to={{
        pathname: `/reports/${id}`,
        state: {
            id, 
            category,
            date
        }
    }}>
        <div className="report">
            <span className="report__id">{id}</span>
            <span className="report__category">{category}</span>
            <span className="report__date">{date}</span>
        </div>
    </Link>)
}

Report.propTypes = {
    id: Proptypes.number.isRequired,
    category: Proptypes.string.isRequired,
    date: Proptypes.string.isRequired
}

export default Report;