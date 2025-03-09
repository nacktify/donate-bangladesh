// feni

document.getElementById('btn-feni').addEventListener('click', function () {

    const donateFeni = getInputValueById('input-feni');
    const ownBalance = getInnerTextValueById('own-balance');


    if (donateFeni > ownBalance) {
        alert('Failed to Donate Money!');
        return;
    }
    else if (donateFeni < 1) {
        alert('Failed to Donate Money!');
        return;
    }
    if (isNaN(donateFeni)) {
        alert('Failed to Donate Money!');
        return;
    }


    const feniBalance = getInnerTextValueById('balance-feni');
    const feniBalanceNew = feniBalance + donateFeni;
    document.getElementById('balance-feni').innerText = feniBalanceNew;

    const ownBalanceNew = ownBalance - donateFeni;
    document.getElementById('own-balance').innerText = ownBalanceNew;
});

// noakhali
document.getElementById('btn-noakhali').addEventListener('click', function () {


    const donateNoakhali = getInputValueById('input-noakhali');
    const ownBalance = getInnerTextValueById('own-balance');

    if (donateNoakhali > ownBalance) {
        alert('Failed to Donate Money!');
        return;
    }
    else if (donateNoakhali < 1) {
        alert('Failed to Donate Money!');
        return;
    }
    if (isNaN(donateNoakhali)) {
        alert('Failed to Donate Money!');
        return;
    }


    const noakhaliBalance = getInnerTextValueById('noakhali-balance');
    const noakhaliBalanceNew = noakhaliBalance + donateNoakhali;
    document.getElementById('noakhali-balance').innerText = noakhaliBalanceNew;

    const ownBalanceNew = ownBalance - donateNoakhali;
    document.getElementById('own-balance').innerText = ownBalanceNew;
});

// quota
document.getElementById('btn-quota').addEventListener('click', function () {


    const donateQuota = getInputValueById('input-quota');
    const ownBalance = getInnerTextValueById('own-balance');

    if (donateQuota > ownBalance) {
        alert('Failed to Donate Money!');
        return;
    }
    else if (donateQuota < 1) {
        alert('Failed to Donate Money!');
        return;
    }
    if (isNaN(donateQuota)) {
        alert('Failed to Donate Money!');
        return;
    }


    const quotaBalance = getInnerTextValueById('quota-balance');
    const quotaBalanceNew = quotaBalance + donateQuota;
    document.getElementById('quota-balance').innerText = quotaBalanceNew;

    const ownBalanceNew = ownBalance - donateQuota;
    document.getElementById('own-balance').innerText = ownBalanceNew;
});
