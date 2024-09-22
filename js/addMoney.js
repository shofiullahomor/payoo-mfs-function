/*
how to get a number from an input field
1. create a variable 
2. right side document.getElementById(id)
3. .value
4. parseFloat


*/

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");
    if (isNaN(addMoney)) {
      alert("Failed to add money");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;
      // add to transaction history
      const p = document.createElement("p");
      p.innerText = `Added:${addMoney} Tk. Balance : ${newBalance}`;

      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to add the money");
    }
  });
