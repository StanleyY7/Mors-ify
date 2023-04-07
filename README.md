# Project: Mors•ify (Morse Code Translator)

Link https://stanleyy7.github.io/Mors-ify/

![morsifyDisplay](https://user-images.githubusercontent.com/119549394/212604034-ddce2d75-fbc8-485f-9610-7ea056839546.png)

<img width="250" src="https://github.com/StanleyY7/Mors-ify/actions/workflows/main.yml/badge.svg"/>

## Outline

The main aim of this project was to expand on previous knowledge around HTML & SCSS/CSS whilst also building upon newly aquired knowledge in Javascript. This project involved creating a Morse Code Translator from scratch and designing the front-end for it with no reference images provided. This project required the front-end to be scalable, responsive and useable on a variety of devices/viewports.

### Features

- A responsive UI.
- Ability to translate text to morse code (with proper spacing).
- Ability to translate morse code to text (with proper spacing).
- Use of tests.

## MVP

The main requirements for this project were:

- Create a user interface that allows the user to either input some English text or some Morse Code.
- Create JS functions that would allow the user to:

  - Translate their English text into Morse Code.
  - Translate their Morse Code into English text.

- Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters).
- Must have at least two test suites i.e (two describe blocks).

## Summary

I achieved the requirements for this project by first designing how I wanted the website to look like, I then worked on implementing the MVP requirements and doing media queries (at basic layout level) until it was fully responsive. From there, I added additional features to the UI to make it more "unique". After that, I completed media queries from the bottom (galaxy fold) up (4k resolution). I also created the necessary tests as per the MVP requirements and made sure that my additional features worked as well by testing it extensively while completing media queries. 

The main challenges experienced whilst completing this project was creating the code/logic to convert morse code into text as well as creating the copy feature for the project (as there was a delay from where the user presses the copy button and for the actual output to then be copied to the clipboard). To resolve these challenges, I looked at available resources online and I also tested out different solutions. As an example for the copy feature, I experimented with using alert() to notify the user that it can take some time to copy, to eventually making the final solution to that problem which was using a combination of setTimeout() and modals, more specifically I made an alert modal to the user first that it was copying, the copying then starts/ends, whilst a setTimeout then runs to ensure user is only alerted via another model after the copying has finished, whilst I also made sure that the modals fit the theme of the website and doesn't hinder UX. 

## Tech Stack

- HTML
- CSS/SCSS
- Javascript
