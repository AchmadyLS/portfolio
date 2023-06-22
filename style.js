var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (screenWidth <= 720) {
  
} 

else {
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
        element.style.bottom = '73vh';
      } else if (window.scrollY >= 220) {
        element.style.borderBottomLeftRadius = '0';
        element.style.borderBottomRightRadius = '0';
        element.style.bottom = '91vh';
      } else {
        element.style.borderBottomLeftRadius = '50%';
        element.style.borderBottomRightRadius = '50%';
        element.style.bottom = '53vh';
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

  var currentProject = 0;
  var currentType = 'program';
  var items = {
    program: [
      { namaProject: "Adybot Topup", namaType: "Progamming", showPict: "/pict/topup.jpg", persentaseHTML: "10.0", persentaseCSS: "20.0", persentaseJS: "30.0"},
      { namaProject: "Adybot Music", namaType: "Progamming", showPict: "/pict/music.jpg", persentaseHTML: "40.0", persentaseCSS: "50.0", persentaseJS: "60.0"},
      { namaProject: "Adybot Game", namaType: "Progamming", showPict: "/pict/game.jpg", persentaseHTML: "70.0", persentaseCSS: "80.0", persentaseJS: "90.0"},
    ],
    design: [
      { namaProject: "Sukuna", namaType: "Design", showPict: "/pict/sukuna.jpg"},
      { namaProject: "Banteng", namaType: "Design", showPict: "/pict/banteng.jpg"},
      { namaProject: "Chou", namaType: "Design", showPict: "/pict/chou.jpg"},
    ]
  };
  function show(type) {
    currentType = type;
    currentProject = 0;
    updateItem();
    
    var penutup = document.querySelector('.penutup-pilihan');
    if (type === 'program') {
      penutup.classList.add('slide-left');
      penutup.classList.remove('slide-right');
    } else if (type === 'design') {
      penutup.classList.add('slide-right');
      penutup.classList.remove('slide-left');
    }
  }
  function prev() {
    if (currentProject == 0) {
      return;
    }
    currentProject--;
    updateItem();
  }

  function next() {
    if (currentProject == 2) {
      return;
    }
    currentProject++;
    updateItem();
  }
  function updateItem() {
    var item = items[currentType][currentProject];
    var namaProject = document.getElementById("namaProject");
    var showPict = document.getElementById("showPict");
    var namaType = document.getElementById("namaType");

    namaProject.textContent = item.namaProject;
    namaType.textContent = item.namaType;
    showPict.src = item.showPict;

    var persenHTML = document.getElementById("persentaseHTML");
    var persenCSS = document.getElementById("persentaseCSS");
    var persenJS = document.getElementById("persentaseJS");
    var prevPersenHTML = parseInt(persenHTML.textContent);
    var prevPersenCSS = parseInt(persenCSS.textContent);
    var prevPersenJS = parseInt(persenJS.textContent);
    persenHTML.textContent = parseFloat(item.persentaseHTML).toFixed(1);
    persenCSS.textContent = parseFloat(item.persentaseCSS).toFixed(1);
    persenJS.textContent = parseFloat(item.persentaseJS).toFixed(1);
    animatePercentage(prevPersenHTML, parseInt(item.persentaseHTML), persenHTML);
    animatePercentage(prevPersenCSS, parseInt(item.persentaseCSS), persenCSS);
    animatePercentage(prevPersenJS, parseInt(item.persentaseJS), persenJS);
  }
  function animatePercentage(startValue, endValue, element) {
    var duration = 1000;
    var interval = 10;
    var steps = Math.ceil(duration / interval);
    var stepValue = (endValue - startValue) / steps;
    var currentValue = startValue;
    var currentStep = 0;
    var animationInterval = setInterval(function() {
      currentValue += stepValue;
      currentStep++;
      if (currentStep >= steps) {
        element.textContent = endValue.toFixed(1);
        clearInterval(animationInterval);
      } else {
        element.textContent = (startValue + stepValue * currentStep).toFixed(1);
      }
    }, interval);

    if (currentProject < 0) {
      currentProject = items[currentType].length - 1;
    } else if (currentProject >= items[currentType].length) {
      currentProject = 0;
    }
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
}