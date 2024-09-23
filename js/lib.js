
/* get the current balance */
function getBalance(collectedDonation, donationAmount, initialBalance, isDonation) {
    let balance;
    if (isDonation) {
        balance = parseInt(collectedDonation.innerText) + parseInt(donationAmount.value);
    } else {
        balance = parseInt(initialBalance.innerText) - parseInt(donationAmount.value);
    }
    return balance;
}

/* get donation history */
function getTransaction(donationAmount, donationName) {
    const date = new Date();
    const transactionWrapper = document.getElementById('transaction-wrapper');
    const singleCard = document.createElement('div');
    singleCard.classList.add('card', 'card-side', 'flex-col', 'md:flex-row', 'shadow-xl', 'border-2', 'gap-y-7', 'p-8', 'my-8', 'single-transaction-card');
    singleCard.innerHTML =
        `
            <div class="card-body basis-6/12 gap-3.5 p-0 md:p-8">
                <h2 class="card-title text-secondaryColor font-bold">${donationAmount} Taka is Donated for ${donationName}</h2>
                <p>Date : ${date}</p
            </div>
        `;
    transactionWrapper.appendChild(singleCard);
}

/* toggle button class */
function toggleBtn(history, donation) {
    document.getElementById(history).addEventListener('click', function (e) {
        e.target.classList.remove('dbd-toggle');
        document.getElementById(donation).classList.add('dbd-toggle');

        document.getElementById(`${history}-wrapper`).classList.remove('hidden');
        document.getElementById(`${donation}-wrapper`).classList.add('hidden');
    });
}