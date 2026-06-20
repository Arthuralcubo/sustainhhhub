let evaluationChart;
function evaluateProject() {

        // CAMPOS OBLIGATORIOS
    const nombreProyecto = document.getElementById("nombreProyecto").value.trim();
    const descripcionProyecto = document.getElementById("descripcionProyecto").value.trim();
    const inversion = document.getElementById("inversion").value.trim();

    if (nombreProyecto === "") {
        alert("⚠️ Debes ingresar el nombre del proyecto.");
        document.getElementById("nombreProyecto").focus();
        return;
    }

    if (descripcionProyecto === "") {
        alert("⚠️ Debes ingresar una descripción del proyecto.");
        document.getElementById("descripcionProyecto").focus();
        return;
    }

    if (inversion === "" || Number(inversion) <= 0) {
        alert("⚠️ Debes ingresar una inversión inicial válida.");
        document.getElementById("inversion").focus();
        return;
    }

    // NUEVOS CAMPOS DE TEXTO
const problemaProyecto =
document.getElementById("problemaProyecto").value.toLowerCase();

const impactoSocial =
document.getElementById("impactoSocial").value.toLowerCase();

const recursoCritico =
document.getElementById("recursoCritico").value.toLowerCase();

const cicloVida =
document.getElementById("cicloVida").value.toLowerCase();


    // MERCADO
    const demanda = Number(document.getElementById("demanda").value);
    const competidores = Number(document.getElementById("competidores").value);
    const cliente = Number(document.getElementById("cliente").value);

    // TÉCNICO
    const tecnologia = Number(document.getElementById("tecnologia").value);
    const casos = Number(document.getElementById("casos").value);
    const especializado = Number(document.getElementById("especializado").value);

    // ECONÓMICO
    const financiamiento = Number(document.getElementById("financiamiento").value);
    const retorno = Number(document.getElementById("retorno").value);

    // AMBIENTAL
    const residuos = Number(document.getElementById("residuos").value);
    const agua = Number(document.getElementById("agua").value);
    const emisiones = Number(document.getElementById("emisiones").value);

    // RIESGOS
    const proveedor = Number(document.getElementById("proveedor").value);
    const regulacion = Number(document.getElementById("regulacion").value);
    const escasez = Number(document.getElementById("escasez").value);

    // PROMEDIOS
    const mercado =
        (demanda + competidores + cliente) / 3;

    const tecnico =
        (tecnologia + casos + especializado) / 3;

    const economico =
        (financiamiento + retorno) / 2;

    const ambiental =
        (residuos + agua + emisiones) / 3;

    const riesgos =
        (proveedor + regulacion + escasez) / 3;

        // PUNTOS EXTRA POR DESCRIPCIONES BIEN DEFINIDAS

let bonus = 0;

// Problema bien definido
if (problemaProyecto.length > 50) {
    bonus += 3;
}

// Impacto social explicado
if (
    impactoSocial.includes("empleo") ||
    impactoSocial.includes("comunidad") ||
    impactoSocial.includes("personas") ||
    impactoSocial.includes("beneficio")
) {
    bonus += 3;
}

// Ciclo de vida considerado
if (
    cicloVida.includes("recic") ||
    cicloVida.includes("reutil") ||
    cicloVida.includes("compost") ||
    cicloVida.includes("recole")
) {
    bonus += 3;
}

// Recurso crítico identificado
if (recursoCritico.length > 20) {
    bonus += 2;
}

    // ECO SCORE GENERAL
    let ecoScore = Math.round(
    (mercado + tecnico + economico + ambiental + riesgos) / 5
);

ecoScore += bonus;

if (ecoScore > 100) {
    ecoScore = 100;
}

    // MOSTRAR RESULTADOS
    document.getElementById("ecoScore").textContent = ecoScore;
    const circle = document.querySelector(".score-circle");

let color = "#e74c3c";

if(ecoScore >= 85){
    color = "#2ecc71";
}
else if(ecoScore >= 70){
    color = "#f1c40f";
}
else if(ecoScore >= 50){
    color = "#e67e22";
}

const grados = ecoScore * 3.6;

circle.style.background =
`conic-gradient(
${color} 0deg,
${color} ${grados}deg,
#ecf0f1 ${grados}deg
)`;
    document.getElementById("ambientalResult").textContent =
        Math.round(ambiental) + "%";

    document.getElementById("economicoResult").textContent =
        Math.round(economico) + "%";

    document.getElementById("mercadoResult").textContent =
        Math.round(mercado) + "%";

    document.getElementById("tecnicoResult").textContent =
        Math.round(tecnico) + "%";

    // DIAGNÓSTICO
    let diagnostico = "";

    if (ecoScore >= 85) {
        diagnostico =
            "🟢 Excelente proyecto. Alta viabilidad y sustentabilidad.";
    }
    else if (ecoScore >= 70) {
        diagnostico =
            "🟡 Buen proyecto. Existen oportunidades de mejora.";
    }
    else if (ecoScore >= 50) {
        diagnostico =
            "🟠 Proyecto regular. Se recomienda fortalecer varios aspectos.";
    }
    else {
        diagnostico =
            "🔴 Proyecto de alto riesgo. Requiere rediseño importante.";
    }

    document.getElementById("evaluationText").textContent =
        diagnostico;

    // RIESGOS
    let riesgosDetectados = [];

    // ANÁLISIS AUTOMÁTICO DE TEXTO

if (
    recursoCritico.includes("único proveedor") ||
    recursoCritico.includes("solo proveedor")
) {
    riesgosDetectados.push(
        "Alta dependencia de un único proveedor."
    );
}

if (
    cicloVida.length < 20
) {
    riesgosDetectados.push(
        "No se describe claramente el destino final del producto."
    );
}

if (
    problemaProyecto.length < 40
) {
    riesgosDetectados.push(
        "El problema a resolver no está suficientemente definido."
    );
}

if (
    impactoSocial.length < 30
) {
    riesgosDetectados.push(
        "El impacto social aún no está claramente identificado."
    );
}

    if (proveedor === 0)
        riesgosDetectados.push("Dependencia de un único proveedor.");

    if (regulacion === 0)
        riesgosDetectados.push("Posibles problemas regulatorios.");

    if (escasez === 0)
        riesgosDetectados.push("Dependencia de recursos escasos.");

    document.getElementById("riskList").innerHTML =
        riesgosDetectados.length > 0
            ? riesgosDetectados.map(r => "• " + r).join("<br>")
            : "✅ No se detectaron riesgos importantes.";

    // RECOMENDACIONES
    let recomendaciones = [];

    if (problemaProyecto.length < 80)
    recomendaciones.push(
        "Describe con mayor detalle el problema que resuelve el proyecto."
    );

if (impactoSocial.length < 80)
    recomendaciones.push(
        "Define mejor los beneficios para personas o comunidades."
    );

if (cicloVida.length < 80)
    recomendaciones.push(
        "Analiza el ciclo de vida completo del proyecto."
    );

if (recursoCritico.length < 50)
    recomendaciones.push(
        "Identifica dependencias clave y recursos críticos."
    );

    if (mercado < 70)
        recomendaciones.push("Realizar un estudio de mercado más profundo.");

    if (tecnico < 70)
        recomendaciones.push("Validar la tecnología mediante prototipos.");

    if (economico < 70)
        recomendaciones.push("Buscar financiamiento o inversionistas.");

    if (ambiental < 70)
        recomendaciones.push("Incrementar el impacto ambiental positivo.");

    if (riesgos < 70)
        recomendaciones.push("Diseñar estrategias de mitigación de riesgos.");

    document.getElementById("recommendations").innerHTML =
        recomendaciones.length > 0
            ? recomendaciones.map(r => "• " + r).join("<br>")
            : "🎉 Proyecto muy sólido. Continúa con la implementación.";

            const ctx =
document.getElementById("evaluationChart");

if(evaluationChart){
    evaluationChart.destroy();
}

evaluationChart = new Chart(ctx, {

    type: "radar",

    data: {

        labels: [
            "Mercado",
            "Técnico",
            "Económico",
            "Ambiental",
            "Riesgos"
        ],

        datasets: [{

            label: "Evaluación",

            data: [
                mercado,
                tecnico,
                economico,
                ambiental,
                riesgos
            ],

            fill: true,

            backgroundColor:
                "rgba(34,197,94,0.2)",

            borderColor:
                "#16a34a",

            borderWidth: 3,

            pointBackgroundColor:
                "#16a34a"

        }]
    },

    options: {

        responsive: true,

        scales: {

            r: {

                beginAtZero: true,

                max: 100,

                ticks: {
                    stepSize: 20
                }

            }

        }

    }

});
}

window.evaluateProject = evaluateProject;