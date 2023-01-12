window.addEventListener("DOMContentLoaded", () => {
  /* Global Variables */
  const textSubmit = document.querySelector("#text-submit");
  const morseSubmit = document.querySelector("#morse-submit");
  const closeIcon = document.querySelector("#close");
  const outputContainer = document.getElementById("output-container");
  const outputContainerForMorse = document.getElementById(
    "output-container-for-morse"
  );
  const body = document.querySelector("body");
  const copyMorseButton = document.querySelector("#copy-morse-button");
  const copyTextButton = document.querySelector("#copy-text-button");
  const closeMorse = document.querySelector("#close-morse");

  const footer = document.querySelector("footer");

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
    V: "...-",
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

  /* Clara Random Quotes */
  const claraRandom = document.querySelector("#clara-random");
  const claraProfile = document.querySelector("#clara-profile");
  const claraRandomText = document.querySelector("#clara-random-text");

  const randomQuoteArray = [
    "Hello World!",
    "MORS•IFY!!!",
    "Exterminate!",
    "Testing...",
  ];

  const randomSpeech = () => {
    const randomNumber = Math.floor(Math.random() * 15) + 1;
    const randomElement = Math.floor(Math.random() * randomQuoteArray.length);

    if (randomNumber <= 15) {
      claraRandomText.textContent = randomQuoteArray[randomElement];
      claraRandom.style.display = "block";
      claraProfile.style.transform = "scale(1.04)";
      claraProfile.style.filter = "brightness(110%)";

      setTimeout(() => {
        claraRandom.classList.add(".fade-out");
        claraRandom.style.display = "none";
        claraProfile.style.transform = "scale(1)";
      }, 4000);
    }
  };

  let textToMorse = () => {
    outputContainer.style.display = "block";

    randomSpeech();

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

    const morseBeingCopied = code;

    document.getElementById("output").value = code;

    return morseBeingCopied;
  };

  let morseToText = () => {
    outputContainerForMorse.style.display = "block";

    randomSpeech();

    let trueInput = document.getElementById("input-morse").value;

    let input = trueInput.toUpperCase();

    let morseArr = input.split("");

    let mappedMorseArr = morseArr.map((y) => {
      if (opposite[y]) {
        return opposite[y];
      } else {
        return y;
      }
    });

    let codeMorse = mappedMorseArr.join(" ");
    const textBeingcopied = codeMorse;
    document.getElementById("output-morse").value = codeMorse;
    return textBeingcopied;
  };

  const hideOutput = () => {
    outputContainer.style.display = "none";
  };
  const hideOutputMorse = () => {
    outputContainerForMorse.style.display = "none";
  };
  let copyOutputMorse = () => {
    let morseBeingCopied = textToMorse();

    navigator.clipboard.writeText(morseBeingCopied);
    setTimeout(() => {
      alert("Morse code copied!");
    }, 5000);
  };

  let copyOutputText = () => {
    let textBeingCopied = morseToText();
    navigator.clipboard.writeText(textBeingCopied);

    setTimeout(() => {
      alert("Text copied!");
    }, 5000);
  };

  const displayOutputText = () => {
    textToMorse();
  };

  const displayOutputMorse = () => {
    morseToText();
  };

  closeIcon.addEventListener("click", hideOutput);
  closeMorse.addEventListener("click", hideOutputMorse);
  textSubmit.addEventListener("click", displayOutputText);
  morseSubmit.addEventListener("click", displayOutputMorse);
  copyMorseButton.addEventListener("click", copyOutputMorse);
  copyTextButton.addEventListener("click", copyOutputText);

  /* Clara Intro */

  const claraStart = document.querySelector("#clara-start");
  const claraNext = document.querySelector("#clara-next");
  const claraMiddle = document.querySelector("#clara-middle");
  const endPromptClose = document.querySelector("#end-prompt-close");
  const endPrompt = document.querySelector(".end-prompt");
  const claraMin = document.querySelector(".clara-minimised-container");

  const startClara = (event) => {
    if (event.key === "Enter") {
      claraStart.remove();
      claraNext.style.display = "block";
      body.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          claraNext.remove();
          claraMiddle.style.display = "block";
          body.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
              claraMiddle.remove();
              endPrompt.style.display = "block";
              body.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                  endPrompt.remove();
                  claraMin.style.display = "block";
                }
              });
            }
          });
        }
      });
    } else if (event.key === "s") {
      claraStart.remove();
      claraMin.style.display = "block";
    }
  };

  const hideEndPrompt = () => {
    endPrompt.remove();
    claraMin.style.display = "block";
  };

  body.addEventListener("keypress", startClara);
  endPromptClose.addEventListener("click", hideEndPrompt);

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
