 // Existing Adoption Alerts
function adoptgerman() {
  window.alert("German Shepherd is adopted. Thanks for adopting!");
}

function labra() {
  window.alert("Labrador Retriever is adopted. Thanks for adopting!");
}

function golden() {
  window.alert("Golden Retriever is adopted. Thanks for adopting!");
}

// New Navigation Logic
function showPage(pageId) {
  // Hide both sections
  document.getElementById('home').style.display = 'none';
  document.getElementById('our-pets').style.display = 'none';
  
  // Show the requested section
  document.getElementById(pageId).style.display = 'block';
