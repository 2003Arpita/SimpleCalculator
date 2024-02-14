let display = document.getElementById('display');
let bracketOpen = true;

function addToDisplay(value) {
  display.value += value;
}

function addOperator(operator) {
  if (display.value !== '' && !isNaN(display.value.slice(-1))) {
    display.value += operator;
  }
}

function clearDisplay() {
  display.value = '';
}

function toggleSign() {
  if (display.value !== '' && !isNaN(display.value)) {
    display.value = parseFloat(display.value) * -1;
  }
}

function toggleBracket() {
  if (bracketOpen) {
    display.value += '(';
    bracketOpen = false;
  } else {
    display.value += ')';
    bracketOpen = true;
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
  