//INSTRUCTION SLIDE IN AND OUT MENU
 $(document).ready(function(){
  $(".fa-times").click(function(){
      $(".sidebar_menu").addClass("hide_menu");
      $(".toggle_menu").addClass("opacity_one");
  });

  $(".toggle_menu").click(function(){
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
var database=firebase.database();

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

var rpslsArray = [{
    rock:"assets/images/the_rock_eyebrow.gif",
    paper:"assets/images/paper.gif",
    scissor:"assets/images/edward_scissor_hands.gif",
    lizard:"assets/images/godzilla_fire_breather.gif",
    spock:"assets/images/spock.gif"
}];

 // CAPTURE GAMER TAG SUBMISSION WITH BUTTON CLICK
 $("#gamer_tag_button").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

// LOGIC FOR STORING PLAYER NAME
      // Don't forget to provide initial data to your Firebase database.
    name = $("#playerName").val().trim();

    database.ref().set({
        name: name,
      });

    });

// FIREBASE WATCHER + INITIAL LOADER 
database.ref().on("value", function(snapshot) {

// CONSOLE.LOG NAME COMING FROM SNAPSHOT
    console.log(snapshot.val());
    console.log(snapshot.val().name);

// DISPLAY GAMER TAG
$("#player1Name").text(snapshot.val().name);

// ERROR HANDELING
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });

// EVENT LISTENER ON.CLICK FOR CHOICE BUTTONS
$("#player_1_choice").on("click", "#rockBtn1", function () {
    
});
 
//END BRACKET FOR DOCUMENT.READY FUNTION
});