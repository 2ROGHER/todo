
// Let's import the methods to sign options here
import { signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const provider = new FacebookAuthProvider();

const signWithFacebookService = (auth) => {
    signInWithPopup(auth, provider)
        .then((res) => {
            console.log('in the succes promise response');
            let credential = FacebookAuthProvider.credentialFromResult(res);
            console.log('credentials are:' , credential);
        })
        .catch((err) => {
            // TODO: Here we need to implements a component to show the log  message in th
            // view.
            console.log(err.message);
        })
};

// Export the function to use in login view.
export default signWithFacebookService;