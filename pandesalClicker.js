document.getElementById("buy-menu").addEventListener("click", function () {
  var div = document.getElementById("menu-position");
  if (div.style.display === "none") {
    div.style.display = "flex"; // Show the div
  } else {
    div.style.display = "none"; // Hide the div
  }
});

document.getElementById("buydmg").addEventListener("click", function () {
  console.log("Test");
});
