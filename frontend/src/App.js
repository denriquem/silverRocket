import "./App.css";
import Posts from "./components/Posts";
import React, { Fragment } from "react";
import Header from "./components/Header";

function App() {
	return (
		<Fragment>
			<Header />
			<Posts />
		</Fragment>
	);
}

export default App;
