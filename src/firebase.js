import { GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import "firebase/compat/auth"


const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
}

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
const provider = new GoogleAuthProvider()

export { provider, analytics, app }