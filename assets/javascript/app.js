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

    //INITIALIZE FIREBASE
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
        //ARRAY OF GIFS REPRESENTING PLAYER CHOICES
        var rpslsArray = {
        rock: "assets/images/the_rock_eyebrow.gif",
        paper: "assets/images/paper.gif",
        scissors: "assets/images/edward_scissor_hands.gif",
        lizard: "assets/images/godzilla_fire_breather.gif",
        spock: "assets/images/spock.gif"
        };

    // CAPTURE GAMER TAG SUBMISSION WITH BUTTON CLICK
    $("#gamer_tag_button").on("click", function (event) {
        // Don't refresh the page!
        event.preventDefault();
        // LOGIC FOR STORING PLAYER NAME
        name = $("#playerName").val().trim();
        database.ref().push({
            name: name  
        });

        $("#playerName").val("");
    });

    // FIREBASE WATCHER + INITIAL LOADER 
    database.ref().on("value", function (snapshot) {
        // CONSOLE.LOG NAME COMING FROM SNAPSHOT
        console.log(snapshot.val());
        console.log(snapshot.val().name);

        // DISPLAY GAMER TAG FOR PLAYER 1
        $("#player1Name").text(name);

        // ERROR HANDELING
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });

    // CAPTURE PLAYER CHOICE FOR GAME PLAY WITH BUTTON CLICK
    $(".btn-group button").on("click", function (event) {
        console.log("click");
        event.preventDefault();
        //UPDATE PLAYER1CHOICE VARIABLE WITH THE BUTTON TEXT OF *WHATEVER BUTTON CLICK ON* BY USING $(this).
        player1Choice = $(this).text().trim();
        
        
        //USING BRACKET NOTATION INSTEAD OF DOT NOTATION BECAUSE THE PROPERTY DATA TYPE WASN"T THE SAME
        //AS THE PLAYER1CHOICE DATA TYPE (WHICH WAS A STRING...)
        var newImage = rpslsArray[player1Choice];
            console.log({newImage})

        //CHANGING SRC ATTRIBUTE TO THE CORRESPONDING IMAGE URL OF THE IMAGE WE CLICKED ON
            $("#player_1_choice").attr("src", newImage);
        console.log(player1Choice + "This is Working!");
        
        database.ref().push({
            player1Choice: player1Choice,
           
        }); 
    });


    // CAPTURE PLAYER CHOICE FOR GAME PLAY WITH BUTTON CLICK
    $(".btn-group 2 button").on("click", function (event) {
        console.log("click");
        event.preventDefault();
        //UPDATE PLAYER1CHOICE VARIABLE WITH THE BUTTON TEXT OF *WHATEVER BUTTON CLICK ON* BY USING $(this).
        player2Choice = $(this).text().trim();
        
        //USING BRACKET NOTATION INSTEAD OF DOT NOTATION BECAUSE THE PROPERTY DATA TYPE WASN"T THE SAME
        //AS THE PLAYER1CHOICE DATA TYPE (WHICH WAS A STRING...)
        var newImage2 = rpslsArray[player2Choice];
            console.log({newImage2})
        //CHANGING SRC ATTRIBUTE TO THE CORRESPONDING IMAGE URL OF THE IMAGE WE CLICKED ON
        
            $("#player_2_choice").attr("src", newImage2);
        console.log(player2Choice + "This is Working Too!");
        
        database.ref().push({
            player2Choice: player2Choice
 
        }); 
    });






















    // // FIREBASE WATCHER + INITIAL LOADER 
    database.ref().on("value", function (snapshot) {
        // CONSOLE.LOG NAME COMING FROM SNAPSHOT
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log("snapshot.val is " + snapshot.val());
        console.log(snapshot.val().player1Choice);
        //DISPLAY ROCK BUTTON IMAGE
        $("#player_1_choice").append(snapshot.val().rpslsArray.rock);
        // ERROR HANDELING
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });







//END BRACKET FOR DOCUMENT.READY FUNCTION
});
