var counter = 10

var div = document.querySelector(".contador")

var intervalo = setInterval(function() {
  div.innerHTML = counter
  counter--

  if (counter < 0) {
    clearInterval(intervalo)
  }
  if (div.innerHTML === '0') {
    div.textContent = "Boom!"
  }
}, 1000)
