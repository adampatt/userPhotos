import React from "react";
import { SubHeadingS } from "../Styles/SubheadingStyles";

function SubHeading({ title, subtitle }) {
	return (
		<SubHeadingS>
			<h2>{title}</h2>
			<div className="subheadingLower">
				<div className="top">
					{subtitle.albumTitle ? <p>{subtitle?.albumTitle}</p> : null}
					{subtitle.company ? <p>{subtitle?.company}</p> : null}
				</div>
				{subtitle.email ? (
					<div className="middle">
						<p>{subtitle?.email.toLowerCase()}</p>
					</div>
				) : null}
				{subtitle.address ? (
					<div className="bottom">
						{subtitle.address?.map((s) => (
							<>
								<p>
									{s.street} {s.zipcode} {s.city}
								</p>
							</>
						))}
					</div>
				) : null}
			</div>
		</SubHeadingS>
	);
}

export default SubHeading;
