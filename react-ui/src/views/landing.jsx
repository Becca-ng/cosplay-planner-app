import { NavLink, useNavigate } from "react-router-dom";
const bcrypt = require('bcryptjs');

const LandingPage = () => {

	const navigateTo = useNavigate();

	const handleLogin = async e => {
		e.preventDefault();
		const form = e.target.form;
		const user = {
			"username": form.username.value,
			"password": "",
			"create": false
		}
		let response;
		bcrypt.genSalt(10, async function(err, salt) {
			bcrypt.hash("B4c0/\/", salt, async function(err, hash) {
				user.password = hash;
				await callAPI("POST", user)
			});
		});
		navigateTo("/projects")
	}

	const handleSignUp = async e => {
		e.preventDefault();
		const form = e.target.form;
		const user = {
			"username": form.username.value,
			"password": "",
			"create": true
		}
		let response;
		bcrypt.genSalt(10, async function(err, salt) {
			bcrypt.hash("B4c0/\/", salt, async function(err, hash) {
				user.password = hash;
				await callAPI("POST", user)
			});
		});
		navigateTo("/projects")
	}


	const callAPI = async (method, body) => {
		const requestOptions = {
			method: method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		};

		try{
			await fetch(API_URL, requestOptions)
				.then(res => res.json())
				.then((data) => {
					console.log(data)
				})
				.catch(console.log)
		}catch(e){
			console.log(e);
		}
	}


	return (
		<div className="workSpaceBody">
			<header>
				<title>Slide Navbar</title>
				<link rel="stylesheet" type="text/css" href="slide navbar style.css" />
			</header>

			<main>
				<div className="main">
					<input type="checkbox" id="chk" aria-hidden="true" />

					<div className="signup">
						<form>
							<label for="chk" aria-hidden="true">Sign up</label>
							<input placeholder="Username" type="text" name="username" required="" />

							<span >
								<input
									placeholder="Password"
									 className = "password-input"
									name="password"
									type="password"
									id="password"
									pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
									required=""
								/>
								<div className ="password-hover">
									Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
								</div>
							</span>

							<button onClick={handleSignUp} className="landingButton" type="submit">Sign up</button>
						</form>
					</div>

					<div className="login">
						<form>
							<label for="chk" aria-hidden="true">Login</label>
							<input type="text" name="username" placeholder="Username" required="" />
							<input type="password" name="pswd" placeholder="Password" required="" />
							<button onClick={handleLogin} className="landingButton">Login</button>
						</form>
					</div>
				</div>

			</main>
		</div>
	)
}

//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const API_URL = 'https://fast-tor-11029.herokuapp.com/https://3uck5y4t5g.execute-api.us-east-1.amazonaws.com/live';

export default LandingPage;