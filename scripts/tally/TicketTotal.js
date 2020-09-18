const eventHub = document.querySelector("#state-fair");
const contentTarget = document.querySelector(".customers");
let total = 0;
contentTarget.innerHTML = "Total Tickets Purchased: 0";

export const TicketTotal = () => {
  eventHub.addEventListener("ticketSelected", () => {
    contentTarget.innerHTML = `Total Tickets Purchased: ${++total}`;
  });
};
