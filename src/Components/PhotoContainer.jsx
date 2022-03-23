import React from "react";
import { PhotoCon } from "../Styles/PhotoContainerStyles";
import { MODAL_PHOTO_KEY } from "../Utils";
function PhotoContainer({
	key,
	alt,
	setShowModal,
	url,
	setCurrImg,
	setCurrImgTitle,
	id,
}) {
	const imgDetails = () => {
		setCurrImg(url);
		setShowModal((prev) => !prev);
		setCurrImgTitle(alt);
		localStorage.setItem(MODAL_PHOTO_KEY, JSON.stringify({ url, id }));
	};

	return (
		<PhotoCon className="card" key={key} onClick={imgDetails}>
			<img src={url} alt={alt} />
		</PhotoCon>
	);
}

export default PhotoContainer;
