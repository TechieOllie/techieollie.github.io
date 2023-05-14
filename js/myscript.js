function copyText() {
  navigator.clipboard.writeText("aide@simplesreparation.com");
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Addresse mail copier";
}

function copied() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copier";
}
