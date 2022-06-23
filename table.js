import { initializeApp } from 'firebase/app';

import { 
    getFirestore, collection, getDocs, addDoc, deleteDoc, updateDoc,doc
 } from 'firebase/firestore';


// Initialize The App

const firebaseConfig = {
    apiKey: "AIzaSyCNjGu9WuxhMbPAaw-oSU_qnAG2c8z3cDQ",
    authDomain: "dominguez-sandbox.firebaseapp.com",
    projectId: "dominguez-sandbox",
    storageBucket: "dominguez-sandbox.appspot.com",
    messagingSenderId: "412235600764",
    appId: "1:412235600764:web:f225909a6bf5fab2234af9"
  };



  //Start up the Firebase App
initializeApp(firebaseConfig);

  //Initialize Services
const db = getFirestore();

  //Create Collections References
  //From Firestore
const flightRef = collection(db, 'flights');

function displayflights() {
  getDocs(flightRef)
      .then((snapshot)=>{
          let flights = [];
          snapshot.docs.forEach((documents) => {
              flights.push({...documents.data(), id: documents.id});
              //console.log(songs);
              //console.log(documents.data());
              //console.log(documents.id);
          });
          var outputHTML =  "<table> <tr><th>Title</th><th>Artist</th><th>Year</th><th>Rating</th><th>Id</th></tr>";
          for (let i = 0; i<flights.length;i++) {
            outputHTML += "<tr>"
            outputHTML += "<td>" + flights[i].aircraft + "</td>"
            outputHTML += "<td>" + flights[i].duration + "</td>"
            outputHTML += "<td>" + flights[i].incoming + "</td>"
            outputHTML += "<td>" + flights[i].outgoing + "</td>"
            outputHTML += "<td>" + flights[i].id + "</td>"
            outputHTML += "</tr>"
            outputHTML += "</table>"
          }
      outputHTML += "</table>"
          document.getElementById('flightshelf').innerHTML = outputHTML;
          console.log(flights)
      })
      .catch(err =>{
          console.error(err);
      })
  }
  displayflights();


