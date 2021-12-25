class Drunkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playButton = document.querySelector(".play");
    this.KickAudio = document.querySelector(".kick-sound");
    this.SnareAudio = document.querySelector(".snare-sound");
    this.HihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }

  activePad() {
    this.classList.toggle("active"); //enableing the active CSS configure to the pad
  }

  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b` + step); //Selecting the active bar
    console.log(step);
    this.index++; //Incrementing the index
  }
  start() {
    const interval = (60 / this.bpm) * 1000; // a representation of how quickly the interval is being reached
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

const drumkit = new Drunkit();

drumkit.pads.forEach((pad) => {
  pad.addEventListener("click", drumkit.activePad);
});

drumkit.playButton.addEventListener("click", (e) => {
  drumkit.start();
});
