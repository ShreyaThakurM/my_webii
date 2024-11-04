// script.js
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
