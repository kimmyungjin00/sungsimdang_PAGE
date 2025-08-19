window.addEventListener("load", function () {
  AOS.init();
  const swiper = new Swiper(".mine", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
window.addEventListener("load", function () {
  const menu = this.document.querySelector(".menu");
  const submenus = this.document.querySelectorAll(".submenu");
  const hBg = this.document.querySelector(".header_bg");
  menu.addEventListener("mouseenter", function () {
    // alert("mouseenter")
    // console.log(submenus);
    submenus.forEach(function (sub) {
      // console.log(sub);
      sub.classList.add("active");
    });
    hBg.classList.add("open");
  });
  menu.addEventListener("mouseleave", function () {
    // alert("mouseenter")
    // console.log(submenus);
    submenus.forEach(function (sub) {
      // console.log(sub);
      sub.classList.remove("active");
    });
    hBg.classList.remove("open");
  });
});
