

'use strict';

const audio = document.querySelector('audio');
const displayBtn = document.querySelector('.nav-cta')
const audioContainer = document.querySelector('.audio-container')
const cancelBtn = document.querySelector('.btn--cancel')
const playPause = document.querySelector('.play-pause')
const playAndPause = document.querySelector('.play--pause')
const musicPlayer = document.querySelector('.music-player')




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


//schedules
days.addEventListener('click', function(){
    console.log('monday')
})