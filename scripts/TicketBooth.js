const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "rideTicket") {
    const customEvent = new CustomEvent("rideTicketPurchased", {
      detail: {
        rideTicketSelected: event.target.id,
      },
    });
    // Dispatch to event hub
    eventHub.dispatchEvent(customEvent);
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "foodTicket") {
    const customEvent = new CustomEvent("foodTicketPurchased", {
      detail: {
        foodTicketSelected: event.target.id,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        </div>
    `;
};
