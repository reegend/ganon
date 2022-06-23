console.log("Start From Scratch");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{
    getFirestore, collection, getDocs, snapshotEqual,
    addDoc, deleteDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcLT-qr1zh_njkS0y1SesLY2L7dF9-P3M",
  authDomain: "team4-5632d.firebaseapp.com",
  projectId: "team4-5632d",
  storageBucket: "team4-5632d.appspot.com",
  messagingSenderId: "44761875007",
  appId: "1:44761875007:web:3630b10e855f37432aae8a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const flightRef = collection(db, 'flights');

//get data from collections
//console.log(flightRef)

getDocs(flightRef) 
  .then((snapshot)=>{
      let flight = [];
      snapshot.docs.forEach((documents)=>{
          flight.push({...documents.data(), id: documents.id});
          //console.log(flight)
      });

  })
  .catch((err) =>{
      console.error(err);
  })
  //console.log(flight)
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
      }
  outputHTML += "</table>"
      document.getElementById('flightshelf').innerHTML = outputHTML;
      console.log(flights)
  })
  .catch(err =>{
      console.error(err);
  })

  console.log("at the end");
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