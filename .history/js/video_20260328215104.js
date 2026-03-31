var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay);
	video.loop = false;
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Slow down video");
	console.log("Speed is now " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is now " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	var slider = document.querySelector("#slider");
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = slider.value;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
