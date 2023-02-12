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

const opposite = Object.entries(mapping).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

const convertTextToMorse = (testInput) => {
  let input =
    testInput.toUpperCase() ||
    document.getElementById("input-text").value.toUpperCase();

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

  return morseBeingCopied;
};

const convertMorseToText = (testInput) => {
  let input = testInput || document.getElementById("input-morse").value;

  let morseArr = input.split(" ");

  let mappedMorseArr = morseArr
    .map((x) => {
      if (opposite[x]) {
        return x
          .split(" ")
          .map((b) => opposite[b])
          .join("");
      } else {
        return x + " ";
      }
    })
    .join(" ");

  let text = mappedMorseArr.toLowerCase();

  const textBeingcopied = text.replace(/\s+/g, (m) =>
    m.length === 1 ? "" : m
  );

  return textBeingcopied.replace(/ {2,}/g, " ");
};

module.exports = { convertMorseToText, convertTextToMorse };
