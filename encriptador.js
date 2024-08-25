// Función que encripta el texto según las reglas especificadas
function encriptarTexto(texto) {
  return texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}

// Función que desencripta el texto encriptado
function desencriptarTexto(texto) {
  return texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
}

// Función para manejar la acción de encriptar
document.querySelector('.form-btn').addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  let texto = document.querySelector('.form-input').value;
  let resultado = encriptarTexto(texto);
  mostrarResultado(resultado);
});

// Función para manejar la acción de desencriptar
document.querySelector('.form-btn2').addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  let texto = document.querySelector('.form-input').value;
  let resultado = desencriptarTexto(texto);
  mostrarResultado(resultado);
});

// Función para mostrar el resultado en la sección de resultados
function mostrarResultado(resultado) {
  // Cambiar la imagen y el texto en la sección de resultados
  document.querySelector('.imagen-resultado').style.display = "none";
  
  // Obtener los elementos del texto del resultado y el mensaje inicial
  const resultTextElement = document.querySelector('.result-text');
  const tituloElement = document.querySelector('.result-titulo');
  
  // Cambiar el contenido del texto y aplicar los nuevos estilos
  resultTextElement.textContent = resultado;
  resultTextElement.classList.add("result-text-modified");
  
  // Ocultar el mensaje inicial
  tituloElement.classList.add("hidden");
  
  // Mostrar el botón de copiar
  document.querySelector('.form-btn2.hidden').classList.remove("hidden");
}
// Función para copiar el texto del resultado al portapapeles
document.querySelector('.form-btn2.hidden').addEventListener("click", function() {
  let texto = document.querySelector('.result-text').textContent;
  navigator.clipboard.writeText(texto);
  alert("Texto copiado al portapapeles");
});
