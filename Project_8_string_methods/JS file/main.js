
// Concat()Method
function full_Sentence() { //Defining the name "full_Sentence function" 
    var part_1 = "I have ";// Method "concatenates"(connect)two or more strings 
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);// Connections 2, 3, 4
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Slide()Method
function slide_Method(){
    Sentence = "All work and no play makes Johnny a dull boy.";
    Section = Sentence.slice(27, 33); // Get works by the slide number
    document.getElementById("Slide").innerHTML = Section
}

// Number Method
function String_Method(){ // Difining the name for fuction "String_Method"
    x = 182
    document.getElementById("Number_to_string").innerHTML = x.toString(); // Get string to number show
}

  // toPrecision()Method
  function precision_Method(){
    x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
  }




