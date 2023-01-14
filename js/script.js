window.addEventListener("DOMContentLoaded", () => {
  /* Global Variables */
  const textSubmit = document.querySelector("#text-submit");
  const morseSubmit = document.querySelector("#morse-submit");
  const closeIcon = document.querySelector("#close");
  const outputContainer = document.getElementById("output-container");

  const body = document.querySelector("body");
  const copyMorseButton = document.querySelector("#copy-morse-button");
  const copyTextButton = document.querySelector("#copy-text-button");

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
    "...-": "V",
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
  const claraMin = document.querySelector("#clara-min");
  const claraRandomText = document.querySelector("#clara-random-text");

  const randomQuoteArray = [
    "Hello World!",
    "MORS•IFY!!!",
    "Exterminate!",
    "Testing....",
    "Excelsior!!!",
    "Rosebud....",
    "Schwing!!!",
  ];

  const randomSpeech = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    const randomElement = Math.floor(Math.random() * randomQuoteArray.length);

    if (randomNumber === 4) {
      claraMin.style.transform = "scale(1.08)";
      claraMin.style.filter = "brightness(120%)";

      claraRandomText.textContent = randomQuoteArray[randomElement];
      claraRandom.style.display = "block";

      setTimeout(() => {
        claraRandom.classList.add(".fade-out");
        claraRandom.style.display = "none";
        claraMin.style.transform = "scale(1)";
        claraMin.style.filter = "brightness(100%)";
      }, 4000);
    }
  };

  /* Ouput */

  let textToMorse = () => {
    copyTextButton.style.display = "none";
    copyMorseButton.style.display = "block";
    outputContainer.style.display = "block";

    randomSpeech();

    let input = document.getElementById("input-text").value.toUpperCase();

    let textArr = input.split("");

    let mappedTextArr = textArr.map((x) => {
      if (mapping[x]) {
        return mapping[x];
      } else {
        return x;
      }
    });

    let code = mappedTextArr.join(" ");

    const morseBeingCopied = code;

    document.getElementById("output").value = code;

    return morseBeingCopied;
  };

  let morseToText = () => {
    copyMorseButton.style.display = "none";
    copyTextButton.style.display = "block";
    outputContainer.style.display = "block";

    randomSpeech();

    let trueInput = document.getElementById("input-morse").value;

    let morseArr = trueInput.split(" ");

    let mappedMorseArr = morseArr
      .map((x) => {
        if (opposite[x]) {
          return x
            .split(" ")
            .map((b) => opposite[b])
            .join("");
        } else {
          return x;
        }
      })
      .join(" ");

    let text = mappedMorseArr.toLowerCase();
    const textBeingcopied = text;

    document.getElementById("output").value = text;
    return textBeingcopied;
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

  /* Copy Button */
  const copyingPopUp = () => {
    claraMin.style.transform = "scale(1.08)";
    claraMin.style.filter = "brightness(120%)";

    claraRandom.style.display = "block";
    claraRandomText.textContent = "Copying!!!!";

    setTimeout(() => {
      claraRandom.classList.add(".fade-out");
      claraRandom.style.display = "none";
      claraMin.style.transform = "scale(1)";
      claraMin.style.filter = "brightness(100%)";
    }, 4000);
  };

  const copiedPopUp = () => {
    setTimeout(() => {
      claraMin.style.transform = "scale(1.08)";
      claraMin.style.filter = "brightness(120%)";

      claraRandom.style.display = "block";
      claraRandomText.textContent = "Copied!!!!";

      setTimeout(() => {
        claraRandom.classList.add(".fade-out");
        claraRandom.style.display = "none";
        claraMin.style.transform = "scale(1)";
        claraMin.style.filter = "brightness(100%)";
      }, 4000);
    }, 5000);
  };

  let copyOutputMorse = () => {
    let morseBeingCopied = textToMorse();

    copyingPopUp();

    navigator.clipboard.writeText(morseBeingCopied);

    copiedPopUp();
  };

  let copyOutputText = () => {
    let textBeingCopied = morseToText();

    copyingPopUp();

    navigator.clipboard.writeText(textBeingCopied);

    copiedPopUp();
  };

  copyMorseButton.addEventListener("click", copyOutputMorse);
  copyTextButton.addEventListener("click", copyOutputText);

  /* Clara Intro */

  const claraStart = document.querySelector("#clara-start");
  const claraNext = document.querySelector("#clara-next");
  const claraMiddle = document.querySelector("#clara-middle");
  const endPromptClose = document.querySelector("#end-prompt-close");
  const endPrompt = document.querySelector(".end-prompt");
  const claraMinContainer = document.querySelector(
    ".clara-minimised-container"
  );

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
                  claraMinContainer.style.display = "block";
                }
              });
            }
          });
        }
      });
    } else if (event.key === "s") {
      claraStart.remove();
      claraMinContainer.style.display = "block";
    }
  };

  const hideEndPrompt = () => {
    endPrompt.remove();
    claraMinContainer.style.display = "block";
  };

  body.addEventListener("keypress", startClara);
  endPromptClose.addEventListener("click", hideEndPrompt);

  /* Touch Buttons */
  const enterButton = document.querySelector("#enter-button");
  const sButton = document.querySelector("#s-button");

  const startClaraViaTouchButtons = (event) => {
    sButton.remove();
    claraStart.remove();
    claraNext.style.display = "block";
    enterButton.addEventListener("click", (event) => {
      if (event.type === "click") {
        claraNext.remove();
        claraMiddle.style.display = "block";
        enterButton.addEventListener("click", (event) => {
          if (event.type === "click") {
            claraMiddle.remove();
            endPrompt.style.display = "block";
            sButton.remove();
            enterButton.remove();
            enterButton.addEventListener("click", (event) => {
              if (event.type === "click") {
                endPrompt.remove();
                claraMinContainer.style.display = "block";
              }
            });
          }
        });
      }
    });
  };

  const endClaraViaTouchButtons = () => {
    claraStart.remove();
    claraMinContainer.style.display = "block";
    enterButton.remove();
    sButton.remove();
  };

  enterButton.addEventListener("click", startClaraViaTouchButtons);
  sButton.addEventListener("click", endClaraViaTouchButtons);

  /* Draggable Elements */

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
