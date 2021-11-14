const openModalBtn = document.getElementById("open-modal");
openModalBtn.addEventListener("click", function () {
  document.getElementById("overlay").style.display = "block";
});

const closeModalBtn = document.getElementById("close-modal");
closeModalBtn.addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});
