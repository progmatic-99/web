const slideImg = () => {
  const slideshows = document.querySelectorAll('[data-component="slideshow"]');
  const slideCirs = document.querySelectorAll(".circle");

  slideshows.forEach((slideshow) => {
    const slides = document.querySelectorAll(
      `#${slideshow.id} [role="list"] .slide`
    );

    let index = 0,
      time = 7000;
    slides[index].classList.add("active");
    slideCirs[index].classList.add("highlight");

    setInterval(() => {
      slides[index].classList.remove("active");
      slideCirs[index].classList.remove("highlight");

      //Go over each slide incrementing the index
      index++;

      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0;

      slides[index].classList.add("active");
      slideCirs[index].classList.add("highlight");
    }, time);
  });
};

function burger() {
  const menuBtn = document.querySelector(".burger");
  const menu = document.querySelector(".nav-container");
  const menuNav = document.querySelector(".nav-menu");
  const body = document.body;

  // Set initial state of menu
  let showMenu = false;

  menuBtn.addEventListener("click", () => {
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");

      body.style.position = "fixed";
      body.style.top = `-${window.scrollMaxY}px`;

      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");

      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);

      showMenu = false;
    }
  });
}

const dropDown = (parent, child, icon) => {
  const dropdownBtn = document.querySelector(`${parent}`);
  const dropdownContent = document.querySelector(`${child}`);
  const dropdownIco = document.querySelector(`${icon}`);

  let showMenu = false;

  dropdownBtn.addEventListener("click", () => {
    if (!showMenu) {
      dropdownContent.classList.add("show");
      dropdownBtn.classList.add("show");
      dropdownIco.classList.add("show");

      setTimeout(() => {
        dropdownBtn.addEventListener("mouseout", () => {
          dropdownContent.classList.remove("show");
          dropdownBtn.classList.remove("show");
          dropdownIco.classList.remove("show");
        });
      }, 4000);

      showMenu = true;
    } else {
      dropdownContent.classList.remove("show");
      dropdownBtn.classList.remove("show");
      dropdownIco.classList.remove("show");

      showMenu = false;
    }
  });
};

const dropdownTrans = () =>
  dropDown("#dropdown-one", ".transformer-dropdown", ".md-trans");

const dropdownLed = () =>
  dropDown("#dropdown-three", ".led-dropdown", ".md-led");

const app = () => {
  burger();
  slideImg();
  dropdownTrans();
  dropdownLed();
};

app();
