import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
const bcrypt = require('bcryptjs');

const LandingPage = () => {

	const [token, setToken] = useState('')
	const [formPassword, setFormPassword] = useState('')
	const [username, setUsername] = useState('')
	const [userData, setUserData] = useState(null);

	const navigateTo = useNavigate();

	useEffect(() => {
		comparePasswords(formPassword, userData, username)
	}, [userData]);

	const handleLogin = async e => {
		e.preventDefault();
		const form = e.target.form;
		const user = {
			"username": form.username.value,
			"password": "Do my cats know how cute they are?",
			"create": false
		}
		setFormPassword(form.password.value);
		setUsername(user.username)
		await callAPI("POST", user) 
	}

	const comparePasswords = async (localPassword, data, username) => {
		bcrypt.compare(localPassword, data, async (err, isMatch) => {
			if(isMatch){
				await callAPI("POST", {
					"username": username,
					"password": data,
					"create": false
				}, true);
				console.log("JWT token: " + token);
			} else if (!isMatch) {
				console.log("Bad Password")
			}
		})
	}

	const handleSignUp = async e => {
		e.preventDefault();
		const form = e.target.form;
		const user = {
			"username": form.username.value,
			"password": "",
			"create": true
		}
		bcrypt.genSalt(10, async function(err, salt) {
			bcrypt.hash(form.password.value, salt, async function(err, hash) {
				user.password = hash;
				await callAPI("POST", user)
			});
		});
	}


	const callAPI = async (method, body, token = false) => {
		const requestOptions = {
			method: method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		};

		try{
			await fetch(USERS_API_URL, requestOptions)
				.then(res => res.json())
				.then((data) => {
					if(body.create){
						alert(data.body);
					}else if(token){
						setToken(data.body);
						sessionStorage.setItem('token', data.body);
						sessionStorage.setItem('user', body.username);
						navigateTo("/projects");
					}
					else{
						setUserData(data.body);
					}
				})
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
							<label for="chk" aria-hidden="true" className="loginLabel">Sign up</label>
							<input placeholder="Username" type="text" name="username" required="" className="loginInput"/>

							<span >
								<input
									placeholder="Password"
									 className = "password-input loginInput"
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
							<label for="chk" aria-hidden="true" className="loginLabel">Login</label>
							<input type="text" name="username" placeholder="Username" required="" className="loginInput"/>
							<input type="password" name="password" placeholder="Password" required="" className="loginInput"/>
							<button onClick={handleLogin} className="landingButton">Login</button>
						</form>
					</div>
				</div>

			</main>
		</div>
	)
}

//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const USERS_API_URL = 'https://fast-tor-11029.herokuapp.com/https://3uck5y4t5g.execute-api.us-east-1.amazonaws.com/live';

export default LandingPage;