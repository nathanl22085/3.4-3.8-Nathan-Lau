function myFunction() {
  var x = document.getElementById("myTopnav");
  // Target the h1 inside the parallax text containers
  var parallaxH1 = document.querySelector('.parallax_text_art_of_tennis h1, .parallax_text_how_to_play h1, .parallax_text_grand_slam h1');

  if (x.className === "topnav") {
    x.className += " responsive";
    if (parallaxH1) parallaxH1.classList.add("hidden-h1");
  } else {
    x.className = "topnav";
    if (parallaxH1) parallaxH1.classList.remove("hidden-h1");
  }
}