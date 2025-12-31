fetch("/Richard-Lin/nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(error => console.log("Error loading navbar:", error));

fetch("/Richard-Lin/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(error => console.log("Error loading footer:", error));