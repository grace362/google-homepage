function googleSearch() {
    const query = document.getElementById("searchInput").value;
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter something to search.");
    }
  }

  function feelingLucky() {
    const query = document.getElementById("searchInput").value;
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?btnI=I&q=${encodeURIComponent(query)}`;
    } else {
      alert("Try entering something first!");
    }
  }
