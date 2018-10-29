// Prevent javascript from running before page is loaded.
$(document).ready(function () {
    // Adding a class and css styling
    $("h1, p").addClass("words");
    

    // Adding font style using jquery

    // I am using jquery to resize all my images FIXME: I cant figure out how to get rid of the white space around my images... 
    $("img").css({"width": "9.25em", "height": "9.25em"});
    



    // These are my global variables which I should probably have less of

    // This is the number generator for the number the user has to get to win 
    let randomNumber = Math.floor(Math.random() * 102 + 19);
    console.log(randomNumber);

    // This is an empty array to hold the 4 random number crystal values generated by the for loop below
    let crystalArray = [];
    // I have to make sure that random number is at least 19
    // let startingNumber = 19 + randomNumber;
    // console.log(startingNumber);

    
    // TODO:make this into a four loop
    // These variables generate a random number to the corresponding crystal 
    function crystalNumbers () {
        
        for(let i = 0; i < 4; i++) {
            crystalArray.push(Math.floor(Math.random() * 12 + 1));
        }
        console.log(crystalArray);
    }
    
    crystalNumbers();

    // let crystal1 = Math.floor(Math.random() * 12 + 1);
    // console.log(crystal1);

    // let crystal2 = Math.floor(Math.random() * 12 + 1);
    // console.log(crystal2);

    // let crystal3 = Math.floor(Math.random() * 12 + 1);
    // console.log(crystal3);

    // let crystal4 = Math.floor(Math.random() * 12 + 1);
    // console.log(crystal4);

    //This are the starting value of the score tracker, win counter and losses counter
    let score = 0;

    let wins = 0;

    let losses = 0;

    // TODO: I challenge me to figure out how to make this a for loop!!
    // FIXME: figure out why my reset function isn't working
    // function that I can call to replace the random number in each crystal when the game resets
    function reset () {

        crystalArray = [];

        crystalNumbers();
        
        // crystal1 = Math.floor(Math.random() * 12 + 1);
        
        // crystal2 = Math.floor(Math.random() * 12 + 1);

        // crystal3 = Math.floor(Math.random() * 12 + 1);

        // crystal4 = Math.floor(Math.random() * 12 + 1);

        randomNumber = Math.floor(Math.random() * 102 + 19);

        score = 0;

        $("#score").html(score);

        $("#random-number").html(randomNumber);

    }
    
    // generate a random number at the beginning of each game
    $(document).keyup(function startKey() {
        
        $("#random-number").html(randomNumber);
    
    });

    // When you click a crystal the crystal is assigned a random value and adds it to the total score!
    $("#crystal-1").on("click", function crystal1Click() {

        $(this).val(crystalArray[0]);
        
        $("#score").html(score += crystalArray[0]);
        
        if(score === randomNumber) {
            
            alert('YOU WIN!!!');
            
            reset ();
            console.log(reset);
            
            wins ++;

            $("#wins").html(wins);
     
        } else if (score > randomNumber) {
            
            alert('YOU LOSE!');

            reset ();
            console.log(reset());

            losses ++;

            $("#losses").html(losses);
        }

    });

    $("#crystal-2").on("click", function crystal2Click () {
        
        $(this).val(crystalArray[1]);
        
        $("#score").html(score += crystalArray[1]);

        if(score === randomNumber) {
            
            reset ();
            console.log(reset);

            wins ++;

            $("#wins").html(wins);
     
        } else if (score > randomNumber) {
            
            alert('YOU LOSE!');

            reset ();
            console.log(reset);

            losses ++;

            $("#losses").html(losses);
        }


    });

    $("#crystal-3").on("click", function crystal3Click () {
        
        $(this).val(crystalArray[2]);
        
        $("#score").html(score += crystalArray[2]);

        if(score === randomNumber) {
            
            alert('YOU WIN!!!');
            
            reset ();
            console.log(reset);

            wins ++;

            $("#wins").html(wins);
     
        } else if (score > randomNumber) {
            
            alert('YOU LOSE!');

            reset ();
            console.log(reset());

            losses ++;

            $("#losses").html(losses);
        }

    });

    $("#crystal-4").on("click", function crystal4Click () {
        
        $(this).val(crystalArray[3]);
        
        $("#score").html(score += crystalArray[3]);

        if(score === randomNumber) {
            
            alert('YOU WIN!!!');
            
            reset ();
            console.log(reset);

            wins ++;

            // FIXME: why doesn't this display?  I had it on all four crystals now just here becuase I dunno WTF!!
            $("#wins").html(`Total Wins:${ wins}!`);
     
        } else if (score > randomNumber) {
            
            alert('YOU LOSE!');

            reset ();
            console.log(reset());

            losses ++;

            // FIXME:
            $("#losses").html(losses);
        }

    });



        
        // I tried to create a new div inside of my if statement to display you win but I can't get it to work
        // let youWin = $("<div>")
        // youWin.attr({
        //     "class": 'win-message',
        // })
        
        // $("#wins") ++;
        // console.log($("#wins"));

        // youWin.html('YOU WIN!!!');
        // console.log(youWin);
    
    // if all the crystals are clicked and score is less than randomNumber User loses: increment to losses counter and reset the game.
    // if score > randomNumber then User loses: increment to losses counter and reset the game.

    
        
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Here is a bunch of random shit that doesn't word AKA my SCRAPYARD! HA!
    
    // $("#score").html(crystalValueArray[0])
        
        //
        
    //     if (crsytal1Click() = true) {
    //         $("#score").html(score + crystalValueArray[0])
    //     }
    //     // alert('fuck');
    // });

    // $("#crystal-2").on("click", function () {
    //     $(this).html(crystalValueArray[1]);
    //     // $("#score").html(crystalValueArray[1]);
    //     if (crsytal2Click () = true) {
            
    //     }
    //     // alert('fuck');
    // });

    // $("#crystal-3").on("click", function () {
    //     $(this).html(crystalValueArray[2]);
    //     // $("#score").html(crystalValueArray[2]);
    //     if (crsytal3Click () = true) {
            
    //     }
    //     // alert('fuck');
    // });

    // $("#crystal-4").on("click", function () {
    //     $(this).html(crystalValueArray[3]);
    //     // $("#score").html(crystalValueArray[3])
    //     if (crsytal4Click () = true) {
            
    //     }
    //     // alert('fuck');
    // });

       // This line of code sets a data value to be a randomly generated number for each crystal
        // crystal1.attr({
        //     "data-random": crystalValueArray[0]
        // })

        // crystal2.attr({
        //     "data-random": crystalValueArray[1]
        // })

        // crystal3.attr({
        //     "data-random": crystalValueArray[2]
        // })

        // crystal4.attr({
        //     "data-random": crystalValueArray[3]
        // })



});
