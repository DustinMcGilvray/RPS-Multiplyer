$(document).ready(function () {
    //INSTRUCTION SLIDE IN AND OUT MENU
    $(".fa-times").click(function () {
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle_menu").addClass("opacity_one");
    });
    $(".toggle_menu").click(function () {
        $(".sidebar_menu").removeClass("hide_menu");
        $(".toggle_menu").removeClass("opacity_one");
    });

    //BACKGROUND ANIMATION
    var particles = Particles.init({
        selector: '.background',
        color: 'white'
    });

    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyBs5ysxfb6IoP1NJYH5czYORlNSjOoTtLM",
        authDomain: "rpsls-multiplayer.firebaseapp.com",
        databaseURL: "https://rpsls-multiplayer.firebaseio.com",
        projectId: "rpsls-multiplayer",
        storageBucket: "",
        messagingSenderId: "401374229161"
    };
    firebase.initializeApp(config);

    //GET A REFERENCE TO THE DATABASE
    var database = firebase.database();

    //GLOBAL VARIABLES/INITIAL VALUES
    //DETERMINE NUMBER OF PLAYERS
    var numPlayers = 0;
    //CHOICE OF PLAY OBJECTS STORED HERE
    var player1 = null;
    var player2 = null;
    //SUBMITTED GAMER TAGS STORED HERE
    var player1GamerTag = "";
    var player2GamerTag = "";
    //PLAYERS CHOICE STORED HERE
    var player1Choice = "";
    var player2Choice = "";
    //DETERMINE WHICH PLAYERS TURN IT IS
    var playerTurn = 0;

    var rpslsArray = {
        rock: "assets/images/the_rock_eyebrow.gif",
        paper: "assets/images/paper.gif",
        scissor: "assets/images/edward_scissor_hands.gif",
        lizard: "assets/images/godzilla_fire_breather.gif",
        spock: "assets/images/spock.gif"
    };

    // CAPTURE GAMER TAG SUBMISSION WITH BUTTON CLICK
    $("#gamer_tag_button").on("click", function (event) {
        // Don't refresh the page!
        event.preventDefault();
        // LOGIC FOR STORING PLAYER NAME
        name = $("#player1Name").val().trim();
        database.ref().push({
            name: name
        });
    });
    // FIREBASE WATCHER + INITIAL LOADER 
    database.ref().on("value", function (snapshot) {
        // CONSOLE.LOG NAME COMING FROM SNAPSHOT
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        // DISPLAY GAMER TAG
        $("#player1Name").text(snapshot.val().name);
        // ERROR HANDELING
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });




    // CAPTURE PLAYER CHOICE FOR GAME PLAY WITH BUTTON CLICK
    $("#rockBtn1").on("click", function (event) {
        console.log("click");
        event.preventDefault();

        player1Choice = $("#rockBtn1").text().trim();
        var newImage = rpslsArray.player1Choice
        $("#player_1_choice").attr("src", newImage);
        console.log(player1Choice + "This is Working!");
        database.ref().push({
            player1Choice: player1Choice
        });
    });
    // FIREBASE WATCHER + INITIAL LOADER 
    database.ref().on("value", function (snapshot) {
        // CONSOLE.LOG NAME COMING FROM SNAPSHOT
        console.log("snapshot.val is " + snapshot.val());
        console.log(snapshot.val().player1Choice);
        //DISPLAY ROCK BUTTON IMAGE
        $("#player_1_choice").html(snapshot.val().rpslsArray.rock);
        // ERROR HANDELING
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });







//END BRACKET FOR DOCUMENT.READY FUNCTION
});
