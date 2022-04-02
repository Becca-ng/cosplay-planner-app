//OK honey I did a lot....it's a bit complicated. Wake me up if this is too confusing.

//Changes are in landing.jsx and cosJournalUser-POST lambda

//First thing I did was modify the User Lambda to only take in Post requests
	/**
	 * The user lambda can take in 
	 * 	Post: username, hashed password, create true //This represents signing up, will create a user and return 'Success User has been created'
	 *  Post: username, raw password, create false //This is the first part of Logging in, The lambda will find the user and compare the password to the hashed one
	 * 												If they do not match, then the server sends back the hashed password and it compares them on the local side (line 37).
	 * 												If the local compare passes, then it will move onto the second part
	 * 	Post: username, hashed password, create false // This is the second part after we get the hashed password for that user from the server and the check locally passes
	 * 													Then we make another callout to the lambda and it will compare the hashed password with the hashed password and return
	 * 													our JWT if they match.
	 * 
	 * Reasons I had to do things this way
	 * - I could not for the life of me get bcrypt to work on an AWS lambda, IDK what it was but it WOULD not work
	 * - Keep JWT token generation on the AWS server for security, can't have a local method available that would generate JWTs
	 * - Prevent adding additional methods and use POST to handle everything. (I just really didn't want to make more lambdas)
	 * 
	 * NAVIGATING TO THE PROJECTS PAGE FOR LOGIN HAPPENS LATER (line 100), SIGN UP NO LONGER NAVIGATES
	 * 
	 * Next steps, 
	 * Now you have your JWT locally stored in Token. 
	 * You can pass that down to other components that need to make calls to save project and stuff but this
	 * should take care of the JWT authentication stuff.
	 * Project lambdas are next on the list.
	 * 
	 * Slight Bugs: Because of how useState updates work, logins with the right password sometimes take 2 tries. Idk how to fix that but I'm tired rn and it works well enough for now.
	 */
