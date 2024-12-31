const getSum = () => {
    // Select all elements with the class 'prices'
    const priceElements = document.querySelectorAll(".prices");
    
    // Calculate the sum of prices
    let total = 0;
    priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent) || 0; // Convert text to number and handle invalid entries
    });

    // Check if the total row already exists
    let totalRow = document.querySelector("#ans");
    if (totalRow) {
        // Update the total if the row already exists
        totalRow.textContent = `Total Price: ${total.toFixed(2)}`;
        return;
    }

    // Create a new row to display the total price
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    const totalCell = document.createElement("td");

    totalCell.colSpan = 2; // Span the cell across the table width
    totalCell.textContent = `Total Price: ${total.toFixed(2)}`;
    totalCell.id = "ans"; // Add the id to the total price cell

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};
