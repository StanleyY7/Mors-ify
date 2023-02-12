// Text To Morse Test

const { convertTextToMorse, convertMorseToText } = require("./functionClone");

let textToMorse = (testInput) => convertTextToMorse(testInput);

describe("testing textToMorse", () => {
  it("should convert all uppercase text input to morse code", () => {
    let testInput = "HELLO";
    const morseCode = textToMorse(testInput);
    expect(morseCode).toBe(".... . .-.. .-.. ---");
  });
  it("should convert all lowercase to morse code", () => {
    let testtestInput = "hello";
    const morseCode = textToMorse(testtestInput);
    expect(morseCode).toBe(".... . .-.. .-.. ---");
  });
  it("should convert both uppercase and lowercase text input to morse code", () => {
    let testInput = "HeLLo";
    const morseCode = textToMorse(testInput);
    expect(morseCode).toBe(".... . .-.. .-.. ---");
  });
  it("should return morse code input as morse code", () => {
    let testInput = ".... . .-.. .-.. ---";
    const morseCode = textToMorse(testInput);
    expect(morseCode).toBe(". . . .   .   . - . .   . - . .   - - -");
  });
});

// Morse to Text Test

let morseToText = (testInput) => convertMorseToText(testInput);

describe("testing morseToText", () => {
  it("should convert morse code input into text", () => {
    let testInput = "- . ... -   - . ... -";
    let text = morseToText(testInput);
    expect(text).toBe("test test");
  });
  it("should return text input as text", () => {
    let testInput = "test test";
    let text = morseToText(testInput);
    expect(text).toBe("test test");
  });
});
