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
    
    var current_user = "";
    
        firebase.auth().onAuthStateChanged(function(user){
    
            if(user){
                 //giriş yapıldı mı gönder
                current_user = user.uid;
    
                $(".user-text").text(user.email); //yukardaki e mail için
    
                $("#logout").click(function(){
    
                    firebase.auth().signOut()
                        .then(function(){
                            window.location.href = "login.html";
                        })
                })
    
                //verileri çek
                var FilmRef = firebase.database().ref().child("users/" + current_user).child("filmler");
                FilmRef.on("value", function(snapshot){
    
                    var $parent = $(".tablo").children("tbody");
    
                    $parent.html('');
    
                    snapshot.forEach(function(item){
    

    
                        var movieName_elem = "<td>" + item.val().movieName + "</td>";
                        var movieGenre_elem = "<td>" + item.val().movieGenre + "</td>";
                        var movieYear_elem = "<td>" + item.val().movieYear + "</td>";
                        var movieTime_elem = "<td>" + item.val().movieTime + "</td>";
                        var movieDir_elem = "<td>" + item.val().movieDir + "</td>";
                        var removeBtn_elem = "<td class='text-center'><button data-key='" + item.key + "' class='btn btn-danger btn-block removeBtn'>Sil</button></td>"; 
        
                        $parent.append("<tr>"+movieName_elem+movieGenre_elem+movieYear_elem+movieTime_elem+movieDir_elem+removeBtn_elem +"</tr>");
    
                    })
    
        
                });
    
                ///veri  silme
                $("body").on("click", ".removeBtn", function(){
    
                    var $key = $(this).data("key");
    
                    firebase.database().ref("users/" + current_user).child("filmler").child($key).remove();
    
                }); 
    
    
                /* $("body").on("change", ".switchery-plugin", function(){
    
                    var $completed = $(this).prop("checked");
    
                    var $key = $(this).data("key");
    
                    firebase.database().ref("users/" + current_user).child("todos").child($key).child("completed").set($completed); 
   
                }) */
    
    
            }
    
        })
    
    })
    
    