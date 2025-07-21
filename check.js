// Get references to DOM elements
const btn = document.getElementById("btn");
const tableBody = document.getElementById("table-body");
const totalAmountDisplay = document.getElementById("total-amount");

let totalAmount = 0;
let entries = JSON.parse(localStorage.getItem("entries")) || [];

// Function to render all entries from localStorage
function renderEntries() {
  tableBody.innerHTML = "";
  totalAmount = 0;

  entries.forEach((entry, index) => {
    const newRow = document.createElement("tr");

    const categoryCell = document.createElement("td");
    categoryCell.textContent = entry.category;
    newRow.appendChild(categoryCell);

    const amountCell = document.createElement("td");
    amountCell.textContent = parseFloat(entry.amount).toFixed(2);
    newRow.appendChild(amountCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = entry.date;
    newRow.appendChild(dateCell);

    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.height="40px";
    deleteBtn.style.width="90px";
    deleteBtn.style.borderRadius="10px";
     deleteBtn.style.fontSize="1.2rem";
     deleteBtn.style.backgroundColor="rgb(230, 63, 63)";
   

    deleteBtn.addEventListener("click", function () {
      entries.splice(index, 1); // Remove from array
      localStorage.setItem("entries", JSON.stringify(entries)); // Update localStorage
      renderEntries(); // Re-render table

      
    });
    deleteCell.appendChild(deleteBtn);
    newRow.appendChild(deleteCell);

    tableBody.appendChild(newRow);

    totalAmount += parseFloat(entry.amount);
  });

  totalAmountDisplay.textContent = totalAmount.toFixed(2);
}

// Initial render from localStorage
renderEntries();

// Add event listener for "Add" button
btn.addEventListener("click", function () {
  const category = document.querySelector(".select").value;
  const amount = parseFloat(document.getElementById("amountinput").value);
  const date = document.getElementById("dateinput").value;

  if (!category || isNaN(amount) || !date) {
    alert("Please fill all the fields correctly.");
    return;
  }

  const newEntry = { category, amount, date };
  entries.push(newEntry);
  localStorage.setItem("entries", JSON.stringify(entries));

  renderEntries(); // Re-render table

  // Clear inputs
  document.getElementById("amountinput").value = "";
  document.getElementById("dateinput").value = "";
});
