//TODO change name of the class
class Drunkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playButton = document.querySelector(".play");
    this.KickAudio = document.querySelector(".kick-sound");
    this.SnareAudio = document.querySelector(".snare-sound");
    this.currentKick = "./allSounds/kick-classic.wav";
    this.currentSnare = "./allSounds/snare-acoustic01.wav";
    this.currentHihat = "./allSounds/hihat-acoustic01.wav";
    this.HihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
    this.select = document.querySelectorAll("select");
    this.muteBtn = document.querySelectorAll(".mute");
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
    } else {
      //clear the interval
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    }
  }

  updateButton() {
    if (!this.isPlaying) {
      this.playButton.innerHTML = "Stop";
      this.playButton.classList.add("active");
    } else {
      this.playButton.innerHTML = "Play";
      this.playButton.classList.remove("active");
    }
  }

  changeSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;
    // console.log(selectionName);
    // console.log(selectionValue);
    switch (selectionName) {
      case "kick-select":
        this.KickAudio.src = selectionValue;
        break;
      case "snare-select":
        this.SnareAudio.src = selectionValue;
        break;
      case "hihat-select":
        this.HihatAudio.src = selectionValue;
        break;
    }
  }

  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.KickAudio.volume = 0;
          break;
        case "1":
          this.snareAudio.volume = 0;
          break;
        case "2":
          this.HihatAudio.volume = 0;
          break;
      }
      } else {
        switch (muteIndex) {
          case "0":
            this.KickAudio.volume = 1;
            break;
          case "1":
            this.snareAudio.volume = 1;
            break;
          case "2":
            this.HihatAudio.volume = 1;
            break;
      }
    }
  }
}

const drumkit = new Drunkit();

//Event Listeners

drumkit.pads.forEach((pad) => {
  pad.addEventListener("click", drumkit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumkit.playButton.addEventListener("click", (e) => {
  drumkit.updateButton();
  drumkit.start();
});

drumkit.select.forEach((select) => {
  select.addEventListener("change", (e) => {
    drumkit.changeSound(e);
  });
});

drumkit.muteBtn.forEach((muteBtn) => {
  muteBtn.addEventListener("click", (e) => {
    drumkit.mute(e);
  });
});
