onload = () => {
    document.body.classList.remove("container");
  };
const audio = document.getElementById('myAudio');
audio.currentTime = 15;
audio.play();

audio.addEventListener('timeupdate', function() {
  if (audio.currentTime >= 68) {
    audio.pause();
  }
});
