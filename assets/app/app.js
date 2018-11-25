$(document).ready(function () {
    console.log("connected")


    //array of buttons to choose from
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "!", "?"]

    //create a for loop to go through them 
    for (var i = 0; i < letters.length; i++) {

        //when you go through the letters
        //create a new button

        var letterBtn = $("<button>")

         //* ADDING A CLASS */
        //Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        //The classes make it so we are able to use them and target additional attributes
        letterBtn.addClass("letter-button letter letter-button-color");

        //Add attributes
        letterBtn.attr("data-letter", letters[i]);

        //give them text equal to the letters[i]
        //packages the letters inside letterBtn
        letterBtn.text(letters[i]);

        //packaged letterBtn is then appended to the buttons div in the html
        //append the letterBtn to the #button div
        $("#buttons").append(letterBtn)

    }

    //Create an onclick event attached to the letter-button class
    $(".letter-button").on("click", function () {

        //create a new div
        var fridgeMagnet = $("<div>")
        //needed to create a new one because we are changing its attributes
        fridgeMagnet.addClass("letter fridge-color")
        //different colors and location on the page

        fridgeMagnet.text($(this).attr("data-letter"));

        //Append fridgeMagnet variable to the display
        $("#display").append(fridgeMagnet);




    });

    //create onclick for the clear button
    $("#clear").on("click", function () {
        console.log("clicked clear")

        //Use the jQuery "empty()" method to clear the contents of the "#display" div.
        // We use find here and once its found it will empty the element

        $("#display").empty()


    })


});