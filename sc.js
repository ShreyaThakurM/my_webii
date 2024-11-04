function showPopup(sectionId) {
  // Hide all other sections
  document.querySelectorAll('.popup').forEach(section => {
    section.style.display = 'none';
  });
  
  // Display the selected section
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = 'block';
  }
}

function closePopup(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = 'none';
  }
}

// Initialize popup visibility on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.popup').forEach(section => {
    section.style.display = 'none'; // Ensure all popups are hidden initially
  });
});
