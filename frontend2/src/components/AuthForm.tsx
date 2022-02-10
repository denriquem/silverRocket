const AuthForm = () => {
	return (
		<form>
			<div>
				<label htmlFor="text">Your Handle</label>
				<input type="text" id="text"></input>
			</div>
			<div>
				<label htmlFor="password">Your Password</label>
				<input type="password" id="password" required />
			</div>
			<div>
				<button>Login</button>
				<button type="button"></button>
			</div>
		</form>
	);
};

export default AuthForm;
