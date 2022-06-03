function menuScroll() {
    var element = document.getElementById("page");
    var element2 = document.getElementById("hide");
    element.classList.add("menuScroll");
    element2.classList.add("hide");
  }
  function startParentScroll() {
    var element = document.getElementById("page");
    var element2 = document.getElementById("hide");
    element.classList.remove("menuScroll");
    element2.classList.remove("hide");
  }

