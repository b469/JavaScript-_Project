function Ride_function(){
 Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride=(Height<52) ? "You are too short": "Tou are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to rede.";
}


// Ternary Operator Project
function older_function(){// Defining the name "Older" function
    older_function, to_vote;// Defining the inner HTML
    older = document.getElementById("older").Value; // Get the input Id
    to_vote = (older>18) ? "You nor older enough to vote": "You are oder enough to vote.";
    document.getElementById("Vote").innerHTML = to_vote + "old enough.";
}

// Object-Oriented Programming "Keywords"
function Vehicle (Make, Model, Year, Color){ //Vehicle in our code is an object constructor
    this.Vehicle_Make = Make; // "This" Keyword gets the values of the newly created car object 
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // "New" keyword create the values until the new object is creted from the object constructor
    Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
    Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
    
    function myFunction(){ // Definig the name Function, of the vehicle Erik is driving
        document.getElementById("Keywords_and_Constructors").innerHTML = // Get the constructor by the Id
        
        "Erik drives a " + Erik.Vehicle_Color + "-Colored-" + Erik.Vehicle_Model + 
        "-manufactured in " + Erik.Vehicle_Year;    

}


// Constructor function for Person objects
function Person(first, last, Year, age, eye, ) {
  this.Person_firstName = first;
  this.Person_lastName = last;
  this.Person_Year = Year;
  this.Person_age = age;
  this.Person_eyeColor = eye;
  this.Person_nationality = "From Venezuela";
  this.Person_Lenguage = "Spanish";
  this.Person_Old = "Old";
}

// Create 2 Person objects
 myFather = new Person("Luis ", "Bolivar", "Year", 84, "blue","From Venezuela", "Spanish");
 myMother = new Person("Ana ", "Bolivar", "Year", 80, "green", "From Venezuela", "Spanish");

// Display nationality
function myFamily(){
  document.getElementById("family").innerHTML =
    `My father is ${myFather.Person_nationality} ${myFather.Person_age} ${myFather.Person_Year} ${myFather.Person_Old} ${myFather.Person_Lenguage}<br> 
    My mother is ${myMother.Person_nationality} ${myMother.Person_age} ${myMother.Person_Year} ${myMother.Person_Old} ${myMother.Person_Lenguage}`;
}

 // Nested Functions
function count_Function(){ // Defining the name "count_function"
  document.getElementById("Counting").innerHTML = Count(); // Get function by "Id"
  function Count(){ // Defining the Adding Function
     starding_point = 9; // Number to be add  "9"to Fuction
     function Plus_one() {starding_point += 1;} // Second number to be add "1"
     Plus_one(); // Defining the add point
     return starding_point

    }
}
