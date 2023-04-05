
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
