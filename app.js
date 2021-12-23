class Drunkit {
  constructor() {
    this.pad = document.querySelector(".pad");
    this.KickAudio = document.querySelector(".kick-sound");
    this.SnareAudio = document.querySelector(".snare-sound");
    this.HihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
  }
  repeat() {
    let step = this.index % 8;
    console.log(step);
    this.index++; //Incrementing the index to be freaking happy
  }
  start() {
    setInterval(() => {
      this.repeat();
    }, 1000);
  }
}

const drumkit = new Drunkit();

drumkit.start(); //starting the drumkit
