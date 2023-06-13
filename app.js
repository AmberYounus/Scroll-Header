window.onscroll = function () {
  scroll();
};
var header = document.getElementById("fixedHeader");
var sticky = header.offsetTop;

function scroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
