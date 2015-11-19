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
};
