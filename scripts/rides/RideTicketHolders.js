const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const RideTicketHolders = () => {
  eventHub.addEventListener("rideTicketPurchased", (event) => {
    if (event.detail.rideTicketSelected === "rideTicket") {
      contentTarget.innerHTML += `<div class="person rider"></div>`;
      return contentTarget;
    }
  });
};
