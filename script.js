var deleteButtons = document.getElementsByClassName("delete-button");

Array.from(deleteButtons).forEach(function (button) {
  button.addEventListener("click", function () {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
});

document.getElementById("add-button").addEventListener("click", function () {
  var nameInput = document.getElementById("new-name");
  var MssvInput = document.getElementById("Mssv");
  var MidscoreInput = document.getElementById("new-Mid-score");
  var RescoreInput=document.getElementById("new-Re-score");
  var FinalscoreInput=document.getElementById("new-Final-score")

  var name = nameInput.value;
  var grade = gradeInput.value;
  var score = scoreInput.value;

  if (name && grade && score) {
    var table = document.querySelector(".score-table tbody");
    var newRow = table.insertRow();

    var nameCell = newRow.insertCell();
    var gradeCell = newRow.insertCell();
    var scoreCell = newRow.insertCell();
    var deleteCell = newRow.insertCell();

    nameCell.textContent = name;
    gradeCell.textContent = grade;
    scoreCell.textContent = score;
    deleteCell.innerHTML = '<button class="delete-button">Xóa</button>';

    nameInput.value = "";
    gradeInput.value = "";
    scoreInput.value = "";

    var deleteButtons = document.getElementsByClassName("delete-button");
    Array.from(deleteButtons).forEach(function (button) {
      button.addEventListener("click", function () {
        var row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
      });
    });
  }
});
  