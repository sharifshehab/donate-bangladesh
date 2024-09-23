const cards = document.getElementsByClassName('single-donation-card');
for (const card of cards) {
    // console.log(card.childNodes[3].childNodes[3].innerText);

    /* donation button */
    const donateButton = card.childNodes[3].childNodes[7].childNodes[3];
    
    donateButton.addEventListener('click', function () {
        /* initial personal balance */
        const initialBalance = document.getElementById('initial-balance');
        /* initial collected donation */
        const collectedDonation = card.childNodes[3].childNodes[1].childNodes[3];
        /* donation input field */
        const donationAmount = card.childNodes[3].childNodes[7].childNodes[1];

        /* checking for invalid character, negative number, empty input and insufficient amount */
        if (isNaN(donationAmount.value) || donationAmount.value < 0 || donationAmount.value.trim() === '' || parseInt(initialBalance.innerText) < parseInt(donationAmount.value)) { 
            return alert('Not a valid amount');
        }

        /* total collected donation */ 
        const newDonationAmount = getBalance(collectedDonation, donationAmount, '', true);
        collectedDonation.innerText = newDonationAmount;

        /* total personal balance */
        const currentBalance = getBalance('', donationAmount, initialBalance, false);;
        initialBalance.innerText = currentBalance;

        if (currentBalance) {
            /*  successful donation popup */
            document.getElementById('my_modal_1').showModal();

            /* donation history */
            const donationName = card.childNodes[3].childNodes[3].innerText;
            getTransaction(donationAmount.value, donationName);
        }
        /* empty input field after a successful donation */
        donationAmount.value = '';
    });
}


document.getElementById('history').addEventListener('click', function (e) {
    e.target.classList.remove('dbd-toggle');
    document.getElementById('donation').classList.add('dbd-toggle');

    document.getElementById('history-wrapper').classList.remove('hidden');
    document.getElementById('donation-wrapper').classList.add('hidden');
});

document.getElementById('donation').addEventListener('click', function (e) {
    e.target.classList.remove('dbd-toggle');
    document.getElementById('history').classList.add('dbd-toggle');
   
    document.getElementById('donation-wrapper').classList.remove('hidden');
    document.getElementById('history-wrapper').classList.add('hidden');
});

