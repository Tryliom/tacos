/** Menu item displayer **/
document.addEventListener('DOMContentLoaded', function() {
  const list = ["tacos", "burritos", "student-menu", "drink", "entry", "extra"];

  for (let i in list) {
    const name = list[i];
    const elem = document.getElementById(name);
    const elemDesc = document.getElementById(name+"-desc");

    elem.onclick = function() {
      elemDesc.classList.toggle("show");
      elem.classList.toggle("plus-img");
      elem.classList.toggle("minus-img");
    }
  }
}, false);