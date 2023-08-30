const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(letters) {
  let newArray = [];
  for (let i = 0; i < letters[0].length; i++) {
    newArray.push([]);
  }

  for (let x = 0; x < letters.length; x++) {
    for (let y = 0; y < letters[0].length; y++) {
      newArray[y][x] = letters[x][y];
    }
  }
  return newArray;
};

module.exports = wordSearch;
