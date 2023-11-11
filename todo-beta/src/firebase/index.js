

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZhquhVYs6NasgQXUj2F5FPSPB9gkk1vs",
    authDomain: "todos-beta-867d2.firebaseapp.com",
    projectId: "todos-beta-867d2",
    storageBucket: "todos-beta-867d2.appspot.com",
    messagingSenderId: "862599927938",
    appId: "1:862599927938:web:94d40f837fb41d7d937c9b",
    measurementId: "G-28NBWPML7R"
};

// Initialize Firebase
// It's importante to export de 'app' to user in other modules.
export  const app = initializeApp(firebaseConfig); //✅
export  const analytics = getAnalytics(app);

//NOTE: ⚠️⚡ this is the token:  ya29.a0AfB_byBbM9FHPllx5ckva1QVwArlwuEvrxPMjEx4FOhFo89bKPcqesBVRdJCA0agp0WgyJFtJEy7wd9AloIB4Xs4e5bDQlj9CBns-FzLJykysyIRcmHBcWdwiZzcx6-B-YgR7jO804-CYaaivFx1WTbcdDqXMyAEYgaCgYKAUUSARMSFQHGX2MiYkeQNiuaoDffy9pyYxxvHg0169

// Let's export the 'auth'  methods for defualt 
import { getAuth } from 'firebase/auth';
// Let's import the methods that helps us to use 'fire store' cloud in this app
import { getFirestore } from 'firebase/firestore';

//Initialize the auth intance to export all modules.
const auth = getAuth(app);

// Initialize the 'db' and export it for use in whole project.
export const  db = getFirestore(app);
// Export the auth method for default.
export default auth;
