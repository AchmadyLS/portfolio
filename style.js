var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (screenWidth <= 720) {
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
        element.style.bottom = '1100px';
      } else if (window.scrollY >= 220) {
        element.style.borderBottomLeftRadius = '0';
        element.style.borderBottomRightRadius = '0';
        element.style.bottom = '1260px';
      } else {
        element.style.borderBottomLeftRadius = '50%';
        element.style.borderBottomRightRadius = '50%';
        element.style.bottom = '870px';
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

} 
//                        1080                           //
else {
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
      { namaProject: "Discord Game", namaType: "Progamming", showPict: "/pict/game.jpg", bahasa1: "MATH", bahasaPersen1: "MATH:", persentase1: "19.04", bahasa2: "DATABASE", bahasaPersen2: "DB:", persentase2: "76.19", bahasa3: "JAVASCRIPT", bahasaPersen3: "JS:", persentase3: "100.00", disableL: "true"},
      { namaProject: "Adybot Topup", namaType: "Progamming", showPict: "/pict/topup.jpg", bahasa1: "API", bahasaPersen1: "API:", persentase1: "13.28", bahasa2: "DATABASE", bahasaPersen2: "DB:", persentase2: "42.85", bahasa3: "JAVASCRIPT", bahasaPersen3: "JS:", persentase3: "100.00"},
      { namaProject: "Adybot Chatbot", namaType: "Progamming", showPict: "/pict/chatbot.jpg", bahasa1: "-", bahasaPersen1: "-:", persentase1: "0.00", bahasa2: "API", bahasaPersen2: "API:", persentase2: "100.00", bahasa3: "JAVASCRIPT", bahasaPersen3: "JS:", persentase3: "100.00", disableR: "true"},
    ],
    design: [
      { namaProject: "Sukuna", namaType: "Design", showPict: "/pict/sukuna.jpg", disableL: "true", deskripsi: "Gambar ini dibuat menggunakan adobe illustrator berdasarkan referensi dari sebuah karakter anime JUJUTSU KAISEN. design yang tidak terlalu nyata menggambarkan karakter ketika melakukan hal konyol"},
      { namaProject: "Banteng", namaType: "Design", showPict: "/pict/banteng.jpg", deskripsi: "Hasil menggambar dan mewarnai ulang design vector dari google, ditambah dengan api yang keluar dari mulutnya, menghasilkan sebuah gambar Banteng yang menunjukan amarahnya"},
      { namaProject: "Chou", namaType: "Design", showPict: "/pict/chou.jpg", deskripsi: "Berawal dari kesukaan saya dengan hero Chou dari game MOBILE LEGENDS. Berdasarkan model dasar yang saya ambil dari google, saya menggambar ulang karakter tersebut dengan merubah ekspresi, dan beberapa elemen menggunakan Adobe Illustrator"},
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
      $('.html').css('opacity', '1');
      $('.css').css('opacity', '1');
      $('.js').css('opacity', '1');
      $('.persen-container').css('opacity', '1');
      $('.design').css('opacity', '0');
    } else if (type === 'design') {
      penutup.classList.add('slide-right');
      penutup.classList.remove('slide-left');
      $('.html').css('opacity', '0');
      $('.css').css('opacity', '0');
      $('.js').css('opacity', '0');
      $('.persen-container').css('opacity', '0');
      $('.design').css('opacity', '1');
    }
  }
  let cooldownTime = 800;
  let lastExecutionTime = 0;
  
  function prev() {
    const currentTime = new Date().getTime();
    if (currentTime - lastExecutionTime < cooldownTime) {
      return;
    }
  
    if (currentProject == 0) {
      return;
    }
    currentProject--;
    updateItem();
    lastExecutionTime = currentTime;
  }
  
  function next() {
    const currentTime = new Date().getTime();
    if (currentTime - lastExecutionTime < cooldownTime) {
      return;
    }
  
    if (currentProject == 2) {
      return;
    }
    currentProject++;
    updateItem();
    lastExecutionTime = currentTime;
  }
  function updateItem() {
    var item = items[currentType][currentProject];
    var widthHTML = parseFloat(item.persentase1);
    var widthCSS = parseFloat(item.persentase2);
    var widthJS = parseFloat(item.persentase3);
    var namaProject = document.getElementById("namaProject");
    var showPict = document.getElementById("showPict");
    var namaType = document.getElementById("namaType");
    var progressBarHTML = document.querySelector('.bar-persen-HTML');
    var progressBarCSS = document.querySelector('.bar-persen-CSS');
    var progressBarJS = document.querySelector('.bar-persen-JS');
    var bahasa1 = document.getElementById('bahasa1');
    var bahasa2 = document.getElementById('bahasa2');
    var bahasa3 = document.getElementById('bahasa3');
    var bahasaPersen1 = document.getElementById('bahasaPersen1');
    var bahasaPersen2 = document.getElementById('bahasaPersen2');
    var bahasaPersen3 = document.getElementById('bahasaPersen3');
    var disableL = document.getElementById('prev');
    var disableR = document.getElementById('next');
    var deskripsi = document.querySelector('.design-isi');

    progressBarHTML.style.width = widthHTML + '%';
    progressBarCSS.style.width = widthCSS + '%';
    progressBarJS.style.width = widthJS + '%';
    namaProject.textContent = item.namaProject;
    namaType.textContent = item.namaType;
    showPict.src = item.showPict;
    bahasa1.textContent = item.bahasa1;
    bahasa2.textContent = item.bahasa2;
    bahasa3.textContent = item.bahasa3;
    bahasaPersen1.textContent = item.bahasaPersen1;
    bahasaPersen2.textContent = item.bahasaPersen2;
    bahasaPersen3.textContent = item.bahasaPersen3;
    disableL.disabled = item.disableL;
    disableR.disabled = item.disableR;
    deskripsi.textContent = item.deskripsi;
    
    var persen1 = document.getElementById("persentase1");
    var persen2 = document.getElementById("persentase2");
    var persen3 = document.getElementById("persentase3");
    var prevPersenHTML = parseFloat(persen1.textContent);
    var prevPersenCSS = parseFloat(persen2.textContent);
    var prevPersenJS = parseFloat(persen3.textContent);
    persen1.textContent = formatPercentage(parseFloat(item.persentase1));
    persen2.textContent = formatPercentage(parseFloat(item.persentase2));
    persen3.textContent = formatPercentage(parseFloat(item.persentase3));
    animatePercentage(prevPersenHTML, parseFloat(item.persentase1), persen1);
    animatePercentage(prevPersenCSS, parseFloat(item.persentase2), persen2);
    animatePercentage(prevPersenJS, parseFloat(item.persentase3), persen3);
  }
  
  function formatPercentage(value) {
    return value.toFixed(2);
  }
  
  function animatePercentage(startValue, endValue, element) {
    var duration = 750;
    var interval = 10;
    var steps = Math.ceil(duration / interval);
    var stepValue = (endValue - startValue) / steps;
    var currentValue = startValue;
    var currentStep = 0;
    var animationInterval = setInterval(function() {
      currentValue += stepValue;
      currentStep++;
      if (currentStep >= steps) {
        element.textContent = endValue.toFixed(2);
        clearInterval(animationInterval);
      } else {
        element.textContent = (startValue + stepValue * currentStep).toFixed(2);
      }
    }, interval);

    if (currentProject < 0) {
      currentProject = items[currentType].length - 1;
    } else if (currentProject >= items[currentType].length) {
      currentProject = 0;
    }
  }
//  PROJECT animation  //
$(window).scroll(function() {
  var scrollY = $(this).scrollTop();
  var elementOffset = $('.project').offset().top;
  var windowHeight = $(this).height();
  
  if (scrollY + windowHeight >= elementOffset + 70) {
    $('.projectId').css('animation', 'show 0.3s ease-in-out forwards');
  }
  else {
    $('.projectId').css('animation', 'none');
    $('.projectId').css('animation', 'hide 0.3s ease-in-out forwards');
  }
});

$(window).scroll(function() {
  var scrollY = $(this).scrollTop();
  var elementOffset = $('.project').offset().top;
  var windowHeight = $(this).height();
  
  if (scrollY + windowHeight >= elementOffset + 250) {
    $('.project').css('animation', 'show 1s ease-in-out forwards');
  }
  else {
    $('.project').css('animation', 'none');
    $('.project').css('animation', 'hide 0.3s ease-in-out forwards');
  }
});

$(window).scroll(function() {
  var scrollY = $(this).scrollTop();
  var elementOffset = $('.showcase').offset().top;
  var windowHeight = $(this).height();
  
  if (scrollY + windowHeight >= elementOffset + 250) {
    $('.showcase').css('animation', 'kiri 1.5s ease-in-out forwards');
  }
  else {
    $('.showcase').css('animation', 'none');
  }
});
//  navbar  //
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
//  AJAX  //
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
function uncheckRadios(Language) {
  var radios = document.getElementsByName(Language);
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  };
}