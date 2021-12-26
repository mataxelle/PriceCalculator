function calculPrice() {

    const totalBill = Number(document.getElementById('totalBill').value);
    const nbPerson = Number(document.getElementById('nbPerson').value);

    const tip = totalBill * 0.2;
    const totalwithTip = totalBill + tip;
    const totalPerPerson = totalwithTip / nbPerson;

    document.getElementById('tip').innerHTML = Number(tip).toFixed(2) + '&#8364;';
    document.getElementById('totalwithTip').innerHTML = Number(totalwithTip).toFixed(2) + '&#8364;';
    document.getElementById('totalPerPerson').innerHTML = Number(totalPerPerson).toFixed(2) + '&#8364;';

}