let slideIndex = [1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["swamp", "acrobat", "wish", "1-2", "fleurs"]
let dotId = ["dswamp", "dacro", "dwish", "d1-2", "dfleurs"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let y = document.getElementsByClassName(dotId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.background = "#717171";
  }
  x[slideIndex[no]-1].style.display = "block";
  y[slideIndex[no]-1].style.background = "#ffffff";
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}
