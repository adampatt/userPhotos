import styled from "@emotion/styled";

export const SubHeadingS = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
	h2 {
		font-size: 2rem;
	}
	p {
		font-style: italic;
		width: max-content;
		margin-right: 0px;
		padding-right: 16px;
	}
	.subheadingLower {
		display: flex;
		width: 60%;
		justify-content: space-evenly;
	}
	.top {
		display: flex;
		flex-direction: row;
		p {
			padding-right: 0.25rem;
		}
		justify-content: space-evenly;
	}
	.bottom {
		display: flex;
		flex-direction: row;
		p {
			padding-right: 0.25rem;
		}
	}
`;
