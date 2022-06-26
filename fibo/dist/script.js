var i = 0;
var sequencia = [];
var n;

function fibo() {
  if (i != 0) {
    while (i < n) {
      i = i + sequencia.slice(-2)[0];
      sequencia.push(i);
    }
  } else if (i == 0) {
    sequencia.push(i);
    i++;
    sequencia.push(i);
    fibo();
  }
}

function calc() {
  if (sequencia.includes(parseInt(n)) == true) {
    document.getElementById("label").innerHTML = "O número digitado faz parte da sequência de Fibonacci!";
  } else {
    document.getElementById("label").innerHTML = "O número digitado NÃO faz parte da sequência de Fibonacci!";
  }
}

function calcular() {
  i = 0;
  n = document.getElementById("inpt").value;
  fibo();
  calc();
};