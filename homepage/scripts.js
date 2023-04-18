
// cycles between showing and hiding the textbox elements
//if the element is already visible, it will hide it and show the welcome element
//if the element is hidden, it will show it and hide the welcome element

function show(x) {
let idOfX = document.getElementById(x);
let idOfWelcome = document.getElementById("welcome");
let elements = ["welcome", "about", "certifications", "projects", "contact"];
  if (idOfX.classList.contains("visible")) {
    idOfWelcome.classList.add("visible");
    idOfWelcome.classList.remove("hidden");
    idOfX.classList.add("hidden");
    idOfX.classList.remove("visible");
  } else { 
    for (let i = 0; i < elements.length; i++) {
      document.getElementById(elements[i]).classList.add("hidden");
      document.getElementById(elements[i]).classList.remove("visible");
    }
    idOfX.classList.add("visible");
    idOfX.classList.remove("hidden");
  } };

  function setActiveId(x) {
    //adds 1 to the end of the id to match the id of the corresponding button
    x = x + "1";    
    let idOfX = document.getElementById(x);
    //if the element is already active, it will remove the active class
    if (idOfX.classList.contains("active")) {
      idOfX.classList.remove("active");
    } else {
      let elements = ["about1", "certifications1", "projects1", "contact1"];
      for (let j = 0; j < elements.length; j++) {
        document.getElementById(elements[j]).classList.remove("active");
      }
      idOfX.classList.add("active");
    }
  };
  function showAndSetActive(x) {
    show(x);
    setActiveId(x);
  };   
