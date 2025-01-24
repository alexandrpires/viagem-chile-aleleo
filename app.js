const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
  daysElement.innerHTML = String(days).padStart(2, "0");
  hoursElement.innerHTML = String(hours).padStart(2, "0");
  minutesElement.innerHTML = String(minutes).padStart(2, "0");
  secondsElement.innerHTML = String(seconds).padStart(2, "0");
};

const countdown = () => {
  const now = new Date();
  // Define a data da viagem (21 de março de 2025)
  const targetDate = new Date("2025-03-21T00:00:00");

  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    // Caso a data já tenha passado
    render(0, 0, 0, 0);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  render(days, hours, minutes, seconds);
};

// Atualiza o contador assim que o script é carregado
countdown();

// Atualiza o contador a cada segundo
setInterval(countdown, 1000);