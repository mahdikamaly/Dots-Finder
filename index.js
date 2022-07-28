let input = document.getElementById('text-input')
let button = document.getElementById('text-button')
let text = document.getElementById('dots-text')



function countDots(stringTemp) {
  stringTemp = stringTemp.replace('می', ' '); // (oldchar, newchar)
  stringTemp = stringTemp.toString().split(' ');

  let finalCounter = 0;

  for (let i = 0; i < stringTemp.length; i++) {
    let counter = 0;
    for (let j = 0; j < stringTemp[i].length; j++) {
      switch (stringTemp[i][j]) {
        case 'ب': { counter++; break; }
        case 'پ': { counter += 3; break; }
        case 'ت': { counter += 2; break; }
        case 'ث': { counter += 3; break; }
        case 'ج': { counter += 1; break; }
        case 'چ': { counter += 3; break; }
        case 'خ': { counter += 1; break; }
        case 'ذ': { counter += 1; break; }
        case 'ز': { counter += 1; break; }
        case 'ژ': { counter += 3; break; }
        case 'ش': { counter += 3; break; }
        case 'ض': { counter += 1; break; }
        case 'ظ': { counter += 1; break; }
        case 'غ': { counter += 1; break; }
        case 'ف': { counter += 1; break; }
        case 'ق': { counter += 2; break; }
        case 'ن': { counter += 1; break; }
        case 'ی': {
          if (j == stringTemp[i].length - 1 || stringTemp[i][j + 1] == 'آ' || stringTemp[i][j + 1] == ' ') {
            // console.log(stringTemp[i].length - 1)
          }
          else {
            counter += 2;
            break;
          }
        }

        default: { break }
      }
    }
    console.log(stringTemp[i], ' Dots Finded =>  ', counter);
    finalCounter += counter;
  }
  console.log('Final Dots => ', finalCounter)
  text.innerText = finalCounter

}

button.onclick = () => {
  const tempString = input.value
  countDots(tempString)
}

