$(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });




window.sr = ScrollReveal();
sr.reveal('.theNav',{
  duration: 2000,
  origin: 'bottom'
})
sr.reveal('.h1-control',{
  duration: 2000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
})
sr.reveal('.firstBox', {
  duration: 3000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
})
sr.reveal('.secondBox', {
  duration: 3000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
})
sr.reveal('.thirdBox', {
  duration: 3000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
})
sr.reveal('.fourthBox', {
  duration: 3000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
})
sr.reveal('.fithBox', {
  duration: 3000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
})
sr.reveal('.sixthBox', {
  duration: 3000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
})
