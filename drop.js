var linkToggle = document.querySelectorAll('.js-toggle');

for(i = 0; i < linkToggle.length; i++){

  linkToggle[i].addEventListener('click', function(event){

    event.preventDefault();

    var container = document.getElementById(this.dataset.container);

    if (!container.classList.contains('active')) {
      
      container.classList.add('active');
      container.style.height = 'auto';

      var height = container.clientHeight + 'px';

      container.style.height = '0px';

      setTimeout(function () {
        container.style.height = height;
      }, 0);
      
    } else {
      
      container.style.height = '0px';

      container.addEventListener('transitionend', function () {
        container.classList.remove('active');
      }, {
        once: true
      });
      
    }
    
  });
}

var videoPLayerLi = document.querySelectorAll(".vid");
var iframe = document.querySelector('#video')

// videoPLayerLi.addEventListener('click', () => {
//     iframe.setAttribute('src', videoId)
// })

videoPLayerLi.forEach(id => {
  id.addEventListener('click', () => {
    iframe.setAttribute('src', id.id)
  })
})

const theater = document.querySelector('.theater');
const box = document.querySelectorAll('.box');
const drop = document.querySelector('.dropdown-div');

theater.addEventListener('click', () => {
  box.forEach(el => {
    el.classList.toggle('tBox')
  })
  drop.classList.toggle('dDrop')
  iframe.classList.toggle('mar')
});