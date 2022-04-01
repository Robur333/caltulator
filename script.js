let i = 0;
var memoryNumber;
var actualNumber;
var result;

const windowNumber = document.getElementById('result');
const buttons = document.querySelectorAll('button');
buttons.forEach((el) => el.addEventListener('click', buttonClick));

function buttonClick() {
  var buttonNumber = event.target.textContent;

  if (i === 0) {
    writing();
  } else {
    secondWriting();
  }

  switch (buttonNumber) {
    case '+':
      windowNumber.textContent = '';
      i = 1;

      break;
    case '-':
      windowNumber.textContent = '';
      i = 2;
      break;
    case 'x':
      windowNumber.textContent = '';
      i = 3;
      break;
    case '/':
      windowNumber.textContent = '';
      i = 4;
      break;
    case 'RESET':
      windowNumber.textContent = '';
      memoryNumber = 0;
      actualNumber = 0;
      i = 0;
      break;
    case '=':
      console.log(i);
      if (i === 1) {
        windowNumber.textContent =
          parseFloat(memoryNumber) + parseFloat(actualNumber);
        memoryNumber = parseFloat(memoryNumber) + parseFloat(actualNumber);
      } else if (i === 2) {
        windowNumber.textContent =
          parseFloat(memoryNumber) - parseFloat(actualNumber);
        memoryNumber = parseFloat(memoryNumber) - parseFloat(actualNumber);
      } else if (i === 3) {
        windowNumber.textContent =
          parseFloat(memoryNumber) * parseFloat(actualNumber);
        memoryNumber = parseFloat(memoryNumber) * parseFloat(actualNumber);
      } else {
        windowNumber.textContent =
          parseFloat(memoryNumber) / parseFloat(actualNumber);
        memoryNumber = parseFloat(memoryNumber) / parseFloat(actualNumber);
      }

      break;
  }

  function writing() {
    if (isNaN(parseInt(buttonNumber)) == false || buttonNumber == '.') {
      windowNumber.textContent += buttonNumber;
    } else if (buttonNumber == 'DEL') {
      windowNumber.textContent = windowNumber.textContent.slice(
        0,
        windowNumber.textContent.length - 1
      );
    }
    memoryNumber = windowNumber.textContent;
    console.log(memoryNumber);
  }

  function secondWriting() {
    if (isNaN(parseInt(buttonNumber)) == false || buttonNumber == '.') {
      windowNumber.textContent += buttonNumber;
    } else if (buttonNumber == 'DEL') {
      windowNumber.textContent = windowNumber.textContent.slice(
        0,
        windowNumber.textContent.length - 1
      );
    }
    actualNumber = windowNumber.textContent;
  }
}
