const dados = [
{
  "dia": 1,
  "valor": 22174.1664 },

{
  "dia": 2,
  "valor": 24537.6698 },

{
  "dia": 3,
  "valor": 26139.6134 },

{
  "dia": 4,
  "valor": 0.0 },

{
  "dia": 5,
  "valor": 0.0 },

{
  "dia": 6,
  "valor": 26742.6612 },

{
  "dia": 7,
  "valor": 0.0 },

{
  "dia": 8,
  "valor": 42889.2258 },

{
  "dia": 9,
  "valor": 46251.174 },

{
  "dia": 10,
  "valor": 11191.4722 },

{
  "dia": 11,
  "valor": 0.0 },

{
  "dia": 12,
  "valor": 0.0 },

{
  "dia": 13,
  "valor": 3847.4823 },

{
  "dia": 14,
  "valor": 373.7838 },

{
  "dia": 15,
  "valor": 2659.7563 },

{
  "dia": 16,
  "valor": 48924.2448 },

{
  "dia": 17,
  "valor": 18419.2614 },

{
  "dia": 18,
  "valor": 0.0 },

{
  "dia": 19,
  "valor": 0.0 },

{
  "dia": 20,
  "valor": 35240.1826 },

{
  "dia": 21,
  "valor": 43829.1667 },

{
  "dia": 22,
  "valor": 18235.6852 },

{
  "dia": 23,
  "valor": 4355.0662 },

{
  "dia": 24,
  "valor": 13327.1025 },

{
  "dia": 25,
  "valor": 0.0 },

{
  "dia": 26,
  "valor": 0.0 },

{
  "dia": 27,
  "valor": 25681.8318 },

{
  "dia": 28,
  "valor": 1718.1221 },

{
  "dia": 29,
  "valor": 13220.495 },

{
  "dia": 30,
  "valor": 8414.61 }];



var mn = dados.filter(min => min.valor > 0);

var valores = mn.map(function (filterNum, filter) {
  return filterNum.valor;
});

var menorvalor = Math.min.apply(null, valores);

var maiorvalor = Math.max.apply(null, valores);

var mend = mn.filter(mn => mn.valor === menorvalor);

var mad = mn.filter(mn => mn.valor === maiorvalor);

var menorDia = mend.map(function (filterDay, filter) {
  return filterDay.dia;
});

var maiorDia = mad.map(function (filterMaior, filter) {
  return filterMaior.dia;
});

function calculoMedia(valores) {
  var counter = 0;
  var soma = 0;
  while (counter < valores.length) {
    soma = soma + valores[counter++];
  }
  return soma / valores.length;
}

var media = calculoMedia(valores);

var acima = valores.filter(function maior(value) {
  return value > media;
});

document.getElementById("label-maior").innerHTML = "O dia " + maiorDia + " teve o maior faturamento do mês com " + maiorvalor;

document.getElementById("label-menor").innerHTML = "O dia " + menorDia + " teve o menor faturamento do mês com " + menorvalor;

document.getElementById("label-media").innerHTML = "O faturamento médio foi de: " + media;

document.getElementById("label-acima").innerHTML = "No total, " + acima.length + " dias tiveram valores acima da média.";