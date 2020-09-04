const contentTarget = document.querySelector(".games");
const eventHub = document.querySelector("#state-fair");

export const GameTicketHolders = () => {
  eventHub.addEventListener("gameTicketPurchased", (event) => {
    if (event.detail.gameTicketSelected === "gameTicket") {
      contentTarget.innerHTML += `<div class="person player"></div>`;
      return contentTarget;
    }
  });
};
