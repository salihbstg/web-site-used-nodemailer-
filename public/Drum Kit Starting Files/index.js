const buttonCount = document.querySelectorAll(".drum").length;

const sounds = {
  4: new Audio("./sounds/crash.mp3"),
  5: new Audio("./sounds/kick-bass.mp3"),
  6: new Audio("./sounds/snare.mp3"),
  0: new Audio("./sounds/tom-1.mp3"),
  1: new Audio("./sounds/tom-2.mp3"),
  2: new Audio("./sounds/tom-3.mp3"),
  3: new Audio("./sounds/tom-4.mp3"),
};
const myAnimation=btn=>{
  document.querySelector("."+btn).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("."+btn).classList.remove("pressed");
  }, 100);
}
for (let i = 0; i < buttonCount; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", (event) => {
    event.target.style.color = "white";
    sounds[i].play();
  });
}
for (let i = 0; i < buttonCount; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("mouseleave", (event) => {
      event.target.style.color = "#da0463";
    });
}

document.addEventListener("keydown", (event) => {
  myAnimation(event.key);
  switch (event.key) {
    case "w":
      document.querySelectorAll(".drum")[0].style.color="white";
      sounds[0].currentTime = 0;
      sounds[0].play();
      break;
    case "a":
        document.querySelectorAll(".drum")[1].style.color="white";
      sounds[1].currentTime = 0;
      sounds[1].play();
      break;
    case "s":
        document.querySelectorAll(".drum")[2].style.color="white";
      sounds[2].currentTime = 0;
      sounds[2].play();
      break;
    case "d":
        document.querySelectorAll(".drum")[3].style.color="white";
      sounds[3].currentTime = 0;
      sounds[3].play();
      break;
    case "j":
        document.querySelectorAll(".drum")[4].style.color="white";
      sounds[4].currentTime = 0;
      sounds[4].play();
      break;
    case "k":
        document.querySelectorAll(".drum")[5].style.color="white";
      sounds[5].currentTime = 0;
      sounds[5].play();
      break;
    case "l":
        document.querySelectorAll(".drum")[6].style.color="white";
      sounds[6].currentTime = 0;
      sounds[6].play();
      break;
    default:
      console.log("geçeriz");
  }
});
document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "w":
      document.querySelectorAll(".drum")[0].style.color="#da0463";
      break;
    case "a":
        document.querySelectorAll(".drum")[1].style.color="#da0463";

      break;
    case "s":
        document.querySelectorAll(".drum")[2].style.color="#da0463";

      break;
    case "d":
        document.querySelectorAll(".drum")[3].style.color="#da0463";

      break;
    case "j":
        document.querySelectorAll(".drum")[4].style.color="#da0463";

      break;
    case "k":
        document.querySelectorAll(".drum")[5].style.color="#da0463";

      break;
    case "l":
        document.querySelectorAll(".drum")[6].style.color="#da0463";

      break;
    default:
      console.log("geçeriz");
  }
});
