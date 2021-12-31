// start Dark mood function
const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
let theme = localStorage.getItem('theme');

if (theme === 'dark') enableDarkMode();

darkModeToggleBtn.addEventListener('click', () => {
  theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  darkModeToggleBtn.innerHTML = '☀️';
  localStorage.setItem('theme', 'dark');
  document.body.classList.add('dark-mode');
}

function disableDarkMode() {
  darkModeToggleBtn.innerHTML = '🌒';
  localStorage.setItem('theme', 'light');
  document.body.classList.remove('dark-mode');
}
// End Dark mood function


// 🌒
// ☀️








$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});