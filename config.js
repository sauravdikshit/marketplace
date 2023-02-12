//firebase config key setup 

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import  'firebase/compat/firestore'


//firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDjE5IproEZ3YL7ZAZT4R2ku7M0Ng2jv34",
      authDomain: "market-place-71dbd.firebaseapp.com",
      projectId: "market-place-71dbd",
      storageBucket: "market-place-71dbd.appspot.com",
      messagingSenderId: "819423809065",
      appId: "1:819423809065:web:091499a9196124e52a9638",
      measurementId: "G-4XDMSPLCCL"
    };

    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)

   

    }


     export{firebase}