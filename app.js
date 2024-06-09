const slider=document.querySelectorAll('.slides img')
let indexSlide=0
let interValid=null

document.addEventListener('DOMContentLoaded',initialSlide)

function initialSlide(){
    if(slider.length>0){
        slider[indexSlide].classList.add('displayslides')
        interValid = setInterval(nextSlide,3000)
    }
}

function showSlide(index){
  if(index >= slider.length){
       indexSlide= 0
  }else if(index < 0){
      indexSlide=slider.length-1
  }

  slider.forEach(function(slide){
 slide.classList.remove('displayslides')
  })

  slider[indexSlide].classList.add('displayslides')
}
function prevSlide(){
    clearInterval(interValid)
  indexSlide--;
  showSlide(indexSlide)
}

function nextSlide(){
indexSlide++;
showSlide(indexSlide)
}