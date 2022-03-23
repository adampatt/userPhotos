import React, { useCallback, useEffect, useRef } from "react";
import {
	ModalContainer,
	ModalContent,
	Padding,
} from "../Styles/ModalStyles";
import { ImCross } from "react-icons/im";

const Modal = ({ showModal, setShowModal, currImg, currImgTitle }) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => {
			document.removeEventListener("keydown", keyPress);
		};
	}, [keyPress]);

	return (
		<>
			{showModal ? (
				<ModalContainer ref={modalRef} onClick={closeModal}>
					<Padding>
						<ImCross onClick={() => setShowModal((prev) => !prev)} />
					</Padding>
					<ModalContent>
						<img src={currImg} alt={currImgTitle} />
						<p>{currImgTitle}</p>
					</ModalContent>
					<Padding />
				</ModalContainer>
			) : null}
		</>
	);
};

export default Modal;
