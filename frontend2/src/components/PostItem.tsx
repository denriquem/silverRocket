import classes from "./PostItem.module.css";

const PostItem = (props: any) => {
	return (
		<section className={classes.postBox}>
			<h2>{props.data.body}</h2>
			<h2>{props.data.date}</h2>
		</section>
	);
};

export default PostItem;
