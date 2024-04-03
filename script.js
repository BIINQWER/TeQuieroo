document.addEventListener("DOMContentLoaded", function () {
  var mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.textContent = "Te Quiero";
});

document.addEventListener("DOMContentLoaded", function () {
  var mensajeDiv = document.getElementById("mensaje");
  var interval = setInterval(function () {
    if (mensajeDiv.style.visibility === "hidden") {
      mensajeDiv.style.visibility = "visible";
    } else {
      mensajeDiv.style.visibility = "hidden";
    }
  }, 500); // Cambia este valor para ajustar la velocidad del titileo
});

document.addEventListener("DOMContentLoaded", function () {
  var mensajeDiv = document.getElementById("mensaje");

  var mensajes = [
    "Te Quiero",
    "I Love You",
    "Je t'aime",
    "Ich liebe dich",
    "Ti amo",
  ];

  var mensajeIndex = Math.floor(Math.random() * mensajes.length);

  mensajeDiv.textContent = mensajes[mensajeIndex];
});

document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function() {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });
});
