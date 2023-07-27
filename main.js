function startLoading() {
    const loadingContainer = document.querySelector('.loading-container');
    const loadButton = document.getElementById('loadButton');
  
    // Show the loading spinner and disable the button
    loadingContainer.style.display = 'block';
    loadButton.disabled = true;
  
    // Simulate loading process (you can replace this with your actual loading tasks)
    setTimeout(function() {
      // Hide the loading spinner and enable the button after a delay (e.g., 3 seconds)
      loadingContainer.style.display = 'none';
      loadButton.disabled = false;
    }, 3000); // Simulate a 3-second loading process
  }
  