import styled from "@emotion/styled";

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	opacity: 1;
	z-index: 10;
	align-items: center;
	p {
		color: white;
	}
`;

export const ModalContainer = styled.div`
	width: 100vw;
	height: 100vh;
	bottom: 0%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.75);
	transition: 250ms ease;
	opacity: 1;
	position: fixed;
	overflow: hidden;
`;

export const Padding = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: flex-end;
	padding-right: 5%;
`;
