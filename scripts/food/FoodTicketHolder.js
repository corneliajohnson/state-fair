const contentTarget = document.querySelector(".food");
const eventHub = document.querySelector("#state-fair");

export const FoodTicketHolders = () => {
  eventHub.addEventListener("foodTicketPurchased", (event) => {
    if (event.detail.foodTicketSelected === "foodTicket") {
      contentTarget.innerHTML += `<div class="person eater"></div>`;
      return contentTarget;
    }
  });
};
