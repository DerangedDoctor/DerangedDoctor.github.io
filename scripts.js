
// cycles between showing and hiding the textbox elements
//if the element is already visible, it will hide it and show the welcome element
//if the element is hidden, it will show it and hide the welcome element
function show(x) {
  var elements = ["welcome", "about", "certifications", "projects", "contact"];
  if (document.getElementById(x).classList.contains("visible")) {
  document.getElementById("welcome").classList.add("visible");
  document.getElementById("welcome").classList.remove("hidden");
  document.getElementById(x).classList.add("hidden");
  document.getElementById(x).classList.remove("visible");
  } else { 
    for (var i = 0; i < elements.length; i++) {
      document.getElementById(elements[i]).classList.add("hidden");
      document.getElementById(elements[i]).classList.remove("visible");
    }
  document.getElementById(x).classList.add("visible");
  document.getElementById(x).classList.remove("hidden");
  } };

  function setActiveId(x) {
    //adds 1 to the end of the id to match the id of the corresponding button
    x = x + "1";
    //if the element is already active, it will remove the active class
    if (document.getElementById(x).classList.contains("active")) {
      document.getElementById(x).classList.remove("active");
    } else {
      let elements = ["about1", "certifications1", "projects1", "contact1"];
      for (var i = 0; i < elements.length; i++) {
        document.getElementById(elements[i]).classList.remove("active");
      }
      document.getElementById(x).classList.add("active");
    }
  };
  function showAndSetActive(x) {
    show(x);
    setActiveId(x);
  };   
