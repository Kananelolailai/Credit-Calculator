function calculateCredit() {
    const phoneAmount = parseFloat(document.getElementById('phoneAmount').value);
    
    // Validate input
    if (isNaN(phoneAmount) || phoneAmount <= 0) {
        alert("Please enter a valid positive number for the phone price.");
        return;
    }

    const interestRate = 22.25 / 100 / 12;  // 22.25% per annum, divided by 12 for monthly rate
    const loanTerm = 12;  // 12 months repayment period

    // Calculate monthly repayment
    const monthlyRepayment = phoneAmount * interestRate / (1 - Math.pow(1 + interestRate, -loanTerm));
    const totalRepayment = monthlyRepayment * loanTerm;

    // Display results with ZAR formatting
    document.getElementById('monthlyRepayment').innerText = monthlyRepayment.toFixed(2);
    document.getElementById('totalRepayment').innerText = totalRepayment.toFixed(2);

    // Show the results section
    document.getElementById('result').style.display = 'block';
}
