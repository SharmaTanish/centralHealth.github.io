
 const firebaseConfig = {
    apiKey: "AIzaSyB3lO_J4b8xy6Ahtce0uStIYqYDmsGL8aM",
    authDomain: "tanish-firebase-cloud.firebaseapp.com",
    projectId: "tanish-firebase-cloud",
    storageBucket: "tanish-firebase-cloud.appspot.com",
    messagingSenderId: "76002943201",
    appId: "1:76002943201:web:69bf2abc5b0b46e5a9d7a0",
    measurementId: "G-S7M38TSF0Z"
  };

//   // Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();




 const db = firebase.firestore();

window.addEventListener('onLoad', listener());
function listener(){
    console.log(localStorage.getItem("loggedIn"));
    if( localStorage.getItem("loggedIn")=="false"){
        location.replace("hospitalLogin.html");
    }
}


function hospitalLogOut(){
    localStorage.setItem("loggedIn",false);
    location.replace("hospitalLogin.html");
}



$(document).ready(function searchLocation() {
    
    //to--do---
   // console.log("loc");

  db.collection("patients").get().then((querySnapshot) => {
    // Boolean flag=false;
    querySnapshot.forEach((doc) => {
        // console.log(doc.data().id ,doc.data().name);
        if(doc.data().h_name == localStorage.getItem("h_name") ){

            var node = document.createElement("li");                 // Create a <li> node
            var textnode = document.createTextNode(`Name -> ${doc.data().p_name} ,  Phone Number -> ${doc.data().phone} , Address -> ${doc.data().address} , Symptoms ->  ${doc.data().symptoms}`);         // Create a text node
            node.appendChild(textnode);  
            node.className = "list-group-item";
            // Append the text to <li>
            document.getElementById("parent").appendChild(node);  
            // console.log("ecnj");
        }
        // else{
            // document.getElementById("message2").innerHTML="Error:Either name or id is incorrect";
        //     // localStorage.setItem("loggedIn",false);
        // }
        // console.log(`${doc.id} => ${doc.data()}`);
    });
    

});


});





