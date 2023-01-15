// Text To Morse Test

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

let textToMorse = (input) => {
  let inputValue = input.toUpperCase();

  let textArr = inputValue.split("");

  let mappedTextArr = textArr.map((x) => {
    if (mapping[x]) {
      return mapping[x];
    } else {
      return x;
    }
  });

  let code = mappedTextArr.join(" ");

  return code;
};

describe("testing textToMorse", () => {
  it("should convert all uppercase text input to morse code", () => {
    let input = "HELLO";
    const morseCode = textToMorse(input);
    expect(morseCode).toBe(".... . .-.. .-.. ---");
  });
  it("should convert all lowercase to morse code", () => {
    let input = "hello";
    const morseCode = textToMorse(input);
    expect(morseCode).toBe(".... . .-.. .-.. ---");
  });
  it("should convert both uppercase and lowercase text input to morse code", () => {
    let input = "HeLLo";
    const morseCode = textToMorse(input);
    expect(morseCode).toBe(".... . .-.. .-.. ---");
  });
  it("should return morse code input as text", () => {
    let input = ".... . .-.. .-.. ---";
    const morseCode = textToMorse(input);
    expect(morseCode).toBe(". . . .   .   . - . .   . - . .   - - -");
  });
});

// Morse to Text Test

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

const morseToText = (input) => {
  let trueInput = input;

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

  const textBeingcopied = text.replace(/\s+/g, (m) =>
    m.length === 1 ? "" : m
  );

  return textBeingcopied.replace(/ {2,}/g, " ");
};

describe("testing morseToText", () => {
  it("should convert morse code input into text", () => {
    let input = "- . ... -   - . ... -";
    let text = morseToText(input);
    expect(text).toBe("test test");
  });
});
