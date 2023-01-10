window.addEventListener("DOMContentLoaded", () => {
  /* Global Variables */
  const textSubmit = document.querySelector("#text-submit");
  const morseSubmit = document.querySelector("#morse-submit");
  const closeIcon = document.querySelector("#close");
  const outputContainer = document.getElementById("output-container");

  const hideOutput = () => {
    outputContainer.style.display = "none";
  };

  const displayOutput = () => {
    outputContainer.style.display = "block";
  };

  closeIcon.addEventListener("click", hideOutput);
  textSubmit.addEventListener("click", displayOutput);
  morseSubmit.addEventListener("click", displayOutput);

  // Draggable Output

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
