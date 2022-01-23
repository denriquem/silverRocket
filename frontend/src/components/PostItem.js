import React from "react";

const PostItem = (props) => {
	return (
		<section>
			<h2>{props.data.body}</h2>
			<h2>{props.data.date}</h2>
		</section>
	);
};

export default PostItem;
