import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Let's create a instance of GoogleAuthProvider for use the login with Google service.
// 'provider' stands the name of the provider servicer, in this case Google.
const provider = new GoogleAuthProvider();

const signWithGoogleService = (auth) => {
    console.log('this is the auth', auth);
    signInWithPopup(auth, provider)
        .then((res) => {
            const credentials = GoogleAuthProvider.credentialFromResult(res);
            console.log('this are all credentials', credentials);
            const token = credentials.accessToken ;
            console.log('this is the token', token);
            const user = res.user;
            console.log('this is the user', user)
        })
        .catch((err) => {
            console.log(err.message);
        });
};

// Export the service to login with google.
export default signWithGoogleService;