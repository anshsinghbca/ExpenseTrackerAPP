// Get references to DOM elements
const btn = document.getElementById("btn");
const tableBody = document.getElementById("table-body");
const totalAmountDisplay = document.getElementById("total-amount");

// This will keep track of total amount
let totalAmount = 0;

// Add event listener for "Add" button
btn.addEventListener("click", function () {
  const category = document.querySelector(".select").value;
  const amount = parseFloat(document.getElementById("amountinput").value);
  const date = document.getElementById("dateinput").value;

  // Check if any input is empty or invalid
  if (!category || isNaN(amount) || !date) {
    alert("Please fill all the fields correctly.");
    return;
  }

  // Create new table row
  const newRow = document.createElement("tr");

  // Create and append category cell
  const categoryCell = document.createElement("td");
  categoryCell.textContent = category;
  newRow.appendChild(categoryCell);

  // Create and append amount cell
  const amountCell = document.createElement("td");
  amountCell.textContent = amount.toFixed(2);
  newRow.appendChild(amountCell);

  // Create and append date cell
  const dateCell = document.createElement("td");
  dateCell.textContent = date;
  newRow.appendChild(dateCell);

  // Create and append delete button cell
  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.id = "Delete";
  deleteBtn.addEventListener("click", function () {
    totalAmount -= amount;
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
    tableBody.removeChild(newRow);
  });
  deleteCell.appendChild(deleteBtn);
  newRow.appendChild(deleteCell);

  // Append new row to the table body
  tableBody.appendChild(newRow);

  // Update total
  totalAmount += amount;
  totalAmountDisplay.textContent = totalAmount.toFixed(2);

  // Clear inputs
  document.getElementById("amountinput").value = "";
  document.getElementById("dateinput").value = "";


  
});
