function calculateEnergy(){

    const fridge =
    Number(document.getElementById("fridge").value);

    const tv =
    Number(document.getElementById("tv").value);

    const laptop =
    Number(document.getElementById("laptop").value);

    const microwave =
    Number(document.getElementById("microwave").value);

    const washer =
    Number(document.getElementById("washer").value);

    const lights =
    Number(document.getElementById("lights").value);

    const monthlyKwh =

    ((fridge * 0.15 * 30) +

    (tv * 0.10 * 30) +

    (laptop * 0.06 * 30) +

    (microwave * 1.2 * 30) +

    (washer * 0.5 * 30) +

    (lights * 0.05 * 30));

    const monthlyCost =
    monthlyKwh * 2.5;

    const monthlyCo2 =
    monthlyKwh * 0.4;

    let efficiency;

    if(monthlyKwh < 150){

        efficiency =
        "Excelente";

    }else if(monthlyKwh < 300){

        efficiency =
        "Buena";

    }else{

        efficiency =
        "Mejorable";
    }

    document.getElementById(
    "energyResult"
    ).innerText =
    monthlyKwh.toFixed(2) + " kWh";

    document.getElementById(
    "costResult"
    ).innerText =
    "$" + monthlyCost.toFixed(2);

    document.getElementById(
    "co2EnergyResult"
    ).innerText =
    monthlyCo2.toFixed(2) + " kg";

    document.getElementById(
    "efficiencyResult"
    ).innerText =
    efficiency;
}