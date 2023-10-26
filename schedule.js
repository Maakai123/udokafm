
'use strict';


//schedules

const scheduleContainer = document.querySelector('.schedule-container')
const scheduleDays = document.querySelectorAll('.schedule-day')
const days = document.querySelectorAll('.schedule-nav-link')
const today = new Date()

const currentDay = today.getDay()
console.log(currentDay)

days.forEach((day, index) => {

    if(index === currentDay) {
      day.classList.add('active__day');
      scheduleDays[index].classList.remove('hide__content')  
    }



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


