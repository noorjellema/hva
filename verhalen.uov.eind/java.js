// filter uitklappen

function myFunction() {
  var x = document.getElementById("filter");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//filter slider - code pen

var slider = document.getElementById("leestijd");
var output = document.getElementById("minuten");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// poging tot afbeelding vervangen

var newsrc = "images/bookmarkvol.svg";

function veranderBoek() {
  if ( newsrc == "images/bookmarkvol.svg" ) {
    document.images["pic"].src = "images/bookmarkvol.svg";
    document.images["pic"].alt = "vol";
    newsrc  = "images/bookmarkleeg.svg";
  }
  else {
    document.images["pic"].src = "images/bookmarkleeg.svg";
    document.images["pic"].alt = "leeg";
    newsrc  = "images/bookmarkvol.svg";
  }
}
