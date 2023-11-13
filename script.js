// Extraindo as opções de conversão

let de = document.querySelector("#convertede");
let para = document.querySelector("#convertepara");

// Função de conversão

function Converter() {
  var valorInserido = document.getElementById("valor");
  var valor = valorInserido.value;
  var valorFloat = parseFloat(valor);
  var valorConvertido = document.getElementById("valorConvertido");

  // Valores NaN
  if (isNaN(valorFloat)) {
    var valorConvertidoNaN = "Por favor, insira um valor!";
    valorConvertido.innerHTML = valorConvertidoNaN;

    // Real para Dólar
  } else if (de.value == "Real" && para.value == "Dolar") {
    var valor1 = valorFloat * 0.2;
    var valorConvertido1 = "O resultado em Dólar US$ " + valor1;
    valorConvertido.innerHTML = valorConvertido1;

    // Dolar para Real
  } else if (de.value == "Dolar" && para.value == "Real") {
    var valor2 = valorFloat * 4.91;
    var valorConvertido2 = "O resultado em Real R$ " + valor2;
    valorConvertido.innerHTML = valorConvertido2;

    // Dolar para Euro
  } else if (de.value == "Dolar" && para.value == "Euro") {
    var valor3 = valorFloat * 0.94;
    var valorConvertido3 = "O resultado em Euro € " + valor3;
    valorConvertido.innerHTML = valorConvertido3;

    // Euro para Dolar
  } else if (de.value == "Euro" && para.value == "Dolar") {
    var valor4 = valorFloat * 1.07;
    var valorConvertido4 = "O resultado em Dólar US$ " + valor4;
    valorConvertido.innerHTML = valorConvertido4;

    // Euro para Real
  } else if (de.value == "Euro" && para.value == "Real") {
    var valor5 = valorFloat * 5.25;
    var valorConvertido5 = "O resultado em Real R$ " + valor5;
    valorConvertido.innerHTML = valorConvertido5;

    // Real para Euro
  } else if (de.value == "Real" && para.value == "Euro") {
    var valor6 = valorFloat * 0.19;
    var valorConvertido6 = "O resultado em Euro € " + valor6;
    valorConvertido.innerHTML = valorConvertido6;

    // Real para Bitcoin
  } else if (de.value == "Real" && para.value == "Bitcoin") {
    var valor7 = valorFloat * 0.0000055;
    var valorConvertido7 = "O resultado em BTC " + valor7;
    valorConvertido.innerHTML = valorConvertido7;

    // Bitcoin para Real
  } else if (de.value == "Bitcoin" && para.value == "Real") {
    var valor8 = valorFloat * 180291.51;
    var valorConvertido8 = "O resultado em Real R$ " + valor8;
    valorConvertido.innerHTML = valorConvertido8;

    // Euro para Bitcoin
  } else if (de.value == "Euro" && para.value == "Bitcoin") {
    var valor9 = valorFloat * 0.000029;
    var valorConvertido9 = "O resultado em BTC " + valor9;
    valorConvertido.innerHTML = valorConvertido9;

    // Bitcoin para Euro
  } else if (de.value == "Bitcoin" && para.value == "Euro") {
    var valor10 = valorFloat * 34336.2;
    var valorConvertido10 = "O resultado em Euro € " + valor10;
    valorConvertido.innerHTML = valorConvertido10;

    // Bitcoin para Dolar
  } else if (de.value == "Bitcoin" && para.value == "Dolar") {
    var valor11 = valorFloat * 36758.1;
    var valorConvertido11 = "O resultado em Dólar US$ " + valor11;
    valorConvertido.innerHTML = valorConvertido11;

    // Dolar para Bitcoin
  } else if (de.value == "Dolar" && para.value == "Bitcoin") {
    var valor12 = valorFloat * 0.000027;
    var valorConvertido12 = "O resultado em BTC " + valor12;
    valorConvertido.innerHTML = valorConvertido12;

    // Km para Ano-Luz
  } else if (de.value == "Km" && para.value == "Ano-luz") {
    var valorAnoLuz = valorFloat * 1.057 * 10 ** -13;
    var distanciaEstrela = valorAnoLuz / 3.26;
    // A distância entre duas estrelas é aproximadamente 3,26 Ano-Luz
    var tempoSegundos = distanciaEstrela * 31536000;
    var valorConvertido13 =
      "O resultado em Ano-luz " +
      valorAnoLuz +
      "." +
      "<br> Isso corresponderá a " +
      tempoSegundos +
      " segundos";
    valorConvertido.innerHTML = valorConvertido13;

    // Ano-Luz para Km
  } else if (de.value == "Ano-luz" && para.value == "Km") {
    var valorKm = valorFloat * 9.461 * 10 ** 12;
    var valorConvertido14 = "O resultado em Ano-luz " + valorKm;
    valorConvertido.innerHTML = valorConvertido14;

    // Valores De e Para
  } else if (
    (de.value == "de" && para.value == "para") ||
    de.value == "de" ||
    para.value == "para"
  ) {
    var valorConvertidoDe = "Por favor, selecione uma opção válida!";
    valorConvertido.innerHTML = valorConvertidoDe;

    // Valores iguais
  } else if (de.value == para.value) {
    var valorIgual = valorFloat;
    var valorConvertidoIgual =
      "Você inseriu a mesma unidade. O resultado é " +
      valorIgual +
      " " +
      de.value;
    valorConvertido.innerHTML = valorConvertidoIgual;

    // Demais condições
  } else {
    var valorErro1 = de.value;
    var valorErro2 = para.value;
    valorConvertido.innerHTML =
      "Não é possível converter " +
      valorErro1 +
      " para " +
      para.value +
      ". Tente novamente!";
  }
}
