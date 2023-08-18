function updateDateTime() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  
  document.getElementById("currentDateTime").textContent = formattedDate;
}

// Update the current time and date every second
// setInterval(updateDateTime, 1000);

// Initial call to update the time and date
updateDateTime();


function updateCurrentDate() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  
  document.getElementById("currentDate").textContent = formattedDate;
}

// Call the function to update the current date
updateCurrentDate();