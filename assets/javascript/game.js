// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
//var targetScore = Math.floor((Math.random() * 120) + 19);
var targetScore = 20
var totalScore = 0;
var wins=0
var losses=0
$("#targetScore").text(targetScore)
$("#yourScore").text(totalScore)
$(".winscore").text("wins: " + wins)
$(".losescore").text("losses: " + wins)

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
$(".diamond").on("click", function () {
    
    var btnVal = parseInt ( $(this).val());
   
    // add the btnVal to totalScore
    totalScore = btnVal + totalScore;
    $("#yourScore").text(totalScore)

    if ( targetScore === totalScore) {
        alert("WIN");
        totalScore=0;
        $("#yourScore").text(totalScore);
        wins++;
        console.log(wins);
        $(".winscore").text("wins: "+ wins);
    }

    if (totalScore > targetScore) {
        alert ("LOSE");
        losses++;
        $(".losescore").text("losses: " +losses);
    }

});


// Your game will hide this amount until the player clicks a crystal. DONE

// When they do click one, update the player's score counter. DONE


// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.