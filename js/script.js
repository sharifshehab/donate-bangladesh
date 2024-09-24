
const cards = document.getElementsByClassName('single-donation-card');
for (const card of cards) {
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
            return alert('Invalid Donation Amount');
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

/* toggle history button color */
toggleBtn('history', 'donation');

/* toggle donation button color */
toggleBtn('donation', 'history');

/* change header BG-color on scroll */
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const headerBgColor = document.getElementById('header-bg');

    const scrollY = window.scrollY;
    if (scrollY > 0) {
        header.classList.add('backdrop-blur-md', 'border-b', 'bg-white/30');
        headerBgColor.classList.remove('bg-[#F9F7F3]');
    } else {
        header.classList.remove('backdrop-blur-md', 'border-b', 'bg-white/30');
        headerBgColor.classList.add('bg-[#F9F7F3]');
    }
})


