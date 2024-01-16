const currentTicketElement = document.querySelector("#lbl-new-ticket");
const createTicketBtn = document.querySelector("button");

async function getLastTicket() {
  const lastTicket = await fetch("/api/ticket/last")
    .then((resp) => resp.json())
    .catch((error) => console.log(error));

  currentTicketElement.innerHTML = lastTicket;
}

async function createTicket() {
  const newTicket = await fetch("/api/ticket", { method: "POST" })
    .then((resp) => resp.json())
    .catch((error) => console.log(error));

  currentTicketElement.innerHTML = newTicket.number;
}

createTicketBtn.addEventListener("click", createTicket);

getLastTicket();
