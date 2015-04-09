navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var video = document.getElementById("local-video");

navigator.getUserMedia({
	'video': true,
	'audio' : false
}, function(stream){
   if (window.URL){
      video.src = window.URL.createObjectURL(stream);
   } else {
   	video.src = stream;
   }
   video.play();
}, function(err){
	console.log(err);
}
);