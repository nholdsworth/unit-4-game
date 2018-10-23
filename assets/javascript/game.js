//Prevent javascript from running before page is loaded.
$(document).ready(function () {

    //These are my global variables which I should probably have less of

    //This is the number generator for the number the user has to get to win 
    let randomNumber = Math.floor(Math.random() * 101);
    // console.log(randomNumber);

    //I have to make sure that random number is at least 20
    let startingNumber = 20 + randomNumber;
    console.log(startingNumber);

    //This determines the values of the crystals. 
    let crystalValueArray = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
    console.log(crystalValueArray);

    //Reference to HTML element id "random-number".
    let randomNumberText = $("random-number")

    //Reference to HTML element id "score"
    let score = $("score");

    let crystal1 = $("#crystal-1");

    let crystal2 = $("#crystal-2");

    let crystal3 = $("#crystal-3");

    let crystal4 = $("#crystal-4");

    let emptyCrystalArray = [];

    let crystalsButton = $(".crystals")

    /*A new random number should generate for each crystal and the random number
        everytime we win or lose.*/


    // When you click a crystal the crystal turns into a random number!
    $("#crystal-1").on("click", function () {
        $(this).html(crystalValueArray[0]);
        // alert('fuck');
    });
    
    $("#crystal-2").on("click", function () {
        $(this).html(crystalValueArray[1]);
        // alert('fuck');
    });

    $("#crystal-3").on("click", function () {
        $(this).html(crystalValueArray[2]);
        // alert('fuck');
    });

    $("#crystal-4").on("click", function () {
        $(this).html(crystalValueArray[3]);
        // alert('fuck');
    });

});
