function calculateZakat() {
    event.preventDefault();
    var cash = document.getElementById("cash").value;
    var gold = document.getElementById("gold").value;
    var silver = document.getElementById("silver").value;
    var goldValue = gold * 209803;
    var silverValue = silver * 2521;
    var totalZakat = (cash * 0.25) + (goldValue*0.25) + (silverValue*0.25);
    var resultDiv = document.getElementById("result");
    var img = document.createElement("img")
    img.src = "images/OIP.jpeg"
    resultDiv.innerHTML = "Your total Zakat is: Rs=/" + totalZakat.toFixed(0) + " Pay It to 'SAYLANI WELFARE TRUST'";
  }

  