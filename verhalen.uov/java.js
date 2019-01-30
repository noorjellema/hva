function myFunction() {
  var x = document.getElementById("filter");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var slider = document.getElementById("leestijd");
var output = document.getElementById("minuten");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


