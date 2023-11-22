
'use strict';

const audio = document.querySelector('audio');
const playPause = document.querySelector('.play--pause')

//schedules

const scheduleContainer = document.querySelector('.schedule-container')
const scheduleDays = document.querySelectorAll('.schedule-day')
const days = document.querySelectorAll('.schedule-nav-link')
const scheduleNav = document.querySelector('.schedule-nav')
const paperImage = document.querySelectorAll('.paper-image')
const southEast = document.querySelectorAll('.south-east')
const sports = document.querySelectorAll('.sports')
const convo = document.querySelectorAll('.convo')
const trenches = document.querySelectorAll('.trenches')
const football = document.querySelectorAll('.football')
const paragon = document.querySelectorAll('.paragon')
const akonuche = document.querySelectorAll('.akonuche')
const traffick = document.querySelectorAll('.traffick')
const iwoji = document.querySelectorAll('.iwoji')
const kiddies = document.querySelectorAll('.kiddies')
const vorgue = document.querySelectorAll('.vorgue')
const gstar = document.querySelectorAll('.gstar')
const today = new Date()

const currentDay = today.getDay()
console.log(currentDay)


gstar.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/gista.html";
    
    })
})



paperImage.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/shows.html";
    
    })
})


southEast.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/eyereport.html";
       
    
    })
})




sports.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/udokasports.html";
       
    
    })
})

convo.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/convo.html";
       
    
    })
})


trenches.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/trenchies.html";
       
    
    })
})



football.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/football.html";
       
    
    })
})



paragon.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/paragon.html";
       
    
    })
})




akonuche.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/ako.html";
       
    
    })
})



traffick.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/traffick.html";
       
    
    })
})

vorgue.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/vogue.html";
       
    
    })
})


iwoji.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/iwoji.html";
       
    
    })
})

kiddies.forEach(image => {
    image.addEventListener('click', function(){
       window.location.href = "SYNOPSES/kiddie.html";
       
    
    })
})

//////////////////////////////////////////////////////////////////////////

days.forEach((day, index) => {

    if(index === currentDay) {
      day.classList.add('active__day');
      scheduleDays[index].classList.remove('hide__content')  
    }

      
    console.log(currentDay)
    day.addEventListener('click', function(){
        
        days.forEach(day => {
            day.classList.remove('active__day')
        })

        day.classList.add('active__day');

        scheduleDays.forEach(day => {
            day.classList.add('hide__content')
        })
        
        scheduleDays[index].classList.remove('hide__content')
    })
})




playPause.addEventListener('click', function(){
   if(audio.paused){
    //If audio is paused play it
    audio.play();

    playPause.setAttribute('name', 'pause-outline')
   }  else {
    //if audio is playing, pause it
    audio.pause()
    playPause.setAttribute('name','play-outline')
   }
})


