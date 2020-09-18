const eventHub = document.querySelector("#state-fair");
const contentTarget = document.querySelectorAll(".people");

export const FullPackageTicketHolder = () => {
  eventHub.addEventListener("fullPackagePurchased", (event) => {
    if (event.detail.fullPackageSeleted === "fullPackage") {
      return contentTarget.forEach((target) => {
        //add a ticet to all categories
        target.innerHTML += `<div class="person bigSpender"></div>`;
      });
    }
  });
};
