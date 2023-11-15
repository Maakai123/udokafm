

'use strict';

const audio = document.querySelector('audio');
const displayBtn = document.querySelector('.nav-cta')
const audioContainer = document.querySelector('.audio-container')
const cancelBtn = document.querySelector('.btn--cancel')
const playPause = document.querySelector('.play-pause')
const playAndPause = document.querySelector('.play--pause')
const musicPlayer = document.querySelector('.music-player')

const dropDownList = document.querySelectorAll('.drop-down-list')

//hero sticky
const sectionHero = document.querySelector('.section-hero')




//Smooth scrolling, make it  work on all browsers
const allLinks = document.querySelectorAll('a:link');
//Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')



/*Mobile */

btnNavEl.addEventListener('click', function(){
  headerEl.classList.toggle('nav-open')
})


/*
playButton.addEventListener('click', () => {
    audio.play().catch(error => console.error('Error playing audio:', error));
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});
*/






displayBtn.addEventListener('click', function() {
    audioContainer.classList.remove('hidden')
})

cancelBtn.addEventListener('click', function(){
    audioContainer.classList.add('hidden')
    
})

playPause.addEventListener('click', function(){

  if(audio.paused){
    //If audio is paused play it
    audio.play();
    playPause.setAttribute('name', 'pause-outline') 
  } else {
    //if audio is playing, pause it
    audio.pause()
    playPause.setAttribute('name','play-outline')
  }

   
    /*
     // Check if the button is currently in play state
    if(playPause.getAttribute('name') === 'play-outline') {
        audio.play()
        // Change it to pause state
        playPause.setAttribute('name', 'pause-outline')
      
    }
    else {

        audio.play()
        playPause.setAttribute('name', 'play-outline')
        
    }
 */
})


playAndPause.addEventListener('click', function(){

if(audio.paused){
    //if audio is paused play it
    audio.play();
    playAndPause.setAttribute('name','pause-outline')
} else {
//if audio is playing, pause it
audio.pause()
playAndPause.setAttribute('name', 'play-outline')
}

})



dropDownList.forEach(list => {
  list.addEventListener('click', function(e) {
    e.preventDefault()
   
  })
})


//Sticky

const obs = new IntersectionObserver(
  function(entries){
    const ent = entries[0];
    console.log(ent)

    if(ent.isIntersecting === false){
      //Body should removeclassList sticky if true
      document.body.classList.add('sticky')
    }

    if(ent.isIntersecting === true){
      //Body should reomoveclassList sticky if true
      document.body.classList.remove('sticky')
    }
  },
  {
    //in the viewport
    root: null,
    threshold:0,
    rootMargin: "-80px"
  }
);

obs.observe(sectionHero)

//slide


//Slider 

const slideFunc = function () {
  const slides = document.querySelectorAll('.programs')
  const slider = document.querySelector('.image-slider')
  const btnRight = document.querySelector('.slider__btn--left')
  const btnLeft = document.querySelector('.slider__btn--right')
  //programs
const imageSlider = document.querySelectorAll('.image-slider');


  console.log(slides)

let currentSlide = 0;
const maxSlide =  slides.length;

const goToSlide = function(slide){
  slides.forEach( (s,i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
}

const nextSlide = function(){

currentSlide = (currentSlide + 1) % maxSlide;
  
  goToSlide(currentSlide)
}



//programs 
const today = new Date()
const currentDay= today.getDay()

imageSlider.forEach((slide, index) => {
  if(index === currentDay){
    slide.classList.remove('hide__content')
  } else {
    slide.classList.add('hide__content')
  }
})

console.log(currentDay)

const prevSlide = function() {
  if(currentSlide === 0){
    currentSlide = maxSlide -1
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide) 
}


const init = function(){
  goToSlide(0)
}

init()


//Events
setInterval( nextSlide , 1000); //3600000 1 hour
}

slideFunc()

/*
//Smooth scrolling, make it  work on all browsers
allLinks.forEach(function(link) {
  link.addEventListener('click', function(e){
    e.preventDefault()
    const href = link.getAttribute('href') 

    if(href === "#")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });

  if(href !== "#" && href.startsWith("#")){
    const sectionEl = document.querySelector(href);
    console.log(sectionEl)
    sectionEl.scrollIntoView({behavior: "smooth"})
}
  })
})

*/


// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");// This will add flex gap to
    //Safari  incase it does not support flex box gap==> check Css file (Last part)
  }
  checkFlexGap();
