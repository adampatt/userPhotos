import styled from "@emotion/styled";

export const CardSection = styled.div`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	a {
		width: 100%;
	}
	.usersCard {
		width: 30%;
	}
`;

export const CardAlbumSection = styled.div`
	display: flex;
	width: 30%;
	border: 1px solid red;
	a {
		width: 100%;
		border: 1px solid yellow;
	}
`;
