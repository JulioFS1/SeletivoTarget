palavra = document.getElementById("inpt").value;

function invert(palavra) {
  var result = '';
  var i = palavra.length - 1;
  while (i >= 0) {
    result = result + palavra[i--];
  }
  return result;
  console.log(result);
}

function clique() {
  palavra = document.getElementById("inpt").value;
  invert(palavra);
  document.getElementById("label").innerHTML = invert(palavra);
}