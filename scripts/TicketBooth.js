const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

//ride Tickets
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

//food Tickets
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

//Game Tickets
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "gameTicket") {
    const customEvent = new CustomEvent("gameTicketPurchased", {
      detail: {
        gameTicketSelected: event.target.id,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

//Sideshow Tickets
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "sideshowTicket") {
    const customEvent = new CustomEvent("sideshowTicketPurchased", {
      detail: {
        sideshowTicketSelected: event.target.id,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

//Full Package Ticket Holder
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "fullPackage") {
    const customEvent = new CustomEvent("fullPackagePurchased", {
      detail: {
        fullPackageSeleted: event.target.id,
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
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackage">Full Package Ticket</button>
        </div>
    `;
};
