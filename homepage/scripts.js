
// This function shows the element with the given id and hides all other elements
function show(x) {
  const idOfX = document.getElementById(x);
  const idOfWelcome = document.getElementById("welcome");
  const elements = ["welcome", "about", "certifications", "projects", "contact"];
  
  // If the element is already visible, hide it and show the welcome element
  if (idOfX.classList.contains("visible")) {
    idOfWelcome.classList.replace("hidden", "visible");
    idOfX.classList.replace("visible", "hidden");
  } else {
    // Otherwise, hide all other elements and show the selected element
    elements.forEach((element) => {
      document.getElementById(element).classList.replace("visible", "hidden");
    });
    idOfX.classList.replace("hidden", "visible");
  }
}

// This function sets the active class for the element with the given id and removes it from all other elements
function setActiveId(x) {
  x = x + "1";
  const idOfX = document.getElementById(x);
  
  // If the element is already active, remove the active class
  if (idOfX.classList.contains("active")) {
    idOfX.classList.remove("active");
  } else {
    // Otherwise, remove the active class from all other elements and add it to the selected element
    const elements = ["about1", "certifications1", "projects1", "contact1"];
    elements.forEach((element) => {
      document.getElementById(element).classList.remove("active");
    });
    idOfX.classList.add("active");
  }
}

// This function shows the element with the given id, hides all other elements, and sets the active class for the selected element
function showAndSetActive(x) {
  show(x);
  setActiveId(x);
}