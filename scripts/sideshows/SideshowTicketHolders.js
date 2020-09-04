const eventHub = document.querySelector("#state-fair");
const contentTarget = document.querySelector(".sideshow");

export const SideshowTicketHolders = () => {
  eventHub.addEventListener("sideshowTicketPurchased", (event) => {
    if (event.detail.sideshowTicketSelected === "sideshowTicket") {
      contentTarget.innerHTML += `<div class="person gawker"></div>`;
      return contentTarget;
    }
  });
};
