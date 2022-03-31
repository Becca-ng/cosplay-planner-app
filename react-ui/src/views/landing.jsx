import { NavLink, useNavigate } from "react-router-dom";
// import bcrypt from "bcrypt";

const LandingPage = () => {

	const navigateTo = useNavigate();

	const handleLogin = async e => {
		e.preventDefault();
		console.log(e.target.data);
		await callAPI("GET", {"username":"testUser", "password":"passwordToHash"})
		navigateTo("/projects");
	}
	
	const handleSignUp = async e => {
		e.preventDefault();
		const form = e.target.form;
		const user = {
			"username" : form.username.value,
			"password" : form.password.value
		}
		console.log(user)
		await callAPI("POST", user)
	}


	const callAPI = async (method, body) => {
		const requestOptions = {
			method: method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		};

		//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
		await fetch(API_URL, requestOptions)
			.then(res => res.json())
			.then((data) => {
				console.log(data)
			})
				.catch(console.log)
	}


	return (
		<div className="workSpaceBody">
			<header>
				<title>Slide Navbar</title>
				<link rel="stylesheet" type="text/css" href="slide navbar style.css" />
				<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
			</header>

			<main>
				<div className="main">
					<input type="checkbox" id="chk" aria-hidden="true" />

					<div class="signup">
						<form>
							<label for="chk" aria-hidden="true">Sign up</label>
							<input type="text" name="username" placeholder="User name" required="" />
							<input type="email" name="email" placeholder="Email" required="" />
							<input type="password" name="password" placeholder="Password" required="" />
							<button onClick={handleSignUp} className="landingButton" type="submit">Sign up</button>
						</form>
					</div>

					<div class="login">
						<form>
							<label for="chk" aria-hidden="true">Login</label>
							<input type="email" name="email" placeholder="Email" required="" />
							<input type="password" name="pswd" placeholder="Password" required="" />
							<button onClick={handleLogin} className="landingButton">Login</button>
						</form>
					</div>
				</div>

			</main>
		</div>
	)
}

const API_URL = 'https://fast-tor-11029.herokuapp.com/https://l80b9v6lai.execute-api.us-east-1.amazonaws.com/Prod';

export default LandingPage;