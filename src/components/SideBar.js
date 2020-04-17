import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div>
            <Link to="/picture-auth">사진 승인</Link>
            <Link to="/card-auth">학생증 승인</Link>
            <Link to="/reports">신고 목록</Link>
        </div>
    );
}

export default SideBar;