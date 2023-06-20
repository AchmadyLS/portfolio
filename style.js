function uncheckRadios(Language) {
  var radios = document.getElementsByName(Language);
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}

const elements = document.getElementsByClassName('back-nama');
let isScrolling = false;
let scrollTimeout;

function handleScroll() {
  if (!isScrolling) {
    isScrolling = true;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.transition = 'border-bottom-left-radius 1s, border-bottom-right-radius 1s, bottom 1s ease-in-out';
      if (window.scrollY > 0) {
        element.style.borderBottomLeftRadius = '0';
        element.style.borderBottomRightRadius = '0';
      } else {
        element.style.borderBottomLeftRadius = '50%';
        element.style.borderBottomRightRadius = '50%';
      }
    }
  }

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function () {
    isScrolling = false;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.transition = 'border-bottom-left-radius 1s, border-bottom-right-radius 1s, bottom 1s ease-in-out';
      if (window.scrollY > 50 && window.scrollY < 220) {
        element.style.borderBottomLeftRadius = '0';
        element.style.borderBottomRightRadius = '0';
        element.style.bottom = '455px';
      } else if (window.scrollY >= 220) {
        element.style.borderBottomLeftRadius = '0';
        element.style.borderBottomRightRadius = '0';
        element.style.bottom = '91vh';
      } else {
        element.style.borderBottomLeftRadius = '50%';
        element.style.borderBottomRightRadius = '50%';
        element.style.bottom = '330px';
      }
    }
  }, 1);
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 273) {
    navbar.classList.add('show');
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
    navbar.classList.remove('show');
  }
});

  function showProgram() {
    var penutup = document.querySelector('.penutup-pilihan');
    penutup.classList.remove('slide-right');
    penutup.classList.add('slide-left');
  }

  function showDesign() {
    var penutup = document.querySelector('.penutup-pilihan');
    penutup.classList.remove('slide-left');
    penutup.classList.add('slide-right');

  }

$(window).scroll(function() {
  var scrollY = $(this).scrollTop();
  var elementOffset = $('.project-id').offset().top;
  var windowHeight = $(this).height();
  
  if (scrollY + windowHeight >= elementOffset + 250) {
    $('.project-id').css('animation', 'project 1s ease-in-out forwards');
  }
});

const navbarLinks = document.querySelectorAll('.navbar .nav-item a');
navbarLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

$(document).ready(function () {
  $("#submit").click(function () {
    var nama = $(".perusahaan").text();
    var content = $(".isi").text();
     $.post("/request",
        {
           nama: nama,
           isi: content,
        },
        function (data, status) {
           console.log(data);
        });
  });
});