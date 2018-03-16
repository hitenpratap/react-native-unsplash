import * as firebase from "firebase";

export default class Firebase {
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyAxBWI6132oxLBopUmld2ioghQ1TvASdds",
            authDomain: "unsplash-reactnative.firebaseapp.com",
            databaseURL: "https://unsplash-reactnative.firebaseio.com",
            projectId: "unsplash-reactnative",
            storageBucket: "unsplash-reactnative.appspot.com",
            messagingSenderId: "935824709655"
        });
    }
}