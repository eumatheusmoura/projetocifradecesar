// VARIÁVEIS

var texto = document.querySelector("#texto"); // TextArea
var cifraDeCesarIn = document.querySelector("#cifraDeCesar");
var base64 = document.querySelector("#base64");
var btnEnviar = document.querySelector("#btn-enviar"); // Btn Submit
var incremento = document.querySelector("#incremento");
var opcoes = document.querySelector("#opcoes");
var radioCodificar = document.querySelector("#option-1");
var radioDecodificar = document.querySelector("#option-2");
var eCodificar = document.querySelector("#ecodificar");
var incinput = document.querySelector("#incinput");
var radioInputs = document.querySelector("#radioinputs");

// FUNÇÃO ABRIR INCREMENTO

opcoes.addEventListener("change", function () {
  if (opcoes.value == "cifraDeCesar") {
    incremento.style.display = "flex";
  } else if (opcoes.value == "base64") {
    incremento.style.display = "none";
  }
});

// FUNÇÃO MUDAR BTN CODIFICAR PARA DECODIFICAR

radioCodificar.addEventListener("click", function () {
  if (true) {
    btnEnviar.innerHTML = `<button type="submit" class="btn-submit" id="btn-enviar">Codificar mensagem</button>`;
  }
});

radioDecodificar.addEventListener("click", function () {
  if (true) {
    btnEnviar.innerHTML = `<button type="submit" class="btn-submit" id="btn-enviar">Decodificar mensagem</button>`;
  }
});

// FUNÇÃO FUTURA

/* btnEnviar.addEventListener("click", function (e) {
  if (
    texto.value.length > 0 &&
    opcoes.value == "cifraDeCesar" &&
    incinput.value < 99 &&
    radioCodificar.value == "codificar"
  ) {
    alert(+texto.value.length + +incinput.value);
  } else {
    alert("Há algo de errado");
  }
}); */

// FUNÇÃO CODIFICAR TEXTO

var resultadoCodeficacao = btnEnviar.addEventListener("click", function (e) {
  e.preventDefault();
  var resultado = "";
  for (var i = 0; i < texto.value.length; i++) {
    var asciiNum = texto.value[i].charCodeAt();
    if (
      asciiNum >= 65 &&
      asciiNum <= 77 &&
      opcoes.value == "cifraDeCesar" &&
      radioCodificar.value == "codificar"
    ) {
      resultado += String.fromCharCode(asciiNum + +incinput.value);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      resultado += String.fromCharCode(asciiNum - +incinput.value);
    }
  }
  console.log(resultado);
});
