$(document).ready(function() {
  var characterChosenByUser = "";
  var healthPoint = 10;
  var attackPower = "";
  var countAttackPower = "";

  $("#linkBtn").attr(value);
  $("#miphaBtn").attr(value);
  $("#lynelBtn").attr(value);
  $("#darkBtn").attr(value);

  // onclick function - when user select a character move to a different div
  $("#chosenCharacter").on("click", function() {
    var newDiv = $("#chosenCharacter");
    $("#linkBtn").append("<div></div>");
  });

  // when a character is selected, move to an HTML element with an id "chosenCharacter"

  // remaining characters are moved to an HTML element with an id "displayEnemies"

  // player select an emeny to find and move the selected character to HTML element with an id "defender"

  // attack power starts counting when play clicks on attack button

  // when attack button is triggered each character losses their attack power
  // the increment of attack power base is 6
  // the decrement of attack power base is 3
});
