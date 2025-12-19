
function my_Dictionary() { // Defining and name the Animal Functinon
    Animal = {             // Defining the variable
        Species:"Dog",   // Defining the list for specific character of dog
        Color: "Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; // Delete part fo the list character of the animal
 
    document.getElementById("Dictionary").innerHTML =  Animal.Sound ;
}

function my_House(){ //Defining and name the my_House
     House = { //Definig the variable
        Color:"Blue and Green", // LIst of House character
        SQf:"3,500 sqf",
        Garage:"Doble garage",
        Back_yard:"Grass",
        Drive_Way:"Finih red stone",
        Roof:"Shinge green",
    };
       document.getElementById("Sweet_home").innerHTML= House.SQf;
}

