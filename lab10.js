let bill;
let message = "Enter the total restaurant bill amount: ";

do {
    bill = prompt(message);

    if (bill === "" || Number(bill) === 0) {
        message = "Please enter a valid amount greater than zero.";
    }

    else if (bill < 0) {
        message = "Negative numbers not allowed. Please enter a valid amount greater than zero.";
    }

    else if (isNaN(Number(bill))) {
        message = "Invalid input. Please enter a valid number.";
    }

} while (bill !== null && (bill.trim() === "" || isNaN(Number(bill)) || Number(bill) <= 0));

if (bill !== null) {
    bill = Number(bill);
    let tip = bill * 0.10;

    console.log(`For a bill of $${bill.toFixed(2)}, the tip should be $${tip.toFixed(2)}.`);
    document.write(`For a bill of $${bill.toFixed(2)}, the tip should be $${tip.toFixed(2)}.`);
}
