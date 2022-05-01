// Getting the buttons
const boxResult = document.getElementById('box-result');
const btnZero = document.getElementById('btn-zero');
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnFour = document.getElementById('btn-four');
const btnFive = document.getElementById('btn-five');
const btnSix = document.getElementById('btn-six');
const btnSeven = document.getElementById('btn-seven');
const btnEight = document.getElementById('btn-eight');
const btnNine = document.getElementById('btn-nine');
const btnDEL = document.getElementById('btn-DEL');
const btnCE = document.getElementById('btn-CE');
const btnC = document.getElementById('btn-C');
const btnPeriod = document.getElementById('btn-period');
const btnPlusmn = document.getElementById('btn-plusmn');
const btnEquals = document.getElementById('btn-equals');
const btnOneByX = document.getElementById('btn-onebyx');
const btnSup2 = document.getElementById('btn-sup2');
const btnPercent = document.getElementById('btn-percent');
const btnSqrt = document.getElementById('btn-sqrt');

const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');

let lengthBoxResultContent = boxResult.textContent.length;
let num1 = 0;
let num2 = 0;
let operation = '';
let result = 0;

btnEquals.onclick = function () {
    num2 = Number(boxResult.textContent);
    if (operation == btnPlus.textContent) {
        result = sum(num1, num2);
        boxResult.textContent = String(result);
        num1 = result;
    } else if (operation == btnMinus.textContent) {
        result = subtract(num1, num2);
        boxResult.textContent = String(result);
        num1 = result;
    } else if (operation == btnMultiply.textContent) {
        result = multiply(num1, num2);
        boxResult.textContent = String(result);
        num1 = result;
    } else if (operation == btnDivide.textContent) {
        result = divide(num1, num2);
        boxResult.textContent = String(result);
        num1 = result;
    }
    
    operation = null;
}

// Handling basic operations

btnPlus.onclick = function () {
    operation = btnPlus.textContent;
    num1 = Number(boxResult.textContent);
    clearBoxResult();
}

btnMinus.onclick = function () {
    operation = btnMinus.textContent;
    num1 = Number(boxResult.textContent);
    clearBoxResult();
}

btnMultiply.onclick = function () {
    operation = btnMultiply.textContent;
    num1 = Number(boxResult.textContent);
    clearBoxResult();
}

btnDivide.onclick = function () {
    operation = btnDivide.textContent;
    num1 = Number(boxResult.textContent);
    clearBoxResult();
}

// Handling events on numbers buttons and others
btnZero.onclick = function () {
    const content = btnZero.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (content !== boxResult.textContent && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnOne.onclick = function () {
    const content = btnOne.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent === '0' && lengthBoxResultContent < 17) {
        boxResult.textContent = content;
    } else if (boxResult.textContent !== '0' && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnTwo.onclick = function () {
    const content = btnTwo.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent === '0' && lengthBoxResultContent < 17) {
        boxResult.textContent = content;
    } else if (boxResult.textContent !== '0' && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnThree.onclick = function () {
    const content = btnThree.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent === '0' && lengthBoxResultContent < 17) {
        boxResult.textContent = content;
    } else if (boxResult.textContent !== '0' && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnFour.onclick = function () {
    const content = btnFour.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent === '0' && lengthBoxResultContent < 17) {
        boxResult.textContent = content;
    } else if (boxResult.textContent !== '0' && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnFive.onclick = function () {
    const content = btnFive.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent === '0' && lengthBoxResultContent < 17) {
        boxResult.textContent = content;
    } else if (boxResult.textContent !== '0' && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnSix.onclick = function () {
    const content = btnSix.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent === '0' && lengthBoxResultContent < 17) {
        boxResult.textContent = content;
    } else if (boxResult.textContent !== '0' && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnSeven.onclick = function () {
    const content = btnSeven.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent === '0' && lengthBoxResultContent < 17) {
        boxResult.textContent = content;
    } else if (boxResult.textContent !== '0' && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnEight.onclick = function () {
    const content = btnEight.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent === '0' && lengthBoxResultContent < 17) {
        boxResult.textContent = content;
    } else if (boxResult.textContent !== '0' && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnNine.onclick = function () {
    const content = btnNine.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent === '0' && lengthBoxResultContent < 17) {
        boxResult.textContent = content;
    } else if (boxResult.textContent !== '0' && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnDEL.onclick = function () {
    lengthBoxResultContent = boxResult.textContent.length;
    if (boxResult.textContent.length > 1) {
        boxResult.textContent = boxResult.textContent.substring(0, lengthBoxResultContent - 1);
    } else {
        clearBoxResult();
    }
}

btnCE.onclick = function () {
    clearBoxResult();
}

btnC.onclick = function () {
    num1 = 0;
    num2 = 0;
    result = 0;
    clearBoxResult();
}

btnPeriod.onclick = function () {
    const content = btnPeriod.textContent;
    lengthBoxResultContent = boxResult.textContent.length;
    if (!boxResult.textContent.includes(content) && lengthBoxResultContent != 16 && lengthBoxResultContent < 17) {
        boxResult.textContent += content;
    }
}

btnPlusmn.onclick = function () {
    let boxResultContent = boxResult.textContent;
    let number = Number(boxResultContent) * -1;
    boxResultContent = String(number);
    boxResult.textContent = boxResultContent;
}

btnOneByX.onclick = function () {
    let number = Number(boxResult.textContent);
    number = divideOneByX(number);
    boxResult.textContent = String(number);
}

btnPercent.onclick = function () {
    let symbol = btnPercent.textContent;
    if (!boxResult.textContent.includes(symbol)) {
        let number = Number(boxResult.textContent);
        number /= 100;
        boxResult.textContent = String(number);
    }
}

btnSup2.onclick = function () {
    let number = Number(boxResult.textContent);
    // lengthBoxResultContent = boxResult.textContent.length;
    number = number ** 2;
    lengthOfTheNumber = String(number).length;

    if (lengthOfTheNumber < 17) {
        boxResult.textContent = String(number);
    }
}

btnSqrt.onclick = function () {
    let number = Number(boxResult.textContent);
    number = Math.sqrt(number);
    boxResult.textContent = String(number);
}