"use strict";
//making an array of contries and print its oeigional order
Object.defineProperty(exports, "__esModule", { value: true });
let contriesToVisit = ["Chaina", "Danmark", "Brazil", "Argentina"];
console.log("origional order", contriesToVisit);
//print the array in alphabatical order without modifying the actual array.
console.log("Alphabatical order:", [...contriesToVisit].sort());
//show that the array is still its origional order.
console.log("still in origional order", contriesToVisit);
//print the array in reversed order with out modifying the accual array list.
console.log("reverse order:", [...contriesToVisit].reverse());
console.log("still in origional order", contriesToVisit);
//We have changed the origional array order now.
console.log("origional array reversed:", contriesToVisit.reverse());
//print the arrayto show that its origional order.
console.log("Back to origional order:", contriesToVisit.reverse());
//print the array to show that its order has beenchangedin alphabatical order now.
console.log("sorted in Alphsbsticsl order", contriesToVisit.sort());
//we have changed  again the origionsl array order now in reverse order list.
console.log("origional array reversed again:", contriesToVisit.reverse());
