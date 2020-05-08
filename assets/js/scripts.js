// const LETTER_DELAY = 100;

// const lines = [
//     'Hello my name is Sam Catley',
//     'My projects are below...'
// ];

// const typeLetter = (letter) => $('.typewriter .content').append(letter);

// const typeLine = (line) => {
//     return new Promise((resolve, reject) => {
//         line.split('').forEach((letter, index) => {
//             setTimeout(() => typeLetter(letter), LETTER_DELAY * index);
//             if (index === line.length - 1) {
//                 resolve();
//             }
//         });
//     });
// }

// lines.forEach((line) => typeLine(line));