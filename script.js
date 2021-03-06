$(document).ready(function () {
  // playlist arrays for each mood
  var happyPlaylistIDs = [
    "37i9dQZF1DX9u7XXOp0l5L",
    "37i9dQZF1DX0UrRvztWcAU",
    "37i9dQZF1DWVOMXLzSabIM",
    "37i9dQZF1DX5YTAi6JhwZm",
    "37i9dQZF1DX1H4LbvY4OJi",
    "37i9dQZF1DWSf2RDTDayIx",
    "37i9dQZF1DX84kJlLdo9vT",
    "37i9dQZF1DWWS0ll5RduHB",
    "37i9dQZF1DWSqmBTGDYngZ",
    "37i9dQZF1DX1BzILRveYHb",
    "37i9dQZF1DWVinJBuv0P4z",
  ];
  var sadPlaylistIDs = [
    "37i9dQZF1DWVV27DiNWxkR",
    "37i9dQZF1DXbm0dp7JzNeL",
    "37i9dQZF1DWVrtsSlLKzro",
    "37i9dQZF1DX64Y3du11rR1",
    "37i9dQZF1DX7gIoKXt0gmx",
    "37i9dQZF1DX3YSRoSdA634",
    "37i9dQZF1DWUNIrSzKgQbP",
    "37i9dQZF1DWYxwmBaMqxsl",
    "37i9dQZF1DWTtTyjgd08yp",
    "37i9dQZF1DWX83CujKHHOn",
    "37i9dQZF1DWSqBruwoIXkA",
  ];
  var classyPlaylistIDs = [
    "0QVlJusU4kMLTuEV0RU2K8",
    "1y2ieBKQblbhS070udm0qz",
    "1eIg0A4RHNrhJoYDVWTagC",
    "37i9dQZF1DX4AyFl3yqHeK",
    "37i9dQZF1DWVleyMkaelTd",
    "1JMXl388XQ2ItkL3HJXlQr",
    "55RF7ab1Z4Z8x5q5hgSErG",
    "4oL6DUD5eQEI1lz2ILE9Kp",
    "7ypcSFIYq7VAE4hSRs2V9o",
  ];
  var excitedPlaylistIDs = [
    "37i9dQZF1DX6GwdWRQMQpq",
    "37i9dQZF1DX4fpCWaHOned",
    "37i9dQZF1DWYBO1MoTDhZI",
    "37i9dQZF1DX2SlyIbbHgFa",
    "37i9dQZF1DXa2PvUpywmrr",
    "37i9dQZF1DX4Vd1jJ7X9H8",
    "37i9dQZF1DXaXB8fQg7xif",
    "37i9dQZF1DWWXrKtH3fzUd",
  ];
  var chillPlaylistIDs = [
    "37i9dQZF1DX2yvmlOdMYzV",
    "37i9dQZF1DWUE76cNNotSg",
    "37i9dQZF1DWYiR2Uqcon0X",
    "37i9dQZF1DXa3NnZWk6Z3T",
    "37i9dQZF1DWYzpSJHStHHx",
    "37i9dQZF1DWYMroOc5KTTh",
    "37i9dQZF1DXcNb6Ba0LuVc",
    "37i9dQZF1DX1tW4VlEfDSS",
    "37i9dQZF1DWWQRwui0ExPn",
    "0vvXsWCC9xrXsKd4FyS8kM",
  ];
  // cocktail arrays for each mood
  var happyCocktailIDs = [
    "17196",
    "11288",
    "11006",
    "17211",
    "11403",
    "11000",
    "17201",
    "11007",
    "17253",
    "17207",
    "12308",
    "12402",
    "12528",
    "17186",
  ];
  var sadCocktailIDs = [
    "11003",
    "17251",
    "11008",
    "11001",
    "17827",
    "17829",
    "12127",
    "13899",
    "11016",
    "178310",
    "17250",
    "17198",
  ];
  var excitedCocktailIDs = [
    "13731",
    "11009",
    "15853",
    "17181",
    "13202",
    "11202",
    "14956",
    "11600",
    "17204",
    "11007",
    "17241",
    "17060",
    "15288",
    "16134",
  ];
  var chillCocktailIDs = [
    "13026",
    "11113",
    "17205",
    "178325",
    "17252",
    "178343",
    "13971",
    "17212",
    "12107",
    "12402",
    "17217",
    "12988",
    "11112",
    "17210",
    "178340",
  ];
  var classyCocktailIDs = [
    "18170",
    "17206",
    "17185",
    "11005",
    "11008",
    "17249",
    "12127",
    "17247",
    "12452",
    "17840",
    "17184",
    "17197",
    "17255",
  ];
  // created local storage key:mood
  var mood = localStorage.getItem("Mood");
  if (mood === null) {
    localStorage.setItem("Mood", "Happy");
  } else {
    mood = localStorage.getItem("Mood");
  }
  console.log(mood);

  //defines api key and random ID key for giphy api call
  var giphyAPIKey = "enKBHKanFHkoiz7Nc7Yu1UeJWgpX2seY";
  var randomIdUrl = `https://api.giphy.com/v1/randomid?api_key=${giphyAPIKey}`;
  var spotifyPlayer = $("#spotify-playlist");
  //runs functions to load playlist cocktail and playlist on page load
  setPlaylist(mood);
  setCocktail(mood);
  setGif(mood);

  //adjust mood info depending on user's set mood
  $("#mood-type").text("Feelin' " + mood);
  if (mood === "Happy") {
    $("#mood-message").text("Let's have a drink!");
  } else if (mood === "Sad") {
    $("#mood-message").text("It's good to cry sometimes");
  } else if (mood === "Classy") {
    $("#mood-message").text("Remember, pinkies up.");
  } else if (mood === "Excited") {
    $("#mood-message").text("Time to Party!");
  } else if (mood === "Chill") {
    $("#mood-message").text("Just sit back and relax.");
  }
  //pulls random gif on user's set mood and displays it on results page
  function setGif() {
    $.ajax({
      url: randomIdUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      var queryUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=${mood}&random_id=${response.data.random_id}`;
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (res) {
        console.log(res);
        var img = $("<img>").attr("src", res.data.images.downsized_medium.url);
        img.attr("style", "width: 250px;");
        console.log(img);
        $(".giphy-block").append(img);
      });
    });
  }

  //pulls random ID from the relative array and inserts into embedded spotify player
  function setPlaylist(mood) {
    if (mood === "Happy") {
      var userPlaylists = happyPlaylistIDs;
    } else if (mood === "Sad") {
      var userPlaylists = sadPlaylistIDs;
    } else if (mood === "Party" || mood === "Excited") {
      var userPlaylists = excitedPlaylistIDs;
    } else if (mood === "Chill") {
      var userPlaylists = chillPlaylistIDs;
    } else if (mood === "Classy") {
      var userPlaylists = classyPlaylistIDs;
    }
    console.log("Playlists");
    var randomID = Math.floor(Math.random() * userPlaylists.length);
    var playlistID = userPlaylists[randomID];
    var embedURL = `https://open.spotify.com/embed/playlist/${playlistID}`;
    console.log(randomID);
    $(spotifyPlayer).attr("src", embedURL);
  }

  //pulls random ID from the relative cocktail array and adds drink image, name, and instructions to ingredients
  function setCocktail(mood) {
    if (mood === "Happy") {
      var userCocktails = happyCocktailIDs;
    } else if (mood === "Sad") {
      var userCocktails = sadCocktailIDs;
    } else if (mood === "Party" || mood === "Excited") {
      var userCocktails = excitedCocktailIDs;
    } else if (mood === "Chill") {
      var userCocktails = chillCocktailIDs;
    } else if (mood === "Classy") {
      var userCocktails = classyCocktailIDs;
    }
    console.log("Drinks");
    var randomID = Math.floor(Math.random() * userCocktails.length);
    var cocktailID = userCocktails[randomID];
    var cocktailDBQueryURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`;

    $.ajax({
      url: cocktailDBQueryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      var info = response.drinks[0];
      var ingredients = [
        info.strIngredient1,
        info.strIngredient2,
        info.strIngredient3,
        info.strIngredient4,
        info.strIngredient5,
        info.strIngredient6,
        info.strIngredient7,
        info.strIngredient8,
      ];
      var measurements = [
        info.strMeasure1,
        info.strMeasure2,
        info.strMeasure3,
        info.strMeasure4,
        info.strMeasure5,
        info.strMeasure6,
        info.strMeasure7,
        info.strMeasure8,
      ];
      $("#drink-name").text(info.strDrink);
      $("#drink-image").attr("src", info.strDrinkThumb);
      $("#drink-image").attr("style", "width: 200px");
      $("#drink-instructions").text(info.strInstructions);
      $("li").remove();
      for (var i = 0; i < ingredients.length; i++) {
        if (ingredients[i] === null || measurements[i] === null) {
          return;
        } else {
          var newIng = $("<li>").attr("style", "color:white; text-align: left");
          newIng.text(measurements[i] + " " + ingredients[i]);
          $("#ingredients-list").append(newIng);
        }
      }
      console.log(ingredients);
      console.log(measurements);
    });
  }

  //click function that changes mood in local storage to user choice
  $(".dropdown-item").on("click", function (event) {
    var userMood = $(event.target).text();
    console.log(userMood);
    localStorage.setItem("Mood", userMood);
    location.reload();
  });

  //reruns the setplaylist function without reloading the page
  $("#change-playlist").on("click", function () {
    console.log("Changed");
    setPlaylist(mood);
  });
  //reruns the setcocktail function without reloading the page
  $("#change-drink").on("click", function () {
    console.log("CLICKED");
    setCocktail(mood);
  });
});
