$(function() {
  const accordions = document.querySelectorAll(".accordion-collapse");
  let opening = false;
  accordions.forEach(function (el) {
    el.addEventListener("hide.bs.collapse", (event) => {
      if (!opening) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        opening = false;
      }
    });
    el.addEventListener("show.bs.collapse", (event) => {
      opening = true;
    });
  });
})