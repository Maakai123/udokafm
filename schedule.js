
'use strict';

const audio = document.querySelector('audio');
const playPause = document.querySelector('.play--pause')

//schedules

const scheduleContainer = document.querySelector('.schedule-container')
const scheduleDays = document.querySelectorAll('.schedule-day')
const days = document.querySelectorAll('.schedule-nav-link')
const scheduleNav = document.querySelector('.schedule-nav')


const today = new Date()

const currentDay = today.getDay()
console.log(currentDay)



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


