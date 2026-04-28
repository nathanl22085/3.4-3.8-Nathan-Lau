function myFunction() {
  var x = document.getElementById("myTopnav");
  var parallaxH1 = document.querySelector('.parallax_text_art_of_tennis h1, .parallax_text_how_to_play h1, .parallax_text_grand_slam h1, .parallax_text_big_three');
  
  // Target the arrow container
  var arrow = document.querySelector('.arrow_down');

  if (x.className === "topnav") {
    x.className += " responsive";
    if (parallaxH1) parallaxH1.classList.add("hidden-h1");
    // Hide the arrow
    if (arrow) arrow.classList.add("hidden-arrow");
  } else {
    x.className = "topnav";
    if (parallaxH1) parallaxH1.classList.remove("hidden-h1");
    // Show the arrow again
    if (arrow) arrow.classList.remove("hidden-arrow");
  }
}