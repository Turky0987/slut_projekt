function showInfo(title, description) {
  var gameTitle = document.getElementById("game-title");
  var gameDescription = document.getElementById("game-description");

  gameTitle.innerText = title;
  gameDescription.innerText = description;

  var gameInfo = document.getElementById("game-info");

  gameInfo.classList.remove("hidden");

  gameInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleInfo(title, description) {
  var gameInfo = document.getElementById("game-info");

  if (gameInfo.classList.contains("hidden")) {
    showInfo(title, description);
  } else {
    gameInfo.classList.add("hidden");
  }
}


