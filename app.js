class Drunkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playButton = document.querySelector(".play");
    this.KickAudio = document.querySelector(".kick-sound");
    this.SnareAudio = document.querySelector(".snare-sound");
    this.HihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
  }

  activePad() {
    this.classList.toggle("active"); //enableing the active CSS configure to the pad
  }

  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b` + step); //Selecting the active bar
    console.log(activeBars);
    //loop over the bars
    activeBars.forEach((bar) => {
      bar.style.animation = "playTrack 0.3s alternate ease-in-out 2";
      //check if pad is active
      if (bar.classList.contains("active")) {
        //check what kind of sound to produce
        if (bar.classList.contains("kick-pad")) {
          this.KickAudio.currentTime = 0;
          this.KickAudio.play();
        } else if (bar.classList.contains("snare-pad")) {
          this.SnareAudio.currentTime = 0;
          this.SnareAudio.play();
        } else if (bar.classList.contains("hihat-pad")) {
          this.HihatAudio.currentTime = 0;
          this.HihatAudio.play();
        }
      }
    });
    this.index++; //Incrementing the index
  }
  start() {
    const interval = (60 / this.bpm) * 1000; // a representation of how quickly the interval is being reached
    //Check is it is playing
    if (!this.isPlaying) {
    this.isPlaying = setInterval(() => {
      this.repeat();
    }, interval);
  }
  }
}

const drumkit = new Drunkit();

drumkit.pads.forEach((pad) => {
  pad.addEventListener("click", drumkit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumkit.playButton.addEventListener("click", (e) => {
  drumkit.start();
});
