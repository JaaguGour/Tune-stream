document.body.style.background = " antiquewhite";
let mode = document.querySelector(".mode");
mode.addEventListener("click", () => {
  let cont = document.querySelector(".cont");
  if (cont.style.backgroundColor == "black") {
    cont.style.backgroundColor = "white";
    cont.style.color = "black";
    document.querySelector(".txt").innerHTML = "Dark mode";
    document.body.style.background = " antiquewhite";
    document.getElementById("user").style.color = "white";
    document.getElementById("user").style.background = "black";
    document.querySelector(".cont").style.border = "1px solid black";
    document.querySelector(".bottom").style.border = "1px solid black";
    document.querySelector(".bottom").style.backgroundColor = "white";
    document.querySelector(".icon").style.color = "black";
    document.querySelector(".text").style.color = "black";
    document.getElementById("timestamp").style.color = "black";
  } else {
    cont.style.backgroundColor = "black";
    document.getElementById("user").style.color = "black";
    document.getElementById("user").style.background = "white";
    cont.style.color = "white";
    document.querySelector(".txt").innerHTML = "light mode";
    document.body.style.background = "#201e1e";
    document.querySelector(".cont").style.border = "1px solid white";
    document.querySelector(".bottom").style.border = "1px solid white";
    document.querySelector(".bottom").style.backgroundColor = "black";
    document.querySelector(".icon").style.color = "white";
    document.querySelector(".text").style.color = "white";
    document.getElementById("timestamp").style.color = "white";
    document.getElementById("user").style.background = "white";
  }
});

//initialization
let songindex = 0;
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let audioElement = new Audio("song/Loseyourself.mp3");
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    if (songindex == 0) {
      console.log("0");
      play[0].classList.remove("fa-circle-play");
      play[0].classList.add("fa-circle-pause");
    }
    play[songindex - 1].classList.add("fa-circle-pause");
    play[songindex - 1].classList.remove("fa-circle-play");
  } else {
    audioElement.pause();
    masterplay.classList.add("fa-circle-play");
    masterplay.classList.remove("fa-circle-pause");
    if (songindex == 0) {
      console.log("0");
      play[0].classList.remove("fa-circle-pause");
      play[0].classList.add("fa-circle-play");
    }
    play[songindex - 1].classList.add("fa-circle-play");
    play[songindex - 1].classList.remove("fa-circle-pause");
  }
});
audioElement.addEventListener("timeupdate", () => {
  console.log(parseInt(audioElement.currentTime));
  myprogressbar.value = parseInt(audioElement.currentTime);
});
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime = myprogressbar.value;
});


 
let song = [
  {
    songname: "Loseyourself",
    filepath: "song/Loseyourself.mp3",
    coverpath: "images/the.jpg",
  },
  {
    songname: "Withoutme",
    filepath: "song/Withoutme.mp3",
    coverpath: "images/Withoutme.jpg",
  },
  {
    songname: "whenimgone",
    filepath: "song/whenimgone.mp3",
    coverpath: "images/when.jpg",
  },
  {
    songname: "therealslimshedy",
    filepath: "song/therealslimshedy.mp3",
    coverpath: "images/the.jpg",
  },
  {
    songname: "notafraid",
    filepath: "song/notafraid.mp3",
    coverpath: "images/notafraid.jpg",
  },
  {
    songname: "mynameis",
    filepath: "song/mynameis.mp3",
    coverpath: "images/myname.jpg",
  },
  {
    songname: "mockingbird",
    filepath: "song/mockingbird.mp3",
    coverpath: "images/mockingbird.jpg",
  },
  {
    songname: "love the way you lie",
    filepath: "song/lovetheway.mp3",
    coverpath: "images/lovetheway.jpg",
  },
];

let songitems = Array.from(document.getElementsByClassName("songitem"));
songitems.forEach((element, index) => {
  element.getElementsByTagName("img")[0].src = song[index].coverpath;
  element.getElementsByClassName("sname")[0].textContent = song[index].songname;
});

//apun ka code
makeAllpause = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

audioElement.addEventListener("loadeddata", () => {
  let timestamp = document.getElementById("timestamp");
  const duration = audioElement.duration;
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  console.log(`${minutes}:${seconds}`);
  if (seconds > 10) {
    timestamp.textContent = `0${minutes}:${seconds}`;
  } else {
    timestamp.textContent = `0${minutes}:0${seconds}`;
  }
});

let play = Array.from(document.getElementsByClassName("songitemplay"));
play.forEach((element) => {
  element.addEventListener("click", (e) => {
    songindex = parseInt(e.target.id);
    makeAllpause();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src = `${song[songindex - 1].filepath}`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    document.getElementById("text").innerText = song[songindex - 1].songname;
    document.getElementById("cd").src = song[songindex - 1].coverpath;
    document.getElementById("cd").style.display = "inline";
    if (document.querySelector(".bottom").style.backgroundColor === "black") {
      document.getElementById("text").style.color = "white";
    }
    document.getElementById("timestamp").style.display = "inline";
  });
});

let backword = document.getElementById("backword");
backword.addEventListener("click", () => {
  if (songindex > 0) {
    songindex--;
  } else {
    songindex = song.length;
  }
  document.getElementById("text").innerText = song[songindex - 1].songname;
  document.getElementById("cd").src = song[songindex - 1].coverpath;
  audioElement.src = `${song[songindex - 1].filepath}`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  makeAllpause();
  play[songindex - 1].classList.remove("fa-circle-play");
  play[songindex - 1].classList.add("fa-circle-pause");
});
let forword = document.getElementById("forword");
forword.addEventListener("click", () => {
  if (songindex < 9) {
    songindex++;
  } else {
    songindex = 1;
  }
  document.getElementById("text").innerText = song[songindex - 1].songname;
  document.getElementById("cd").src = song[songindex - 1].coverpath;
  audioElement.src = `${song[songindex - 1].filepath}`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  makeAllpause();
  play[songindex - 1].classList.remove("fa-circle-play");
  play[songindex - 1].classList.add("fa-circle-pause");
});

// login

let userlogin = document.getElementById("userlogin");
userlogin.addEventListener("click", () => {
  document.querySelector(".login").style.display = "block";
  console.log("hiiiiiii");
  document.getElementById("cancel").addEventListener("click", () => {
    document.querySelector(".login").style.display = "none";
  });
});
document.getElementById("login").addEventListener("click", () => {
  let user = document.getElementById("username");
  if (user.length >= 3 && document.getElementById("password").length >= 3) {
    alert("successfull");
  } else {
    document.getElementById("pass").innerText =
      "please provide a valid username and password";
    alert("login failed");
  }
});
