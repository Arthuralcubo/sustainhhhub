function calculateEcoCharge(){

    let devices =
    Number(document.getElementById("devices").value);

    let watts =
    Number(document.getElementById("watts").value);

    let annualKwh =
    (devices * watts * 24 * 365) / 1000;

    let annualCost =
    annualKwh * 2.5;

    let annualCo2 =
    annualKwh * 0.4;

    document.getElementById(
    "kwhResult"
    ).innerText =
    annualKwh.toFixed(2);

    document.getElementById(
    "moneyResult"
    ).innerText =
    annualCost.toFixed(2);

    document.getElementById(
    "co2Result"
    ).innerText =
    annualCo2.toFixed(2);
}