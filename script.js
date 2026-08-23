const program = {
  copitalize: (words) => {
    return (
      String(words).charAt(0).toUpperCase() +
      String(words).slice(1).toLowerCase()
    );
  },

  reverse: (words) => {
    let text = "";
    const wordsLength = words.length;
    if (wordsLength > 0) {
      for (let i = wordsLength - 1; i >= 0; i--) {
        text += words[i];
      }
    }
    return text;
  },

  calculator: {
    subtract: (n1, n2) => {
      return n1 - n2;
    },
    divide: (n1, n2) => {
      if (n2 === 0) {
        return "Could divide with 0.";
      } else {
        return n1 / n2;
      }
    },
    multiply: (n1, n2) => {
      return n1 * n2;
    },
  },

  caesarCipher: (str, num) => {
    const lowercaseAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const uppercaseAlphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    const strArr = [...str];
    let newArr = [];
    strArr.forEach((char) => {
      if (
        lowercaseAlphabet.includes(char) ||
        uppercaseAlphabet.includes(char)
      ) {
        if (char == char.toUpperCase()) {
          let newIndex = 0;

          uppercaseAlphabet.forEach((item, index) => {
            if (item == char) {
              for (let i = index; i <= index + num; i++) {
                if (i == uppercaseAlphabet.length) {
                  newIndex = 0;
                } else if (i > uppercaseAlphabet.length) {
                  newIndex++;
                } else {
                  newIndex = i;
                }
              }
            }
          });
          char = uppercaseAlphabet[newIndex];
          newArr.push(char);
        } else if (char == char.toLowerCase()) {
          let newIndex = 0;

          lowercaseAlphabet.forEach((item, index) => {
            if (item == char) {
              for (let i = index; i <= index + num; i++) {
                if (i == lowercaseAlphabet.length) {
                  newIndex = 0;
                } else if (i > lowercaseAlphabet.length) {
                  newIndex++;
                } else {
                  newIndex = i;
                }
              }
            }
          });
          char = lowercaseAlphabet[newIndex];
          newArr.push(char);
        }
      } else {
        newArr.push(char);
      }
    });
    return newArr.join("");
  },

  analyzeArray: (arr) => {
    return {
      average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
      min: Math.min.apply(null, arr),
      max: Math.max.apply(null, arr),
      length: arr.length,
    };
  },
};
export { program };
