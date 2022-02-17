import classes from "./PostItem.module.css";

const PostItem = (props: any) => {
	const timestamp: number = Math.floor(
		new Date(props.data.date).getTime() / 1000
	);
	const interDate: Date = new Date(timestamp);
	const date: string =
		interDate.getDate() +
		"/" +
		(interDate.getMonth() + 1) +
		"/" +
		interDate.getFullYear() +
		" " +
		interDate.getHours() +
		":" +
		interDate.getMinutes() +
		":" +
		interDate.getSeconds();

	return (
		<section className={classes.postBox}>
			<h2>{props.data.body}</h2>
			<h3>{date}</h3>
		</section>
	);
};

export default PostItem;
