import React from "react";
import styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const PageIcon = props => {
    return <div>{AccountCircleIcon}</div>
}

export { PageIcon }; 

const Icon = styled.div`
	width: 237px;
	height: 139px;
	background-image: url(${AccountCircleIcon});
	background-position: center;
	background-size: cover;
	@media (max-width: 780px) {
		width: 40vw;
		height: 25vw;
		background-size: 100%;
		background-repeat: no-repeat;
	}
`;
