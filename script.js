const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with the class 'prices'
    const priceElements = document.querySelectorAll(".prices");
    
    // Calculate the sum of prices
    let total = 0;
    priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent) || 0; // Convert text to number and handle invalid entries
    });

    // Create a new row to display the total price
    const table = document.querySelector("table"); // Assuming the table is the only one or has no id
    const newRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // Span the cell across the table width
    totalCell.textContent = `Total Price: ${total.toFixed(2)}`; // Show the total price with 2 decimal places
    
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

// Attach the event listener to the button
getSumBtn.addEventListener("click", getSum);
