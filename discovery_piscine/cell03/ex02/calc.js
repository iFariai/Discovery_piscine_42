function isPositiveInteger(value) {
  return /^\d+$/.test(value); // verifica se é um número inteiro >= 0
}

function calculate() {
  const left = document.getElementById("left").value;
  const right = document.getElementById("right").value;
  const operator = document.getElementById("operator").value;

  if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
    alert("Error :(");
    return;
  }

  const a = parseInt(left, 10);
  const b = parseInt(right, 10);

  if ((operator === "/" || operator === "%") && b === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  let result;
  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
    case "%": result = a % b; break;
    default:
      alert("Error :(");
      return;
  }

  alert("Result: " + result);
  console.log("Result:", result);
}

// Mensagem a cada 30 segundos
setInterval(() => {
  alert("Please, use me...");
}, 30000);