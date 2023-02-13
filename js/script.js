import { convertTextToMorse, convertMorseToText } from "./function.js";

window.addEventListener("DOMContentLoaded", () => {
  /* Global Variables */
  const textSubmit = document.querySelector("#text-submit");
  const morseSubmit = document.querySelector("#morse-submit");
  const closeIcon = document.querySelector("#close");
  const outputContainer = document.getElementById("output-container");

  const body = document.querySelector("body");
  const copyMorseButton = document.querySelector("#copy-morse-button");
  const copyTextButton = document.querySelector("#copy-text-button");

  /* Functions */

  /* Clara Random Quotes */
  const claraRandom = document.querySelector("#clara-random");
  const claraMin = document.querySelector("#clara-min");
  const claraRandomText = document.querySelector("#clara-random-text");

  const randomQuoteArray = [
    "Hello World!",
    "MORS•IFY!!!",
    "Exterminate!!",
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

    return convertTextToMorse();
  };

  let morseToText = () => {
    copyMorseButton.style.display = "none";
    copyTextButton.style.display = "block";
    outputContainer.style.display = "block";

    randomSpeech();
    return convertMorseToText();
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
      claraNext.remove();
      claraMiddle.remove();
      endPrompt.remove();
      claraMinContainer.style.display = "block";
    }
  };

  const hideEndPrompt = () => {
    endPrompt.remove();
    claraMinContainer.style.display = "block";
  };

  body.addEventListener("keypress", startClara);
  endPromptClose.addEventListener("click", hideEndPrompt);

  /* Clara Min Hover */

  const toggleClaraMin = (event) => {
    if (event === "mouseover") {
      claraMin.style.transform = "scale (1.08)";
      claraMin.style.filter = "grayscale(0%) brightness(120%)";
    }
    claraMin.style.transform = "scale (1)";
    claraMin.style.filter = "grayscale(0%) brightness(100%)";
  };

  claraMin.addEventListener("mouseover", toggleClaraMin);
  claraMin.addEventListener("mouseout", toggleClaraMin);

  /* Touch Buttons */
  const enterButton = document.querySelector("#enter-button");
  const sButton = document.querySelector("#s-button");

  const startClaraViaTouchButtons = (event) => {
    sButton.classList.add("fade-out");
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
            sButton.classList.add("fade-out");
            enterButton.classList.add("fade-out");
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
    enterButton.classList.add("fade-out");
    sButton.classList.add("fade-out");
  };

  enterButton.addEventListener("click", startClaraViaTouchButtons);
  sButton.addEventListener("click", endClaraViaTouchButtons);

  /* Help Modal */
  const helpClose = document.querySelector("#help-close");
  const helpContainer = document.querySelector(".help-container");

  const hideHelp = () => {
    helpContainer.style.display = "none";
    claraMin.style.transform = "scale(1)";
    claraMin.style.filter = "brightness(100%)";
  };

  const displayHelp = () => {
    claraMin.style.transform = "scale(1.08)";
    claraMin.style.filter = "brightness(120%)";
    helpContainer.style.display = "block";
  };

  helpClose.addEventListener("click", hideHelp);
  claraMin.addEventListener("click", displayHelp);

  /* Close All */

  const closeAll = (event) => {
    if (event.key === "Escape") {
      helpContainer.style.display = "none";
      outputContainer.style.display = "none";
    }
  };

  body.addEventListener("keydown", closeAll);

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
