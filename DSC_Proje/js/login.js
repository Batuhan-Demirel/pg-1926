$(document).ready(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCyT2XrDLLD0eP6cyHHpP44jpgRMoQu2QE",
    authDomain: "film-bcea0.firebaseapp.com",
    databaseURL: "https://film-bcea0-default-rtdb.firebaseio.com",
    projectId: "film-bcea0",
    storageBucket: "film-bcea0.appspot.com",
    messagingSenderId: "278002309248",
    appId: "1:278002309248:web:10d1daa4bdadea084cee65"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



    $("#loginBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(){
                window.location.href = "./index.html";
            }).catch(function(error){
                alert(error.message);
        })


    })

})