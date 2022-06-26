const valores = [
67836.43,
36678.66,
29229.88,
27165.48,
19849.53];

var i = 0;
var sum = 0;
while (i < valores.length) {
  sum = sum + valores[i++];
}
var sp = parseFloat(valores[0] * 100 / sum);
var rj = parseFloat(valores[1] * 100 / sum);
var mg = parseFloat(valores[2] * 100 / sum);
var es = parseFloat(valores[3] * 100 / sum);
var outros = parseFloat(valores[4] * 100 / sum);

document.getElementById("label-sp").innerHTML = "São Paulo teve " +
sp.toFixed(2) + "% de participação mensal.";

document.getElementById("label-rj").innerHTML = "Rio de Janeiro teve " +
rj.toFixed(2) + "% de participação mensal.";

document.getElementById("label-mg").innerHTML = "Minas Gerais teve " +
mg.toFixed(2) + "% de participação mensal.";

document.getElementById("label-es").innerHTML = "Espirito Santo teve " +
es.toFixed(2) + "% de participação mensal.";

document.getElementById("label-outros").innerHTML = "Os outros estados tiveram " +
outros.toFixed(2) + "% de participação mensal.";