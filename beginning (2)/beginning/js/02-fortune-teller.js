/*eslint-env browser*/
function tellFortune(manyChild, parntName, geoLocation, jTitle) {
    "use strict";
    return "You will be a " + jTitle + " in " + geoLocation + " , and married to " + parntName + " with "  + manyChild + " kids. <br>";
}
window.document.write(tellFortune("3", "John", "Germany", "Art Director"));
window.document.write(tellFortune("2", "Panfilo", "Cojutepeque", "Teacher"));
window.document.write(tellFortune("5", "Alvin", "Guayaquil", "Barista"));