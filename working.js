function adoptgerman() {
    window.alert("German is adopt Thanks for adopting ");
  }

  function labra() {
    window.alert("labra is adopt. Thanks for adopting  ");
  }

  function golden() {
    window.alert("Golden retiver is adopt. Thanks for adotping");
  }

  // --- Updated Navigation Logic --- //
  function showPage(pageId) {
    // 1. Hide all 4 sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('our-pets').style.display = 'none';
    document.getElementById('how-to-adopt').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    
    // 2. Show only the requested section
    document.getElementById(pageId).style.display = 'block';
  }