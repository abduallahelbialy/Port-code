// Slider 1
var swiperMain = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1.7,
      spaceBetween: 0,
    },
  },
});

// Slider 2 - Testimonials
var swiperTestimonials = new Swiper(".mySwiper-testimonials", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
});
///toast////
document.addEventListener("DOMContentLoaded", function () {
  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });

  document.querySelector(".btn-sned").addEventListener("click", function () {
    var myToast = new bootstrap.Toast(document.getElementById("myToast"));
    myToast.show();
  });
});

const copyrightText = document.getElementById("copyrightText");
copyrightText.textContent = copyrightText.textContent.replace(
  "2025",
  new Date().getFullYear()
);
///toast////


// Counter Animation
const counters = document.querySelectorAll(".counter");
let started = false;

const startCount = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "";
    let count = 0;
    const increment = target / 100;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = suffix
          ? Math.round(count) + suffix
          : "+" + Math.round(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = suffix ? target + suffix : "+" + target;
      }
    };

    updateCount();
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !started) {
      startCount();
      started = true;
    }
  },
  { threshold: 0.5 }
);

const section = document.getElementById("stats");
observer.observe(section);
// Counter Animation

