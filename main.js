// Option 2 - jQuery Smooth Scrolling
$('.navbar a').on('click', function (e) {
   if (this.hash !== '') {
    e.preventDefault();

   const hash = this.hash;
console.log(hash);
console.log($(hash).offset().top);
    $('html, body')
      .animate({
       scrollTop: $(hash).offset().top
      },800);
  }
 });