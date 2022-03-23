import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import {
	ModalHomeContent,
	ModalHomeContainer,
} from "../Styles/ModalHomeStyles";
import PhotoContainer from "./PhotoContainer";

function ModalHome() {
	const [showModal, setShowModal] = useState(false);
	const [photos, setPhotos] = useState([]);
	const [isLoadingPhotos, setIsLoadingPhotos] = useState(true);
	const [currImg, setCurrImg] = useState("");
	const [currImgTitle, setCurrImgTitle] = useState("");

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
			.then((response) => response.json())
			.then((data) => setPhotos(data))
			.then(() => setIsLoadingPhotos(false));
	}, []);

	return (
		<ModalHomeContainer>
			<ModalHomeContent>
				<Modal
					showModal={showModal}
					setShowModal={setShowModal}
					currImg={currImg}
					currImgTitle={currImgTitle}
					isLoadingPhotos={isLoadingPhotos}
				/>
				{photos.map(({ id, url, thumbnailUrl, title }) => (
					<PhotoContainer
						key={id}
						url={url}
						thumbnailUrl={thumbnailUrl}
						alt={title}
						userId={id}
						setShowModal={setShowModal}
						setCurrImg={setCurrImg}
						setCurrImgTitle={setCurrImgTitle}
					/>
				))}
			</ModalHomeContent>
		</ModalHomeContainer>
	);
}

export default ModalHome;
