const email = document.getElementById("email");
const btn = document.querySelector(".btn");
const btn__2 = document.querySelector(".btn-2");
const user__email = document.querySelector(".user-email");
const cta = document.querySelector(".cta");
const ty = document.querySelector(".thank-you");

btn.addEventListener("click", function () {
  if (!email.checkValidity()) {
    document.querySelector(".label-2").style.display = "block";
  } else {
    user__email.textContent = email.value;
    email.value = "";
    cta.classList.toggle("hide");
    ty.classList.toggle("hide-2");
  }
});

btn__2.addEventListener("click", function () {
  cta.classList.toggle("hide");
  ty.classList.toggle("hide-2");
  document.querySelector(".label-2").style.display = "none";
});
