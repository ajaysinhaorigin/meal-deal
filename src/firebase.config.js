import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmRuRDfxjvpco1meRoPAnWqa7I9x0VkeQ',
  authDomain: 'meal-deal-app-97ccb.firebaseapp.com',
  projectId: 'meal-deal-app-97ccb',
  storageBucket: 'meal-deal-app-97ccb.appspot.com',
  messagingSenderId: '476115858198',
  appId: '1:476115858198:web:85094ff9009c640f77d637',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
