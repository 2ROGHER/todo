import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/index.js";

const provider = new GithubAuthProvider();

function signWithGithubService(auth) {
    signInWithPopup(auth, provider)
        .then((res) => {
            const credential = GithubAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;
            const user = res.user;
        })
        .catch((err) => console.log(err.message));
}

export default signWithGithubService;