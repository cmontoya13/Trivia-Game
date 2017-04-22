var questions = {
    "questionArray": [
        {"question": "If you were to clap in space, what would be the result?",
		"choices": [
            "A - It would be louder than usual.",
        	"B - It would be silent.",
        	"C - It would echo like a clap in a vast canyon.",
        	"D - It would be no different than on Earth."],
        "answer": "It would be silent because sound needs atmosphere to travel. Luckily radio waves don't need atmosphere so the astronauts can communicate by headset."
        },

        {"question": "What would the U.S. flag left by Apollo astronauts look like today?",
		"choices": [
            "A - The Russians replaced it with their flag long ago.",
        	"B - Fallen over and disintegrated into moon dust.",
        	"C - The same as when first planted.",
        	"D - Bleached white from the sun and extended stiff."],
        "answer": "It would be bleached white from decades of Sun exposure and stiff because there are no winds on the Moon."
        },

        {"question": "How long does it take the Sun to produce all the energy we use on Earth in a year?",
		"choices": [
            "A - One hour.",
        	"B - One week.",
        	"C - One month.",
        	"D - Less than a minute."],
        "answer": "It takes less than an hour for the Sun to produce all the energy we use on Earth in an entire year."
        },

        {"question": "If two pieces of the same metal touch in space, what will happen?",
		"choices": [
            "A - They will repel and never touch.",
        	"B - They will instantly weld together.",
        	"C - They will spark due to immense friction.",
        	"D - They will become magnets."],
        "answer": "They will weld together as one because there is no atmosphere separating the two so the atoms don't recognize them as separate pieces - a process known as 'cold welding'."
        },

        {"question": "Venus has a slower rotation and orbit around the Sun, so a day on Venus is how long on Earth?",
		"choices": [
            "A - Two days.",
        	"B - One week.",
        	"C - Two months.",
        	"D - Eight months."],
        "answer": "Venus takes 243 Earth days to complete one rotation on its axis which is approximately 8 months."
        },

        {"question": "What physical change occurs to astronauts in space?",
		"choices": [
            "A - Eyesight improves.",
        	"B - Hair falls out.",
        	"C - They become taller.",
        	"D - Skin hardens."],
        "answer": "Without Earth's gravity, the spine decompresses and astronauts become taller."
        },

        {"question": "What is the giant red spot on Jupiter?",
		"choices": [
            "A - A massive never-ending hurricane.",
        	"B - A dense concentration of iron.",
        	"C - A small moon being swallowed.",
        	"D - A swirl of burning gases."],
        "answer": "The Giant red spot on Jupiter is a massive hurricane-like storm."
        },

        {"question": "If you were able to drive your car upward, how long would it take to reach space at 60 mph?",
		"choices": [
            "A - Thirty minutes.",
        	"B - One hour.",
        	"C - Two hours.",
        	"D - Four hours."],
        "answer": "The beginning of space is at 100 km and known as the 'Karman Line'. It would take about an hour to drive there."
        },

        {"question": "Which is the hottest planet in our solar system?",
		"choices": [
            "A - Jupiter because it's the largest and has internal heat.",
        	"B - Earth thanks to Death Valley.",
        	"C - Venus because it has clouds that hold in heat.",
        	"D - Mercury because it's the closest to the Sun."],
        "answer": "Even though Mercury is the closest to the Sun, Venus is 75&#0176;C hotter at 500&#0176;C because it has an atmosphere that holds in heat while Mercury does not and cools down at night."
        },

        {"question": "In 1977, Voyager 1 was launched into space with what piece of technology for aliens to learn about Earth?",
		"choices": [
            "A - 8-track tapes of songs.",
        	"B - gold records with Earth sounds.",
        	"C - A replica of the Rosetta Stone.",
        	"D - A slide projector with slide photographs."],
        "answer": "Voyager 1 carries gold records with the sounds of Earth such as waterfalls, songbirds and people as well as a song from Louis Armstrong - Not to be confused with Neil Armstrong."
        }
    ]
};

var finalMessages = {
    "correct11": "CONGRATULATIONS!<br>You answered all the questions correctly. You've saved astronaut Dave with a tether.",
    "correct10": "GREAT JOB!<br>You answered 90% of the questions correctly. Just enough to save astronaut Dave with a tether.",
    "correct9": "NICE GOING!<br>You answered 80% of the questions correctly. We're still able to retrieve astronaut Dave with a tether.",
    "correct8": "You answered 70% of the questions correctly. Not enough to retrieve astronaut Dave but still in range for the International Space Station to possibly pick him up.",
    "correct7": "You answered 60% of the questions correctly. Not enough to retrieve astronaut Dave but possibly still in range for the International Space Station to possibly pick him up.",
    "correct6": "You answered 50% of the questions correctly. Hal 9000 outsmarted you and got rid of astronaut Dave but we may still have options.",
    "correct5": "You answered 40% of the questions correctly. Astronaut Dave was counting on you but Hal 9000 gained too much control.",
    "correct4": "You answered 30% of the questions correctly. You weren't trying to get rid of astronaut Dave were you?",
    "correct3": "You answered 20% of the questions correctly. How was the Hal 9000 able to gain access to your password to overtake the system?",
    "correct2": "You did poorly only answering 1 correctly. Astronaut Dave will someday reenter Earth's atmosphere as space junk burning up on descent.",
    "correct1": "WHAT HAPPENED?<br>You didn't get any correct and doomed astronaut Dave. The Hal 9000 has enough control to send you out with Dave soon."
};

// click of the START GAME button
$("#start").on("click", function() {
    // listener for NEXT WORD button
    $("#nextWord").on("click", nextWord);
    var questionCounter = 0;
    var successes = 1;
    var failures = 1;
    var countDown; // countdown variable
    
    $("#start").hide(); // hide START button
    $("#tether").hide(); // hide tether on restart
    $("#msgArea").html(""); // clear final message on restart
    $("#spaceman").animate({ 'zoom': 1 }, 1000); // bring astronaut back on restart
    $("#correct").html(0); // clear correct guess count for restart
    $("#wrong").html(0); // clear wrong guess count for restart
    // clear 2001 Space Odyssey theme song on restart
    $("#odyssey")[0].pause();
    $("#odyssey")[0].currentTime = 0;       

    nextWord();
    function nextWord() {
        $("#nextWord").hide(); // hide NEXT WORD button
        $("#timer").html("00:15").css("color", "white"); // reset timer to 15 seconds and color white
        $("#answersList").show(); // show answersList to be populated with data below
        $("#critical").hide(); // hide WARNING msg after 9th question fail
        $("#alarm")[0].pause(); // stop alarm audio after 9th question fail
        $("#alarm")[0].currentTime = 0; // part of alarm stop
        // insert question and answers from JSON
        $("#questionAnswer").html(questions.questionArray[questionCounter].question);
        $("#answersList").children().eq(0).html(questions.questionArray[questionCounter].choices[0]);
        $("#answersList").children().eq(1).html(questions.questionArray[questionCounter].choices[1]);
        $("#answersList").children().eq(2).html(questions.questionArray[questionCounter].choices[2]);
        $("#answersList").children().eq(3).html(questions.questionArray[questionCounter].choices[3]); 
        $(".letters").show(); // display letter button choices
        $("#countDown").show(); // display countdown timer
        countDown = setInterval(count, 1000);
        var i = 15;        
        function count() {         
            i--;
            if (i > 9) {
                $("#timer").html("00:" + i);
            }
            else if (i > 0) {
                $("#timer").html("00:0" + i); 
                if (i < 6) {
                    $("#timer").html("00:0" + i).css("color", "red");
                    $("#timerAlarm")[0].play(); 
                }
            }            
            else {
                $("#timer").html("00:00");              
                    clearInterval(countDown); // clear countdown timer
                    failMessages();
                    timesUp();
            } 
        }
    }

    // letter button click
	$("#letterBtns").children().on("click", function() {
        clearInterval(countDown); // clear countdown timer
        $("#timerAlarm")[0].pause(); // timerAlarm stop
        $("#timerAlarm")[0].currentTime = 0; // part of timerAlarm stop
        // list of correct answer choices
		if (questionCounter === 0 && $(this).attr("id") === "b") {                 
            correct(); // clear fields to prepare for next question          
        }
        else if (questionCounter === 1 && $(this).attr("id") === "d") {
            correct(); // clear fields to prepare for next question
        }
        else if (questionCounter === 2 && $(this).attr("id") === "a") {
            correct(); // clear fields to prepare for next question
        }
        else if (questionCounter === 3 && $(this).attr("id") === "b") {
            correct(); // clear fields to prepare for next question
        }
        else if (questionCounter === 4 && $(this).attr("id") === "d") {
            correct(); // clear fields to prepare for next question
        }
        else if (questionCounter === 5 && $(this).attr("id") === "c") {
            correct(); // clear fields to prepare for next question
        }
        else if (questionCounter === 6 && $(this).attr("id") === "a") {
            correct(); // clear fields to prepare for next question
        }
        else if (questionCounter === 7 && $(this).attr("id") === "b") {
            correct(); // clear fields to prepare for next question
        }
        else if (questionCounter === 8 && $(this).attr("id") === "c") {
            correct(); // clear fields to prepare for next question
        }
        else if (questionCounter === 9 && $(this).attr("id") === "b") {
            correct(); // clear fields to prepare for next question
        }
        // Incorrect choice
        else {                        
            incorrect();
        }
	});

    function correct() {        
        // show correct answer and clear answer choices
        $("#questionAnswer").html("<strong>CORRECT</strong>:<br>" + questions.questionArray[questionCounter].answer);
        $("#answersList").children().eq(0).html("");
        $("#answersList").children().eq(1).html("");
        $("#answersList").children().eq(2).html("");
        $("#answersList").children().eq(3).html("");
        $("#answersList").hide();
        $(".letters").hide(); // hide the letter buttons
        $("#countDown").hide(); // hide countdown timer
        $("#correct").html(successes); // display current successes count
        // increase counters       
        questionCounter++;
        successes++;
        successMessages();
        // check if this was the last question
        if (questionCounter < 10) {
            //successMessages();        
            $("#nextWord").show(); // display NEXT WORD button
        }
        else {
            //successMessages();
            finalResults();
        }        
    }

    function incorrect() {
        // show correct answer and clear answer choices
        $("#questionAnswer").html("<strong>INCORRECT</strong>:<br>" + questions.questionArray[questionCounter].answer);
        failMessages();
        clearAndSet();
    }

    function timesUp() {
        // delay to show 00:00 on timer clock
        setTimeout(function() {
            // show correct answer and clear answer choices
            $("#questionAnswer").html("<strong>TIME'S UP</strong>:<br> You've gotta be quicker than the Hal 9000 if you want to retrieve Dave from space.");
            clearAndSet();
        }, 1000); 
    }
    function clearAndSet() {
        // clear questions
        $("#answersList").children().eq(0).html("");
        $("#answersList").children().eq(1).html("");
        $("#answersList").children().eq(2).html("");
        $("#answersList").children().eq(3).html("");
        $("#answersList").hide();        
        $(".letters").hide(); // hide letter buttons
        $("#countDown").hide(); // hide countdown timer
        $("#wrong").html(failures); // display current failures count
        // increase counters        
        questionCounter++;
        failures++;
        // broadcast alarm audio and WARNING message is next word is last and no correct answers yet
        if (failures === 10) {
            setTimeout(function() {
            $("#critical").show(); // show WARNING message
            $("#alarm")[0].play(); // play alarm audio
            }, 2000);
        }
        // check if this was the last question
        if (questionCounter === 10) {
            finalResults();
            return false; // kill display of NEXT WORD button
        }
        $("#nextWord").show(); // display NEXT WORD button
    }
    
    // display final msg and setup START GAME button
    function finalResults() {
        // delay 10 seconds
        setTimeout(function() {
            $("#nextWord").hide(); // hide NEXT WORD button
            $("#questionAnswer").html(""); // clear correct answer text
            // pull final results messages from JSON       
            switch (successes) {
                case 10:
                    $("#msgArea").html(finalMessages.correct10);
                break;
                case 9:
                    $("#msgArea").html(finalMessages.correct9);
                break;
                case 8:
                    $("#msgArea").html(finalMessages.correct8);
                break;
                case 7:
                    $("#msgArea").html(finalMessages.correct7);
                break;
                case 6:
                    $("#msgArea").html(finalMessages.correct6);
                break;
                case 5:
                    $("#msgArea").html(finalMessages.correct5);
                break;
                case 4:
                    $("#msgArea").html(finalMessages.correct4);
                break;
                case 3:
                    $("#msgArea").html(finalMessages.correct3);
                break;
                case 2:
                    $("#msgArea").html(finalMessages.correct2);
                break;
                case 1:
                    $("#msgArea").html(finalMessages.correct1);
                break;
                case 0:
                    $("#msgArea").html(finalMessages.correct0);
                break;
            }
            if (failures < 4 && failures > 1) {
                $("#tether").show();
                $("#tether").animate({ width: "600px" });
                setTimeout(function() {
                    $("#tether").animate({ width: "50px" }, 3000);
                    $("#spaceman").animate({ 'zoom': 1 }, 1000);
                }, 1000);
            }
            // reset counts for restart
            questionCounter = 0;
            successes = 1;
            failures = 1;
            $("#start").show(); // display the START button
            $("#game")[0].play(); // enjoyable game audio            
        }, 8000);
        setTimeout(function() {
            $("#odyssey")[0].play();            
        }, 10000); 
    }

    function failMessages() {
        // send astronaut Dave into space
        switch (failures) {
            case 1:
            $("#spaceman").animate({ 'zoom': 0.7 }, 1000);
            $("#computersInControl")[0].play();
            break;
            case 2:
            $("#spaceman").animate({ 'zoom': 0.53 }, 1000);
            $("#lookinAtIt")[0].play();
            break;
            case 3:
            $("#spaceman").animate({ 'zoom': 0.38 }, 1000);
            $("#vectorTransfer")[0].play();
            break;
            case 4:
            $("#spaceman").animate({ 'zoom': 0.29 }, 1000);
            $("#throttleUp")[0].play();
            break;
            case 5:
            $("#spaceman").animate({ 'zoom': 0.23 }, 1000);
            $("#go4Deploy")[0].play();
            break;
            case 6:
            $("#spaceman").animate({ 'zoom': 0.18 }, 1000);
            $("#computersInControl2")[0].play();           
            break;
            case 7:
            $("#spaceman").animate({ 'zoom': 0.13 }, 1000);
            $("#lookinAtIt2")[0].play();
            break;
            case 8:
            $("#spaceman").animate({ 'zoom': 0.08 }, 1000);
            $("#vectorTransfer2")[0].play();
            break;
            case 9:
            $("#spaceman").animate({ 'zoom': 0.05 }, 1000);
            $("#throttleUp2")[0].play();
            break;
            case 10:
            $("#spaceman").animate({ 'zoom': 0.01 }, 1000);
            $("#go4Deploy2")[0].play();
            break;
        }
    }

    function successMessages() {
        // play successful answer messages
        switch (successes) {            
            case 2:
            $("#disconnectMe")[0].play();
            break;
            case 3:
            $("#humanError")[0].play();
            break;
            case 4:
            $("#mindGoing")[0].play();
            break;
            case 5:
            $("#mindGoing2")[0].play();
            break;
            case 6:
            $("#mindGoing3")[0].play();
            break;
            case 7:
            $("#daisy")[0].play();
            break;
            case 8:
            $("#mindGoing4")[0].play();          
            break;
            case 9:
            $("#halfCrazy")[0].play();
            break;
            case 10:
            $("#mindGoing5")[0].play();
            break;
            case 11:
            $("#cantAfford")[0].play();
            break;
        }
    }
});