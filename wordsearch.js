const transposed = matrix => {
    const newArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    }
  
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        newArray[y][x] = matrix[x][y];
      }
    }
    return newArray;
}

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }  

    const verticalJoin = transposed(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }  

    return false
}

module.exports = wordSearch

// [[1, 2, 3],
// [1, 2, 3]]

// [[1, 1],
// [2, 2],
// [3, 3]]