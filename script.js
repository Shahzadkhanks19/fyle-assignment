$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

document.querySelector(".div1").addEventListener("click", function () {
  document.querySelector(".image1").style.display = "block";
  document.querySelector(".image2").style.display = "none";
  document.querySelector(".image3").style.display = "none";

  document.querySelector(".div1").classList.add("active");
  document.querySelector(".div2").classList.remove("active");
  document.querySelector(".div3").classList.remove("active");
});

document.querySelector(".div2").addEventListener("click", function () {
  document.querySelector(".image1").style.display = "none";
  document.querySelector(".image2").style.display = "block";
  document.querySelector(".image3").style.display = "none";

  document.querySelector(".div1").classList.remove("active");
  document.querySelector(".div2").classList.add("active");
  document.querySelector(".div3").classList.remove("active");
});

document.querySelector(".div3").addEventListener("click", function () {
  document.querySelector(".image1").style.display = "none";
  document.querySelector(".image2").style.display = "none";
  document.querySelector(".image3").style.display = "block";

  document.querySelector(".div1").classList.remove("active");
  document.querySelector(".div2").classList.remove("active");
  document.querySelector(".div3").classList.add("active");
});
