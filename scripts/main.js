// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";
import { FullPackageTicketHolder } from "./fullPackage/FullPackageTicketHolder.js";
import { TicketTotal } from "./tally/TicketTotal.js";
TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();
FullPackageTicketHolder();
TicketTotal();
