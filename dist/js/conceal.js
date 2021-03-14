const concealImg = () => {
  const imgs = document.querySelectorAll(".conceal-img");
  let index = 0,
    time = 4000;
  imgs[index].classList.add("show");

  setInterval(() => {
    imgs[index].classList.remove("show");

    //Go over each slide incrementing the index
    index++;

    // If you go over all slides, restart the index to show the first slide and start again
    if (index === imgs.length) index = 0;

    imgs[index].classList.add("show");
  }, time);
};

concealImg();
