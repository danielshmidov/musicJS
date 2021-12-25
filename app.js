class Drunkit {
  constructor() {
    this.pad = document.querySelector(".pad");
    this.KickAudio = document.querySelector(".kick-sound");
    this.SnareAudio = document.querySelector(".snare-sound");
    this.HihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b`+step);   //Selecting the active bar
    this.index++; //Incrementing the index 
  }
  start() {
    setInterval(() => {
      this.repeat();
    }, 1000);
  }
}

const drumkit = new Drunkit();

drumkit.start(); //starting the drumkit
