const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll('.price');
    let total = 0;

    prices.forEach(price => {
        total += parseInt(price.textContent);
    });

    let totalRow = document.getElementById('ans');
    
    if (!totalRow) {
        totalRow = document.createElement('tr');
        totalRow.setAttribute('id', 'ans');
        const totalCell = document.createElement('td');
        totalCell.setAttribute('colspan', '2');
        totalCell.textContent = 'Total Price: Rs ' + total;
        totalRow.appendChild(totalCell);
        document.querySelector('table').appendChild(totalRow);
    } else {
        totalRow.querySelector('td').textContent = 'Total Price: Rs ' + total;
    }
};

getSumBtn.addEventListener("click", getSum);
