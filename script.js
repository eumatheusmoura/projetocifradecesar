// VARIÁVEIS

var texto = document.querySelector("#texto"); // TextArea
var cifraDeCesarIn = document.querySelector("#cifraDeCesar");
var base64 = document.querySelector("#base64");
var btnEnviar = document.getElementById("btn-enviar"); // Btn Submit
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

function validaIncremento() {
  let increInput = incinput.value;
  increInput = increInput % 26;
  if (radioDecodificar.checked) {
    increInput = increInput * -1;
  }
  ciDeCesar(increInput);
}

function ciDeCesar(increment) {
  var texto = document.querySelector("#texto");
  var textoDeSaida = "";
  var resultado = "";
  for (var i = 0; i < texto.value.length; i++) {
    resultado = texto.value[i].charCodeAt();

    if (resultado >= 65 && resultado <= 90) {
      resultado += increment;
      if (resultado > 90) {
        resultado -= 26;
      } else if (resultado < 65) {
        resultado += 26;
      }
    }
    if (resultado >= 97 && resultado <= 122) {
      resultado += increment;
      if (resultado > 122) {
        resultado -= 26;
      } else if (resultado < 97) {
        resultado += 26;
      }
    }
    textoDeSaida += String.fromCharCode(resultado);
  }
  InserirHTML("teste1", textoDeSaida);
}

function InserirHTML(ID, texto1) {
  let divTextoDeSaida = document.getElementById(ID);
  divTextoDeSaida.innerHTML = texto1;
}

btnEnviar.onclick = (e) => {
  e.preventDefault();
  if (opcoes.value == "cifraDeCesar") {
    validaIncremento();
  } else if (opcoes.value == "base64") {
  } else {
    alert("Selecione uma opção válida");
  }
};
