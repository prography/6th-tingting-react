import React from "react";
import Presenter from "./Presenter";
import axios from "axios";
import { LOGIN_URL } from "../../constants/endpoints";

const LoginContainer = props => {
	const url = LOGIN_URL;
	const submit = async (userID, password) => {
		// await axios, url
        console.log("login 시도")
    };

	return <Presenter submit={submit} />;
};

export default LoginContainer;
