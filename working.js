function adoptgerman() {
    window.alert("German is adopt Thanks for adopting ");
  }

  function labra() {
    window.alert("labra is adopt. Thanks for adopting  ");
  }

  function golden() {
    window.alert("Golden retiver is adopt. Thanks for adotping");
  }

  // --- Paste the new code right here at the very bottom --- //
  function showPage(pageId) {
    // Hide both sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('our-pets').style.display = 'none';
    
    // Show the requested section
    document.getElementById(pageId).style.display = 'block';
  }