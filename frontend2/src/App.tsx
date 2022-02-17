import NavBar from "./components/UI/NavBar";
import Posts from "./components/Posts";
import { Fragment } from "react";

const App = () => {
	return (
		<Fragment>
			<NavBar />
			<Posts />
		</Fragment>
	);
};

export default App;
