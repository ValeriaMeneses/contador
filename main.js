var counter = 10

var div = document.querySelector(".contador")

var intervalo = setInterval(function() {
  div.innerHTML = counter
  counter--
  if (div.innerHTML === '0') {
    div.textContent = "Boom!"
    counter= 10
  }
  if (counter < 0) {
    clearInterval(intervalo)
  }

}, 1000)
