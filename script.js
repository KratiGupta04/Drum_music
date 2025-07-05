function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
}

const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
  drum.addEventListener("click", () => {
    playSound(drum.dataset.sound);
    drum.classList.add("active");
    setTimeout(() => drum.classList.remove("active"), 200);
  });
});

document.addEventListener("keydown", (e) => {
  drums.forEach(drum => {
    if (e.key.toLowerCase() === drum.dataset.key.toLowerCase()) {
      playSound(drum.dataset.sound);
      drum.classList.add("active");
      setTimeout(() => drum.classList.remove("active"), 200);
    }
  });
});