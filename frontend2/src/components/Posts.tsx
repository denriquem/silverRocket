import { useState, useEffect } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import Card from "./UI/Card";

const Posts = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const res = await axios.get("http://localhost:3000/posts");
		let loadedPosts = res.data;
		console.log(loadedPosts);
		setPosts(loadedPosts);
	};

	useEffect(() => {
		getPosts();
	}, []);

	const postList: any[] = posts.map((post, index) => {
		return <PostItem data={post} key={index} />;
	});

	return (
		<Card>
			<ul>{postList}</ul>
		</Card>
	);
};

export default Posts;
