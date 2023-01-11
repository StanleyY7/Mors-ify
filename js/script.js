window.addEventListener("DOMContentLoaded", () => {
  /* Global Variables */
  const textSubmit = document.querySelector("#text-submit");
  const morseSubmit = document.querySelector("#morse-submit");
  const closeIcon = document.querySelector("#close");
  const outputContainer = document.getElementById("output-container");
  const body = document.querySelector("body");

  const mapping = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",

    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
  };

  const opposite = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",

    "-----": 0,
    ".----": 1,
    "..---": 2,
    "...--": 3,
    "....-": 4,
    ".....": 5,
    "-....": 6,
    "--...": 7,
    "---..": 8,
    "----.": 9,
  };

  /* Functions */

  let textToMorse = () => {
    outputContainer.style.display = "block";
    let input = document.getElementById("input-text").value.toUpperCase();

    let arr1 = input.split("");

    let arr2 = arr1.map((x) => {
      if (mapping[x]) {
        return mapping[x];
      } else {
        return x;
      }
    });

    let code = arr2.join(" ");

    document.getElementById("output").value = code;
  };

  let morseToText = () => {
    outputContainer.style.display = "block";
    let trueInput = document.getElementById("input-morse").value;
    let trueInputArr = [trueInput];
    let input = trueInput.toUpperCase();

    let morseArr = input.split("");

    let mappedMorseArr = morseArr.map((y) => {
      if (opposite[y]) {
        return opposite[y];
      } else {
        return trueInputArr[trueInputArr.length - 1];
      }
    });

    let codeMorse = mappedMorseArr.join(" ");
    document.getElementById("output").value = codeMorse;
  };

  const hideOutput = () => {
    outputContainer.style.display = "none";
  };

  const displayOutputText = () => {
    textToMorse();
  };

  const displayOutputMorse = () => {
    morseToText();
  };

  closeIcon.addEventListener("click", hideOutput);
  textSubmit.addEventListener("click", displayOutputText);
  morseSubmit.addEventListener("click", displayOutputMorse);

  /* Clara Intro */

  const claraStart = document.querySelector("#clara-start");
  const claraNext = document.querySelector("#clara-next");
  const startClara = (event) => {
    if (event.key === "Enter") {
      claraStart.style.display = "none";
      claraNext.style.display = "block";
      body.addEventListener("keypress", (event) => {
        if (event.key === "Enter") claraNext.style.display = "none";
      });
    } else if (event.key === "s") {
      claraStart.remove();
    }
  };

  body.addEventListener("keypress", startClara);

  /* Draggable Output Container*/

  const draggableElements = document.querySelectorAll(".draggable");

  draggableElements.forEach((item) => {
    let isDragging = false;
    let initialX;
    let initialY;
    let currentPosition = {};
    let initialPosition = {};

    const startDrag = (event) => {
      isDragging = true;
      initialPosition = {
        x: item.offsetLeft,
        y: item.offsetTop,
      };

      initialX = event.clientX || event.targetTouches[0].clientX;
      initialY = event.clientY || event.targetTouches[0].clientY;
    };

    const drag = (event) => {
      event.preventDefault();
      if (isDragging) {
        currentPosition = {
          x: event.clientX || event.targetTouches[0].clientX,
          y: event.clientY || event.targetTouches[0].clientY,
        };

        let diffX = currentPosition.x - initialX;
        let diffY = currentPosition.y - initialY;

        item.style.left = initialPosition.x + diffX + "px";
        item.style.top = initialPosition.y + diffY + "px";
      }
    };

    const endDrag = (event) => {
      isDragging = false;
    };

    item.addEventListener("mousedown", startDrag);
    item.addEventListener("touchstart", startDrag);
    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchend", endDrag);
  });
});
