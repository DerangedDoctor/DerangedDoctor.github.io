function show(x) {
  var elements = ["welcome", "about", "certifications", "projects", "contact"];
  if (document.getElementById(x).style.display === "block") {
  document.getElementById("welcome").style.display = "block";
  document.getElementById(x).style.display = "none";
  } else { 
    for (var i = 0; i < elements.length; i++) {
      document.getElementById(elements[i]).style.display = "none";
    }
  // set display value of the element with ID x to "block"
  document.getElementById(x).style.display = "block";
  } }