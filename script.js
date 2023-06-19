function letterCombinations(input_digit) {
if (nextDigits.length === 0) {
      combinations.push(current);
      return;
    }

    // Get the letters corresponding to the first digit
    const letters = digitToLetters[nextDigits[0]];

    // Iterate over each letter and recursively call the function for the remaining digits
    for (let i = 0; i < letters.length; i++) {
      generateCombinations(current + letters[i], nextDigits.slice(1));
    }
  }

  // Start the recursive function with an empty string and the input digits
  if (digits) {
    generateCombinations("", digits);
  }

  return combinations;
}

module.exports = letterCombinations;
