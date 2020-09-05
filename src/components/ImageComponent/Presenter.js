import React from "react";
import styled from 'styled-components';
import symbolLogo from "../../utils/assets/img/symbol_logo.png";
import wordLogo from "../../utils/assets/img/word_logo.png";

const WordLogoImage = props => {
    return <Image />
}

export { WordLogoImage };

const Image = styled.div`
	width: 237px;
	height: 139px;
	background-image: url(${wordLogo});
	background-position: center;
	background-size: cover;
	@media (max-width: 780px) {
		width: 40vw;
		height: 25vw;
		background-size: 100%;
		background-repeat: no-repeat;
	}
`;