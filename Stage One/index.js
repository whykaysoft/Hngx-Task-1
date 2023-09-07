const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const utcTime = document.querySelector('[data-testid="currentUTCTime"]');

const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfTheWeek = currentDate.getDay();
const currentDayName = daysOfWeek[currentDayOfTheWeek];
currentDay.textContent = currentDayName;

function displayCurrentUTC() {
    const currentUTCDate = new Date();
    const currentUTCHours = currentUTCDate.getUTCHours();
    const currentUTCMinutes = currentUTCDate.getUTCMinutes();
    const currentUTCSeconds = currentUTCDate.getUTCSeconds();

    // Format hours, minutes, and seconds with leading zeros if needed
    const formattedHours = currentUTCHours.toString().padStart(2, '0');
    const formattedMinutes = currentUTCMinutes.toString().padStart(2, '0');
    const formattedSeconds = currentUTCSeconds.toString().padStart(2, '0');

    // Update the content of the DOM element
    utcTime.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Call the function to initially display the UTC time
displayCurrentUTC();

// Update the UTC time every second (optional)
setInterval(displayCurrentUTC, 1000);

