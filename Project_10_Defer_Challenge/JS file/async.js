
// HTML File Defer Challence
// Nothing happened because the javaScript file
// is being executed prior to the paragraph element with the Id "p1"
newFunction();

function newFunction() {
        alert(document.getElementById("p1"));
    }

   
    // While Loops repeating "If"statement
    function counting_To_Ten(){ // Defining the name of function "counting_to_Ten"
         Digit = "";// Call the numbers
        X = 1; // star from one "1"
        while (X < 11){ // End number to "11"
            Digit += "<br>" + X; // <br> make number go in column 
            X ++; // counting from "1" to "11"
        }
        document.getElementById("counting").innerHTML = Digit; // Calling the "Id" variable
        }


        // The length property returns the length string
        function length_function(){
         let text = "Hello World!";
let length = text.length;

document.getElementById("length").innerHTML = length;
        }

        // For Loops in javaScript
        // We didn't have to indevidually write a document.write()method for each instrument
            function for_Loop(){ 
            const Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
            let len =  Instruments.length;

            let i = 0;

            let text = "";
            for (; i < len; ) {
            text +=  Instruments[i] + "<br>";
            i++;
            }

            document.getElementById("demo").innerHTML = text;
            
        }

        // Arrays and Objects
        // Arrays are objects and so are included in the object date type
        //.Objects can gave properties (characteristics )and methods (actions)
        function cat_pics(){
            var Cat_Picture = [];
            Cat_Picture  [0]= "sleeping";
            Cat_Picture  [1]= "playing";
            Cat_Picture  [2]= "eating";
            Cat_Picture  [3]= "purring"
            document.getElementById("cat").innerHTML = "In this picture, the cat is " 
            + Cat_Picture [2] + ".";
        }

        // Const Fuction
        // The const keyword creates a constant whose scope can be either 
        // global or local to the block in which it is declare. 
        function constant_function(){ // Defining the name "constat_function"
            const  Musical_Instrument ={type : "Guitar", brand : "Fender", color : "Green"}; // "Const variable"
            Musical_Instrument.color = "Blue" // Property value is beeing change , color
            Musical_Instrument.brand = "Fender"
            Musical_Instrument.Instrument  = "Violin" // Add new Property value "Instrument"
            Musical_Instrument.year  = "1970" // Add ne Property value "Year"
            document.getElementById("constant").innerHTML =  "What year the " +
            Musical_Instrument.Instrument + "-was made" + Musical_Instrument. year;

        } 

               // Objects 
               function Car_function(){
               let car = { // Car is the Object
                make : "Dodge",// This are the Property
                model : "Viper",
                year : "2021",
                color : "red",
                description : function() { // Method are action the can performe on object
                     return "The car is a " + this.year + this. color  + this.make  + this.model;
                }  
               };
               document.getElementById("Car_Object").innerHTML = car.description();
               }

              
               // The break Statement in a Switch calling the date
                    function day_function(){ // Defining the name "day_function"
                                let day;
                    switch (new Date().getDay()) { // Calling the day of current date
                    case 0:
                        day = "Sunday"; // Calling the Property day's of the weeks
                        break;
                    case 1:
                        day = "Monday";
                        break;
                    case 2:
                        day = "Tuesday";
                        break;
                    case 3:
                        day = "Wednesday";
                        break;
                    case 4:
                        day = "Thursday";
                        break;
                    case 5:
                        day = "Friday";
                        break;
                    case  6:
                        day = "Saturday";
                    }
                    document.getElementById("day").innerHTML = "Today is " + day; // Calling the variably "day"
                    
                }

                // The continue Statement
                //Loop through a block of code, but skip the value 3:
                function continue_function(){ // Definig the name of "continue_function"
                let text = ""; // Variable "text"
                let i = 0; // Variable "i"
                while (i < 5) { // Making the loop function " while and If"
                i++;
                if (i === 3) continue; // iskipping "3" and continue counting to 5
                text += i + "<br>";
                }
                document.getElementById("cont").innerHTML = text; // Calling the variable "text"
            }
 






      