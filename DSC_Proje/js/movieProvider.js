const apiKey = "976d21e3";
const baseUrl = "https://www.omdbapi.com/?apikey=" + apiKey + "&t=";
const selectors = {
  movieNameInput: "movieNameInput",
  moviePoster: "moviePoster",
  movieName: "movieName",
  movieGenre: "movieGenre",
  movieYear: "movieYear",
  movieTime: "movieTime",
  movieDir: "movieDir",
  moviePlot: "moviePlot",
  fav: "fav",
};

function searchForMovie() {
  const movieName = document.getElementById(selectors.movieNameInput).value;
  const requestUrl = encodeURI(baseUrl + movieName);

  $.ajax({
    url: requestUrl,
    async: false,
    dataType: "json",
    success: function (response) {
      if (response.Error) {
        updateMovieShowcase("", response.Error, "", "", "", "", "");
        return;
      }
      updateMovieShowcase(
        response.Poster,
        response.Title,
        response.Genre,
        response.Year,
        response.Runtime,
        response.Director,
        response.Plot
      );
    },
  });
  document.getElementById("plus").style.display = "inline";
  document.getElementById("movie-showcase").style.display = "inline-flex";
}

function updateMovieShowcase(
  moviePoster,
  movieName,
  movieGenre,
  movieYear,
  movieTime,
  movieDir,
  moviePlot
) {
  document.getElementById(selectors.moviePoster).src = moviePoster;
  document.getElementById(selectors.movieName).innerHTML = movieName;
  document.getElementById(selectors.movieGenre).innerHTML = movieGenre;
  document.getElementById(selectors.movieYear).innerHTML = movieYear;
  document.getElementById(selectors.movieTime).innerHTML = movieTime;
  document.getElementById(selectors.movieDir).innerHTML = movieDir;
  document.getElementById(selectors.moviePlot).innerHTML = moviePlot;
}

$(document).ready(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCyT2XrDLLD0eP6cyHHpP44jpgRMoQu2QE",
    authDomain: "film-bcea0.firebaseapp.com",
    databaseURL: "https://film-bcea0-default-rtdb.firebaseio.com",
    projectId: "film-bcea0",
    storageBucket: "film-bcea0.appspot.com",
    messagingSenderId: "278002309248",
    appId: "1:278002309248:web:10d1daa4bdadea084cee65",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var current_user = "";

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      //giriş yapıldı mı gönder
      current_user = user.uid;

      $("#logout").click(function () {
        firebase
          .auth()
          .signOut()
          .then(function () {
            window.location.href = "login.html";
          });
      });

 
      //Bundan sonrası Data base e çek

      //veri gönder
      $(".sendToFireBase").click(function () {
        const hata="Movie not found!";
        const hata2="Incorrect IMDb ID." ;
        if(($("#movieName").text() == hata) || ($("#movieName").text() == hata2) ){
          alert("Film Bulunamadı..")
        }else{ 
          var movieName = $("#movieName").text();
          var movieGenre = $("#movieGenre").text();
          var movieYear = $("#movieYear").text();
          var movieTime = $("#movieTime").text();
          var movieDir = $("#movieDir").text();
          var moviePlot = $("#moviePlot").text();

          firebase
            .database()
            .ref()
            .child("users")
            .child(current_user)
            .child("filmler")
            .push({
              movieName: movieName,
              movieGenre: movieGenre,
              movieYear: movieYear,
              movieTime: movieTime,
              movieDir: movieDir,
              moviePlot: moviePlot,
            });
        }

      });
    }
  });
});
