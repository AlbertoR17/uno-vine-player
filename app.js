var video = document.getElementById('video');
var loopbutton = document.getElementById('loopbutton');

var islooped = false;

loopbutton.onclick = function () {
  islooped = !islooped;
  video.loop = islooped;
  loopbutton.innerHTML = islooped ? "Loop : On":"Loop : Off";//Se usa para no poner if= ? else=:
};
