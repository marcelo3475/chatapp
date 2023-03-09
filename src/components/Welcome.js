import React from "react";
import { auth } from "../firebase.js";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


const Welcome = () => {
	const googleSignIn = () => {
	const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

return (
	<div style={{marginTop:"1rem"}}>
	<link rel="stylesheet"
        href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css">
    </link>

		<p>Or sign in with Google</p>

		<a href="/#" className="sign-in">
		<img
			class='secondary'
			onClick={googleSignIn}
			src={GoogleSignin}
			alt="sign in with google"
			type="button"
			/>
		</a>
	</div>
    );
};

export default Welcome;
