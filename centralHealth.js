

  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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






// location.replace("inex.html") --> works like redirect!

firebase.auth().onAuthStateChanged((user) => {
	if(user){
		console.log("welcome");
		// console.log(location);
		
	}
	// if(user.a==null){
	// 	if(location.href=="file:///C:/Users/Lenovo/Desktop/HTML%20Sublime%20f…es%20and%20certificate/cpp/centralHealthHome.html"){
	// 		location.replace("index.html");
	// 	}
	// }
	

})


function clicked(){
	const email=document.getElementById("email").value;
	const password=document.getElementById("password").value;


	firebase.auth().signInWithEmailAndPassword(email,password)
	.then((user) =>{
		console.log(user);
		if(user.user!=null){
			location.replace("centralHealthHome.html");
		}
	})
	.catch((error)=>{
		document.getElementById('message').innerHTML=error;
	})
	

}



function addUser(){
	const auth = firebase.auth();
	const email=document.getElementById("email").value;
	const password=document.getElementById("password").value;
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user!=null){
			location.replace("centralHealthHome.html");
		}
    console.log("added");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('message').innerHTML=error;
    // ..
  });

}


function forgetPassword(){
	const email=document.getElementById("email").value;
	const auth = firebase.auth();

	auth.sendPasswordResetEmail(email)
	.then(() =>{
		alert("Reset Link has been sent to your email address!")
	})
	.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('message').innerHTML=error;
    // ..
  });

}

function logOut(){

	firebase.auth().signOut();
	console.log("signedout");
	location.replace("centralHealth.html");

}




 const db = firebase.firestore();


document.getElementById("searchLoc").addEventListener("click", function searchLocation() {
    
    //to--do---
     const loc=document.getElementById("location").value;
   // console.log(loc);

  db.collection("hospitals").get().then((querySnapshot) => {
    // Boolean flag=false;
    querySnapshot.forEach((doc) => {
        // console.log(doc.data().id ,doc.data().name);
        if(doc.data().location == loc ){

            var node = document.createElement("li");                 // Create a <li> node
            var textnode = document.createTextNode(`${doc.data().name} - ${doc.data().location}`);         // Create a text node
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



document.getElementById("submitSymp").addEventListener("click", function submitSymptoms() {
	// body...

	   //to--do---
	    const a=document.getElementById("p_name").value;
	     const b=document.getElementById("h_name").value;
	      const c=document.getElementById("phone").value;
	       const d=document.getElementById("address").value;
     const e=document.getElementById("exampleFormControlTextarea1").value;



	db.collection("patients").add({
	    p_name: a,
	    h_name: b,
	    phone: c,
	    address: d,
	    symptoms:e,
	})
	.then((docRef) => {
	    console.log("Document written with ID: ", docRef.id);
	})
	.catch((error) => {
	    console.error("Error adding document: ", error);
	});


  alert("Thank you for reaching out! Your appointment details will be messaged to you with 12hrs!");
  	document.getElementById("p_name").value = "";
  	document.getElementById("h_name").value = "";
  	document.getElementById("phone").value = "";
  	document.getElementById("address").value = "";
  	document.getElementById("symptoms").value = "";
  // location.replace("centralHealthHome.html")
});





