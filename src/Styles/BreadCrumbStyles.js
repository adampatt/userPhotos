import styled from "@emotion/styled";

export const BreadCrumbContainer = styled.header`
	background-color: #f5f5f5;
	text-align: left;
	display: flex;
	width: 100%;
	margin-top: 5%;
	border-radius: 5px;
	margin-bottom: 50px;
	a {
		text-decoration: none;
		cursor: pointer;
	}
	h3 {
		color: #3483eb;
		padding-left: 0.75rem;
	}
	& > h3:last-of-type {
		color: gray;
	}
	.spacer {
		padding-right: 0.75rem;
		padding-left: 0.75rem;
	}
`;
