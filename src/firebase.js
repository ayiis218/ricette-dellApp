import { GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import "firebase/compat/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAi0HOP9C9pkz_6vrfwcrhiCTZnaGRJ2EE",
    authDomain: "ricette-dellapp.firebaseapp.com",
    projectId: "ricette-dellapp",
    storageBucket: "ricette-dellapp.appspot.com",
    messagingSenderId: "457417238580",
    appId: "1:457417238580:web:20e077684711881abc8261",
    measurementId: "G-3LF1QNBS2X"
  };

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
const provider = new GoogleAuthProvider()

export { provider, analytics, app }