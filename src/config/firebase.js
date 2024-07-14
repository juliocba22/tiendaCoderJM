// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import {addDoc, collection, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8DPWwV7z3fLqALLBFhStlxiuSqZ2JmTs",
  authDomain: "codertienda-11cf3.firebaseapp.com",
  projectId: "codertienda-11cf3",
  storageBucket: "codertienda-11cf3.appspot.com",
  messagingSenderId: "358052845007",
  appId: "1:358052845007:web:a17fc76476c623f88beeba"
};

console.log('Se conecto a BD')
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
console.log('Se conecto a BD')
/*productos.forEach((prod)=>{
  addDoc(collection(db,'productos'),prod)
  .then((elem)=>console.log('Se agrego el producto id ${elem.id}'))
  .catch((error)=>console.log(error));

});*/