import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const res = await axios.get('"http://localhost:3000/posts"');
		let loadedPosts = res.data;
		console.log(loadedPosts);
		setPosts(loadedPosts);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return <div></div>;
};

export default Posts;
