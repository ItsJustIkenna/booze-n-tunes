$(document).ready(function () {
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
  ];
  var excitedPlaylistIDs = [
    "37i9dQZF1DX6GwdWRQMQpq",
    "37i9dQZF1DX4fpCWaHOned",
    "37i9dQZF1DWYBO1MoTDhZI",
    "37i9dQZF1DX2SlyIbbHgFa",
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
  ];
  var sadCocktailIDs = [
    "11003",
    "17251",
    "11008",
    "11001",
    "17827",
    "17829",
    "12127",
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
  ];

  var mood = JSON.parse(localStorage.getItem("Mood")) || [];
  console.log(mood);
  // $(".dropdown-menu").css({
  //   'padding-left': ($(".btn-mood").width() + 'px'),
  //   'padding-right': ($(".btn-mood").width() + 'px'),
  //   // 'width': ($(".dropdown-divider").width() + 'px')
  // });

  var giphyAPIKey = "enKBHKanFHkoiz7Nc7Yu1UeJWgpX2seY";

  $("#happy").on("click", function () {
    var queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&q=happy`;
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });

  $("#sad").on("click", function () {
    var queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&q=sad`;
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });

  $("#excited").on("click", function () {
    var queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&q=excited`;
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });

  $("#chill").on("click", function () {
    var queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&q=chill`;
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });

  $("#classy").on("click", function () {
    var queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&q=classy`;
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });

  var spotifyPlayer = $("#spotify-playlist");


  $(".dropdown-item").on("click", function(event) {
    var userMood = $(event.target).text();
    console.log(userMood);
    localStorage.setItem("Mood", userMood);
  })


  $("#change-playlist").on("click", function () {
    console.log("Changed");
    var randomID = Math.floor(Math.random() * happyPlaylistIDs.length);
    var playlistID = happyPlaylistIDs[randomID];
    var embedURL = `https://open.spotify.com/embed/playlist/${playlistID}`;
    $(spotifyPlayer).attr("src", embedURL);
  });

  $("#change-drink").on("click", function () {
    console.log("CLICKED");
    var randomID = Math.floor(Math.random() * happyCocktailIDs.length);
    var cocktailID = happyCocktailIDs[randomID];
    console.log(cocktailID);
    var cocktailDBQueryURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`;

    $.ajax({
      url: cocktailDBQueryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });
});
