function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridium = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const miliseconds = now.getMilliseconds().toString().padStart(3,0);
    const timestring = `${hours}:${minutes}:${seconds}:${miliseconds}${meridium}`;
    document.getElementById("clock").textContent = timestring
}
updateClock();
setInterval(updateClock, 1);