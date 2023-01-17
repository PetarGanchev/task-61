import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

var products  = document.getElementsByClassName('hot');
for (let i=0; products.length>i; i++) {
  let hot = document.getElementsByClassName('hot');
   hot[i].innerHTML = hot[i].innerHTML+"🔥";

}

});
