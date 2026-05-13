window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");

  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  function playSound(index) {
    if (!sounds[index]) return;

    sounds[index].currentTime = 0;
    sounds[index].play();
    createBubble(index);

    // small visual click effect
    pads[index].classList.add("active-pad");

    setTimeout(() => {
      pads[index].classList.remove("active-pad");
    }, 150);
  }

  pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
      playSound(index);
    });
  });

  window.addEventListener("keydown", (event) => {
    const key = event.key;

    // keys 1 to 6
    if (key >= "1" && key <= "6") {
      const index = Number(key) - 1;
      playSound(index);
    }
  });

  function createBubble(index) {
    const bubble = document.createElement("div");

    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;

    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  }
});
