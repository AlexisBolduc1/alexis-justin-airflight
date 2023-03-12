const heart = document.querySelector('.heart');

function like() {
    if (heart.classList.contains('notclick')) {
        heart.classList.add('click');
        heart.classList.remove('notclick'); 
      } else {
        heart.classList.add('notclick');
        heart.classList.remove('click'); 
      }
  }

  const swiper = new Swiper('.swiper-filters', {
    direction: 'horizontal', 
    slidesPerView: "auto",
    effect: 'slide',
    grabCursor: true,
  });

  const swiper2 = new Swiper('.swiper-featured-artworks', {
    direction: 'horizontal', 
    slidesPerView: 2.5,
    effect: 'slide',
    grabCursor: true,
    spaceBetween: 1,
  });