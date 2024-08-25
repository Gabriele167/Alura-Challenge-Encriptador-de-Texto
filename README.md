# Encriptador de Texto

## Descripción

Este proyecto es una aplicación web sencilla que permite encriptar y desencriptar textos utilizando un conjunto específico de reglas. Es ideal para intercambiar mensajes secretos con otros usuarios que conozcan el método de encriptación.

Las reglas de encriptación son las siguientes:

- La letra **"e"** se convierte en **"enter"**.
- La letra **"i"** se convierte en **"imes"**.
- La letra **"a"** se convierte en **"ai"**.
- La letra **"o"** se convierte en **"ober"**.
- La letra **"u"** se convierte en **"ufat"**.

## Características

- **Funciona solo con letras minúsculas:** No se permiten letras con acentos ni caracteres especiales.
- **Encriptación y desencriptación:** Convierte una palabra a su versión encriptada y también puede devolver una palabra encriptada a su versión original.
- **Interfaz simple:** La página permite al usuario ingresar el texto que desea encriptar o desencriptar y muestra el resultado en pantalla.
- **Botón de copiar:** Permite copiar el texto encriptado o desencriptado al portapapeles para compartirlo fácilmente.

## Estructura del Proyecto

El proyecto está estructurado en los siguientes archivos:

- **`index.html`**: Contiene la estructura principal de la página web.
- **`style.css`**: Contiene los estilos aplicados a la página, incluyendo el diseño del formulario, botones, y la sección de resultados.
- **`encriptador.js`**: Contiene el código JavaScript que maneja la lógica de encriptación, desencriptación y la interacción con el usuario.

# Instrucciones de Uso
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Gabriele167/Alura-Challenge-Encriptador-de-Texto
2. Abrir el archivo `index.html` en un navegador web.

## Encriptar un texto:

1. Ingrese el texto que desea encriptar en el campo de texto.
2. Haga clic en el botón "Encriptar".
3. El texto encriptado aparecerá en la sección de resultados.

## Desencriptar un texto:

1. Ingrese el texto encriptado en el campo de texto.
2. Haga clic en el botón "Desencriptar".
3. El texto desencriptado aparecerá en la sección de resultados.

## Copiar el resultado:

1. Una vez que el texto ha sido encriptado o desencriptado, el botón "Copiar" aparecerá.
2. Haga clic en "Copiar" para copiar el resultado al portapapeles.

## Requisitos Técnicos

- Un navegador web actualizado.
- Conocimientos básicos de HTML, CSS y JavaScript para personalizar y modificar el proyecto según sea necesario.

## Personalización

El código CSS está diseñado para ser fácilmente personalizable, permitiendo cambios en la fuente, colores, y disposición de los elementos. El archivo JavaScript está comentado para facilitar futuras modificaciones en la lógica de encriptación.

## Créditos

Proyecto desarrollado como parte de una práctica de desarrollo web. Si tienes alguna sugerencia o mejora, no dudes en contribuir al proyecto o contactarme.
