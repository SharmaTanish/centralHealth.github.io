
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

// Get a list of cities from your database
 function hospitalLogInFunc() {

    const name=document.getElementById("email2").value;
    const password=document.getElementById("password2").value;

  db.collection("hospitals").get().then((querySnapshot) => {
    // Boolean flag=false;
    querySnapshot.forEach((doc) => {
        // console.log(doc.data().id ,doc.data().name);
        if(doc.data().id == password && doc.data().name==name){

            localStorage.setItem("loggedIn",true);
            localStorage.setItem("h_name",name);

            location.replace("hospitalDashboard.html");
        }
        // else{
            // document.getElementById("message2").innerHTML="Error:Either name or id is incorrect";
        //     // localStorage.setItem("loggedIn",false);
        // }
        // console.log(`${doc.id} => ${doc.data()}`);
    });
    setTimeout( () =>{
    document.getElementById("message2").innerHTML="Error:Either name or id is incorrect";
}
    ,1000);

});


}

function hospitalLogOut(){
    localStorage.setItem("loggedIn",false);
    localStorage.setItem("h_name","");
    location.replace("hospitalLogin.html");
}



document.getElementById("form2").addEventListener("submit",(event) => event.preventDefault());







