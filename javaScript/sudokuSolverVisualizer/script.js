"use strict";

const btnAll = document.querySelectorAll(".btn");
const textAll = document.querySelectorAll(".btn-text");

// set up the numbs
textAll[2].textContent = 2;
textAll[4].textContent = 9;
textAll[6].textContent = 7;
textAll[8].textContent = 4;
textAll[10].textContent = 8;
textAll[17].textContent = 9;
textAll[19].textContent = 7;
textAll[20].textContent = 9;
textAll[21].textContent = 1;
textAll[27].textContent = 9;
textAll[28].textContent = 1;
textAll[34].textContent = 8;
textAll[41].textContent = 8;
textAll[44].textContent = 7;
textAll[50].textContent = 3;
textAll[51].textContent = 2;
textAll[52].textContent = 5;
textAll[60].textContent = 3;
textAll[61].textContent = 4;
textAll[64].textContent = 2;
textAll[66].textContent = 4;
textAll[73].textContent = 4;
textAll[74].textContent = 5;
textAll[76].textContent = 9;
textAll[80].textContent = 6;

// get the row
function checkRowIndex(index) {
  if (index === 1 || index === 2 || index === 3) return 0;
  if (index === 4 || index === 5 || index === 6) return 1;
  if (index === 7 || index === 8 || index === 9 || index === 0) return 2;
}

function checkRow(index) {
  const modIndex = index % 9;
  const divIndex = Math.trunc(index / 9);
  if (index <= 9) {
    return checkRowIndex(index);
  } else {
    if (divIndex <= 2) return checkRowIndex(modIndex);
    if (divIndex >= 3 && divIndex <= 5) {
      if (index === 27) {
        return checkRowIndex(modIndex);
      } else {
        return checkRowIndex(modIndex) + 3;
      }
    }
    if ((divIndex) => 6 && divIndex <= 9) {
      if (index === 54) {
        return checkRowIndex(modIndex) + 3;
      } else {
        return checkRowIndex(modIndex) + 6;
      }
    }
  }
}

// get the column
function checkColumnIndex(index) {
  if (index === 1 || index === 4 || index === 7) return 0;
  if (index === 2 || index === 5 || index === 8) return 1;
  if (index === 3 || index === 6 || index === 9 || index === 0) return 2;
}

function checkColumn(index) {
  const modIndex = index % 9;
  const divIndex = Math.trunc(index / 9);
  if (index <= 9) {
    return checkColumnIndex(index);
  } else {
    if (checkColumnIndex(divIndex) === 2) {
      if (index === 27 || index === 54 || index === 81) {
        return checkColumnIndex(modIndex) + 6;
      } else {
        return checkColumnIndex(modIndex);
      }
    }
    if (checkColumnIndex(divIndex) === 0) {
      if (index === 36 || index === 63) {
        return checkColumnIndex(modIndex);
      } else {
        return checkColumnIndex(modIndex) + 3;
      }
    } else if (checkColumnIndex(divIndex) === 1) {
      if (index === 18 || index === 45 || index === 72) {
        return checkColumnIndex(modIndex) + 3;
      } else {
        return checkColumnIndex(modIndex) + 6;
      }
    }
  }
}

// get the existing num
function checkExNum(index) {
  if (textAll[index] !== "") {
    return Number(textAll[index].textContent);
  } else {
    return 0;
  }
}

// get index by row, col
function getIndexBYRC(row, col) {
  for (let i = 0; i < textAll.length; i++) {
    if (checkRow(i + 1) === row && checkColumn(i + 1) === col) return i;
  }
}

// check if our input's in row
function isInRow(num, row) {
  for (let i = 0; i < 9; i++) {
    const index = getIndexBYRC(row, i);
    if (checkExNum(index) === num) return true;
  }
  return false;
}

// check if our input's in column
function isInColumn(num, col) {
  for (let i = 0; i < 9; i++) {
    const index = getIndexBYRC(i, col);
    if (checkExNum(index) === num) return true;
  }
  return false;
}

//box no. checking
function checkBox(index) {
  const divIndex = Math.trunc(index / 9);
  switch (index) {
    case 9:
      return 0;
      break;
    case 18:
      return 1;
      break;
    case 27:
      return 2;
      break;
    case 36:
      return 3;
      break;
    case 45:
      return 4;
      break;
    case 54:
      return 5;
      break;
    case 63:
      return 6;
      break;
    case 72:
      return 7;
      break;
    case 81:
      return 8;
      break;
    default:
      return divIndex;
  }
}

// check if our input's is in the box(9*9)
function isInBox(num, box) {
  for (let i = 0; i < 9; i++) {
    if (Number(textAll[9 * box + i].textContent) === num) {
      return true;
    }
  }
  return false;
}

// recursive function
function solveITRecursive(tempIndex, numEX) {
  console.log("recursive", tempIndex);

  const row = checkRow(tempIndex + 1);
  const col = checkColumn(tempIndex + 1);
  const box = checkBox(tempIndex + 1);

  for (let num = 1; num <= 9; num++) {
    if (num !== numEX) {
      if (!isInRow(num, row) && !isInColumn(num, col) && !isInBox(num, box)) {
        textAll[tempIndex].textContent = num;
        break;
      }
    }
  }
}

// main function
function solveIT(index) {
  console.log("main", index);

  const row = checkRow(index + 1);
  const col = checkColumn(index + 1);
  const box = checkBox(index + 1);
  let tempNum;
  let tempIndex;

  tempIndex = index;
  for (let num = 1; num <= 9; num++) {
    tempNum = num;
    if (!isInRow(num, row) && !isInColumn(num, col) && !isInBox(num, box)) {
      textAll[index].textContent = num;
      break;
    }
  }
  if (checkExNum(index) === 0) {
    solveITRecursive(tempIndex, tempNum);
    solveIT(index);

    console.log(tempNum, tempIndex);
  }
}

// main
// for (let i = 0; i < btnAll.length; i++) {
//   // let returnNum;
//   // btnAll[i].addEventListener("click", function () {
//   //   // takeInput
//   //   textAll[i].textContent = prompt("Enter the value");
//   // textAll[i].textContent !== ""
//   //   ? (returnNum = Number(textAll[i].textContent))
//   //   : (returnNum = i + 1);
//   // console.log(returnNum);
//   // });

//   // rough
//   // textAll[i].textContent = i;
//   btnAll[i].addEventListener("click", function () {
//     console.log(checkRow(i + 1), checkColumn(i + 1));
//   });
// }

// setInterval(solveIT, 1000);
for (let index = 0; index < textAll.length; index++) {
  if (checkExNum(index) === 0) {
    solveIT(index);
  }
}

// test
// textAll[0].textContent = 1;
// console.log(
//   checkExNum(1),
//   checkRow(1 + 1),
//   checkColumn(1 + 1),
//   checkBox(1 + 1)
// );

// for (let i = 1; i <= 9; i++) {
//   if (!isInRow(i, 0) && !isInColumn(i, 1) && !isInBox(i, 0)) {
//     console.log(i);
//     break;
//   } else {
//     console.log(i);
//   }
// }

// BUG FIX
// console.log(checkColumn(80 + 1)); // index += 1
// console.log(checkRow(44 + 1)); // index += 1
// console.log(checkBox(80 + 1)); // index += 1
// console.log(checkExNum(80));
