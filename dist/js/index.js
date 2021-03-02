const slideImg = () => {
  const slideshows = document.querySelectorAll('[data-component="slideshow"]');
  const slideCirs = document.querySelectorAll('.circle');

  slideshows.forEach(slideshow => {
    const slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    let index = 0, time = 7000;
    slides[index].classList.add('active');
    slideCirs[index].classList.add('highlight');

    setInterval( () => {
      slides[index].classList.remove('active');
      slideCirs[index].classList.remove('highlight');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');
      slideCirs[index].classList.add('highlight');

    }, time);
  });
};

const burger = () => {
  const menuBtn = document.querySelector(".burger");
  const menu = document.querySelector(".nav-menu");
  // const menuBranding = document.querySelector(".menu-branding");
  // const menuNav = document.querySelector(".menu-nav");
  // const navItems = document.querySelectorAll(".nav-item");

  // Set initial state of menu
  let showMenu = false;

  menuBtn.addEventListener("click", () => {
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      // menuNav.classList.add("show");
      // menuBranding.classList.add("show");
      // navItems.forEach((item) => item.classList.add("show"));

      // Set menu state
      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      // menuNav.classList.remove("show");
      // menuBranding.classList.remove("show");
      // navItems.forEach((item) => item.classList.remove("show"));

      // Set menu state
      showMenu = false;
    }
  });
};

const app = () => {
  burger();
  slideImg();
};


app();