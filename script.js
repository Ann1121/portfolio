window.onload = function() {
  const educationList = document.getElementsByClassName('education-list')[0];
  const educationInfo = document.querySelector('.education ul');
  educationInfo.style.display = 'none';
  educationList.addEventListener('click', () => {
    educationInfo.style.display == 'none' ? educationInfo.style.display = 'flex' : educationInfo.style.display = 'none';
  });




var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

// .innerText
  const showDescription = document.querySelectorAll('.show-description');
  const description = document.querySelectorAll('.project-info ul');
  const hideShow = document.querySelectorAll('.show-description p');

  if (window.clientWidth <= 640) {
    description.forEach((element) => {
        element.style.display = 'none';
    });
  }


   showDescription.forEach(function (element) {
     element.addEventListener('click', () => {
         if (hideShow[0].innerText=='SHOW DESCRIPTION') {
           description.forEach((element) => {
               element.style.display = 'block';
           });
           hideShow.forEach((element) => {
               element.innerText = 'HIDE DESCRIPTION';
           });
         }
         else {
           description.forEach((element) => {
               element.style.display = 'none';
           });
           hideShow.forEach((element) => {
               element.innerText = 'SHOW DESCRIPTION';
           });
         }
     });
   })


}
