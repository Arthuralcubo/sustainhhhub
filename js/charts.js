// =========================
// CONSUMO ENERGÉTICO
// =========================

const energyCtx =
document.getElementById("energyChart")
.getContext("2d");

const energyGradient =
energyCtx.createLinearGradient(
0,0,0,300
);

energyGradient.addColorStop(
0,
"rgba(22,163,74,0.9)"
);

energyGradient.addColorStop(
1,
"rgba(22,163,74,0.2)"
);

new Chart(energyCtx,{

    type:"bar",

    data:{

        labels:[
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo"
        ],

        datasets:[{

            label:"Consumo (kWh)",

            data:[
                400,
                350,
                320,
                280,
                240
            ],

            backgroundColor:
            energyGradient,

            borderRadius:15,

            borderSkipped:false
        }]
    },

    options:{

        responsive:true,

        plugins:{

            legend:{
                display:false
            }
        },

        scales:{

            y:{
                beginAtZero:true,

                grid:{
                    color:"rgba(0,0,0,.05)"
                }
            },

            x:{
                grid:{
                    display:false
                }
            }
        }
    }
});


// =========================
// CO2
// =========================

const co2Ctx =
document.getElementById("co2Chart")
.getContext("2d");

const co2Gradient =
co2Ctx.createLinearGradient(
0,0,0,300
);

co2Gradient.addColorStop(
0,
"rgba(22,163,74,.45)"
);

co2Gradient.addColorStop(
1,
"rgba(22,163,74,0)"
);

new Chart(co2Ctx,{

    type:"line",

    data:{

        labels:[
            "2022",
            "2023",
            "2024",
            "2025",
            "2026"
        ],

        datasets:[{

            label:"CO₂ Reducido",

            data:[
                120,
                105,
                92,
                80,
                65
            ],

            borderColor:"#16a34a",

            backgroundColor:
            co2Gradient,

            fill:true,

            tension:.4,

            pointRadius:6,

            pointHoverRadius:10,

            pointBackgroundColor:
            "#16a34a"
        }]
    },

    options:{

        responsive:true,

        plugins:{

            legend:{
                position:"top"
            }
        },

        scales:{

            y:{
                beginAtZero:true,

                grid:{
                    color:"rgba(0,0,0,.05)"
                }
            },

            x:{
                grid:{
                    display:false
                }
            }
        }
    }
});

// =========================
// AGUA
// =========================

new Chart(
document.getElementById("waterChart"),
{

    type:"doughnut",

    data:{

        labels:[
            "Reutilizada",
            "Consumida"
        ],

        datasets:[{

            data:[
                35,
                65
            ],

            backgroundColor:[

                "#16a34a",
                "#dcfce7"
            ],

            borderWidth:0
        }]
    },

    options:{

        responsive:true,

        cutout:"70%",

        plugins:{

            legend:{
                position:"bottom"
            }
        }
    }
});

// =========================
// RECICLAJE
// =========================

new Chart(
document.getElementById("recycleChart"),
{

    type:"doughnut",

    data:{

        labels:[
            "Reciclado",
            "No Reciclado"
        ],

        datasets:[{

            data:[
                70,
                30
            ],

            backgroundColor:[

                "#16a34a",
                "#dcfce7"
            ],

            borderWidth:0
        }]
    },

    options:{

        responsive:true,

        cutout:"75%",

        plugins:{

            legend:{
                position:"bottom"
            }
        },

        animation:{

            animateRotate:true,

            animateScale:true
        }
    }
});