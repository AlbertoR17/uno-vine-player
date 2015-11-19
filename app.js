var video = document.getElementById("mainvideo");
var playButton= document.getElementById('playButton')
var loopbutton = document.getElementById('loopbutton');
var  fullscreenbutton = document.getElementById("fullscreenbutton");


      video.requestFullscreen =
      video.requestFullscreen ||
      video.msRequestFullscreen ||
      video.mozRequestFullScreen ||
      video.webkitRequestFullscreen;


var islooped = false;
var isplaying = false;

loopbutton.onclick = function () {
  islooped = !islooped;
  video.loop = islooped;
  loopbutton.innerHTML = islooped ? "Loop : On":"Loop : Off";//Se usa para no poner if= ? else=:
};

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

};
fullscreenbutton.onclick = function(){
  video.requestFullscreen();
};
