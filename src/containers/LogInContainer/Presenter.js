import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import { Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import LogInFieldCommponent from ""


const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  '& > *': {
		margin: theme.spacing(1),
	  },
	},
	pink: {
	  color: theme.palette.getContrastText(pink[500]),
	  backgroundColor: pink[500],
	},
	green: {
	  color: '#fff',
	  backgroundColor: green[500],
	},
  }));

const Presenter = props => {
    const [userId, setUserId] = useState("");
	const [userPassword, setUserPassword ] = useState("");
	const classes = useStyles();
	return (
        <Flex>
            {/* <PageIcon /> */}
			<Avatar className={classes.pink}>
  				<AccountCircleIcon />
			</Avatar>
            <TitleText>관리자 로그인</TitleText>
			{/* <LogInFieldCommponent />
			<LogInFieldCommponent /> */}
        </Flex>
	);
};

export default Presenter;

const Flex = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 100px;
`;

const TitleText = styled.div`
	margin: 25px 0;
`;