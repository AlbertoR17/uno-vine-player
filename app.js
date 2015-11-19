<<<<<<< HEAD
var video = document.getElementById("mainvideo");

var  fullscreenbutton = document.getElementById("fullscreenbutton");

      video.requestFullscreen =
      video.requestFullscreen ||
      video.msRequestFullscreen ||
      video.mozRequestFullScreen ||
      video.webkitRequestFullscreen;


fullscreenbutton.onclick = function(){
  video.requestFullscreen();
=======
var video = document.getElementById("mainvideo")

var playButton = document.getElementById("playButton");


var isplaying = false;



video.onended = function(e){
  if (!islooped) {
    pauseVideo();

  }
};
playButton.onclick = function(){
  if(isplaying){
    pauseVideo();
  }else{
    playVideo();
  }
};

function playVideo(){
  isplaying = true;
  playButton.innerHTML = "pause"
  video.play();
};

function pauseVideo(){
  isplaying = false;
  playButton.innerHTML ="play"
  video.pause();
>>>>>>> 8f73dca6c8651574cacbf2d42c9fda464456acbb
};
