$(document).ready(function() {
    $('#menu').click(function() {
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load', function() {
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
    });
  
    // smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear');
    });
  
    // Mendapatkan semua elemen gambar dalam elemen dengan kelas "box"
    const imageElements = document.querySelectorAll('.portofolio .box img');
  
    // Menambahkan event listener pada setiap elemen gambar
    imageElements.forEach((img) => {
      img.addEventListener('click', function() {
        // Mendapatkan link dari atribut data-link pada gambar
        const link = this.getAttribute('data-link');
  
        // Membuka link dalam tab atau jendela baru
        window.open(link, '_blank');
      });
    });
  });
  