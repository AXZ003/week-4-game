$(document).ready(function() {

var losses = 0;
var wins = 0;
var targetNumber = '';
var imageValue = ["1","2","3","4","5","6","7","8","9","10","11","12",]
var countries = $("#countries");
var total = 0;
var winsId = $("#wins");
var lossesId = $("#losses");
var totalscore = $("#score");
var randomNumber = $("#number-to-guess");


    var computerGuess = function (min, max) {
        return Math.floor(Math.random()*(max-min)+min);
        }


    var targetNumber = computerGuess(19,120);
    $(randomNumber).append(targetNumber);

    

    var country1 = computerGuess(1,12);
    console.log(computerGuess)
    var country2 = computerGuess(1,12);
    var country3 = computerGuess(1,12);
    var country4 = computerGuess(1,12);
        
 
 $(totalscore).html(total);
    
//Adding to total score based on user clicks, then running the check function to test the outcome
$(".country1").on("click", function(){
    total += country1;
    $(totalscore).html(total);
    check();
})
       
$(".country2").on("click", function(){
    total += country2;
    $(totalscore).html(total);
    check();
})
$(".country3").on("click", function(){
    total += country3;
    $(totalscore).html(total);
    check();
})
$(".country4").on("click", function(){
    total += country4;
    $(totalscore).html(total);
    check();
})


var reset = function() {
    country1 = computerGuess(1,12);
    country2 = computerGuess(1,12);
    country3 = computerGuess(1,12);
    country4 = computerGuess(1,12);
};




//Checks to see if user total score matches the random number
var check = function() {


    if (targetNumber == total) {
		wins++;
		$(winsId).html(wins);
		$(randomNumber).empty();
		targetNumber = computerGuess(19,120);
		$(randomNumber).html(targetNumber);
		total = 0;
		$(totalscore).html(total)
		reset();
	}
	if (targetNumber < total) {
		losses++;
		$(lossesId).html(losses);
		$(randomNumber).empty();
		targetNumber = computerGuess(19,120);
		$(randomNumber).html(targetNumber);
		total = 0;
		$(totalscore).html(total)
		reset();
	}

}

});

