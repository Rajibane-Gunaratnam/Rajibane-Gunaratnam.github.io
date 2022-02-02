//alert("Site non compatible aux format smartphone pour l'instant !");

$(".image").hover(function () {
  $(".image").removeClass("active");
  $(this).addClass("active");

  setTimeout(() => {
    $(this).removeClass("active");
  }, 3000);
});

$(".image-projets").hover(function () {
  $(".image-projets").removeClass("active-2");
  $(this).addClass("active-2");
});

const textProfil = document.getElementById("text-profil");
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  scrollValue =
    (window.innerHeight + window.scrollY) / document.body.offsetHeight;

  if (window.matchMedia("(min-width: 850px)").matches) {
    if (scrollValue > 0.42) {
      textProfil.style.opacity = "1";
      textProfil.style.transform = "none";
    }

    console.log(window.scrollY);

    if (window.scrollY > 623) {
      nav.style.top = 0;
    } else {
      nav.style.top = "-75px";
    }

    // do stuff when your screen width is greater than 768px
  } else {
    if (window.scrollY > 0) {
      nav.style.top = 0;
    } else {
      nav.style.top = "-75px";
    }
  }
});
