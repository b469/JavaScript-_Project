
// "If" Function Statement
function get_date(){
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
    
}

// -Creating a new date With current date and time
function get_dia(){ //Defining the function name "get_function date"
d = new Date();// Defining day and time function
document.getElementById("dia").innerHTML = d; // Get day and time
}

// Else Statement  epedifies a block of code that will be executed  
// if the condition is false (opposite of the If statement
function Age_Function(){ // defining the name "Age_Funtion"
    Age = document.getElementById("Age").value; // Get the "input Id"
    if (Age >= 18) { // Defining Age to vote IF statement
        Vote = "You are old enogh to vote";
    }
    else { // Defining IF not else Statement
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote // Get "Id" of Function
    }

    //My own "If you are old enough to drink code"
    function Drinking_Function(){
        drink = document.getElementById("drink").value;
        if (drink >= 19) {
           qualife = "you are old enogh to drink";
        }
        else {
            qualife ="You are not old enogh to drink";
        }
        document.getElementById("Are_You_Old_Enough").innerHTML = qualife;
    }

      // The "Else If" statement follows an "If" statement
      function Time_function(){ //Defining the name "Time_function"
        Time = new Date().getHours(); //Give time and date of current day
        Reply = "";
        if (Time < 12 && Time > 0){ // If statement 
            Reply = "It is morning time";
        }
        else if (Time >= 12 && Time < 18){ // "Else If" stetement 
            Reply = "It is afternoon.";

        }
        else{
            Reply = "It is evening time.";
        }
        document.getElementById("Time_of_day").innerHTML = Reply; // Get answer of Statement

      }
