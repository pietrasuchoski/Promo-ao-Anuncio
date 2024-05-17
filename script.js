const contador = document.querySelector(".contador");

const dataFinal = new Date('2024-05-22T23:59:59');

function atualizarContador() {
  const hoje = new Date();
  const intervaloTempo = dataFinal - hoje;

  if(intervaloTempo <= 0) {
    contador.textContent = "Promoção encerrada!";
  } else {
    const dias = Math.floor(intervaloTempo / (1000 * 60 * 60 * 24));
   const horas = Math.floor((intervaloTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    const minutos = Math.floor ((intervaloTempo % (1000 * 60 * 60) / (1000 * 60 )))
    
  const segundos = Math.floor((intervaloTempo % (1000 * 60)) / 1000);
    
    contador.textContent = dias + "d " +  horas + "h " +  minutos +"min " + segundos + "s ";
  }
}


setInterval(atualizarContador, 1000)

atualizarContador();