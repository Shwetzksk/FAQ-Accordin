const accords = document.querySelectorAll(".accord");
const accordDetail = document.querySelector(".accord .accord__detail");

console.log(accords);
accords.forEach((accord) => {
  accord.addEventListener("click", function (e) {
    accords.forEach((acc) => {
      if (acc.classList.contains && !(acc === accord)) {
        acc.classList.remove("active");
      }
    });
    accord.classList.toggle("active");
  });
});
