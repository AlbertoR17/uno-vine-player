var video = document.getElementById("mainvideo");

var  fullscreenbutton = document.getElementById("fullscreenbutton");

      video.requestFullscreen =
      video.requestFullscreen ||
      video.msRequestFullscreen ||
      video.mozRequestFullScreen ||
      video.webkitRequestFullscreen;


fullscreenbutton.onclick = function(){
  video.requestFullscreen();
};
