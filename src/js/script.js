// Criar várias bolhas com tamanhos e posições diferentes
for (let i = 0; i < 15; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  const size = Math.random() * 40 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${20 + Math.random() * 10}s`;
  document.body.appendChild(bubble);
}

function atualizarHora() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");

  const horaFormatada = `${horas}:${minutos}:${segundos} ⏰`;

  // Seleciona todos os elementos com a classe "hora"
  const elementosHora = document.querySelectorAll(".horas");

  // Atualiza cada um
  elementosHora.forEach((el) => {
    el.textContent = horaFormatada;
  });
}

// Atualiza a cada segundo
setInterval(atualizarHora, 1000);
atualizarHora(); // Atualiza imediatamente ao carregar
