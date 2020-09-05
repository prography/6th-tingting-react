import React from "react";
import styled from "styled-components";
import LogInContainer from "../../containers/LogInContainer";
import { KEY_COLOR } from "../../constants/colors"

const Presenter = props => {
	return (
		<PageBody>
			<LogInContainer />
		</PageBody>
	);
};

const PageBody = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${KEY_COLOR};
	@media (max-width: 780px) {
		width: calc(100% - 48px);
		padding: 24px;
		height: calc(100vh - 48px);
	}
`;

export default Presenter;

