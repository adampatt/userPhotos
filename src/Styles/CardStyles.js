import styled from "@emotion/styled";

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	width: ${(props) => (props.widthStyle ? props.widthStyle : "30%")};
	background-color: #cde5fd;
	border-radius: 5px;
`;

export const CardContent = styled.div`
	display: flex;
	background-color: #cde5fd;
	width: 80%;
	flex-direction: column;
	padding-top: 5%;
	padding-bottom: 5%;
`;

export const CardTitle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	a {
		text-decoration: none;
		color: #354f83;
		font-style: bold;
	}
	h3 {
		margin: 0;
	}
`;

export const CardSubtitle = styled.div`
	display: flex;
	flex-direction: column;
	color: #354f83;
	width: 100%;
	div {
		text-decoration: none;
		padding: 0.2rem 0 0.02rem 0;
		a {
			text-decoration: none;
			color: #354f83;
			font-style: bold;
		}
	}
	a {
		text-decoration: none;
	}
`;
