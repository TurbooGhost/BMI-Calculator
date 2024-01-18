const imperialInput = document.getElementById("imperial-input");
const metricInput = document.getElementById("metric-input");

const metricRadio = document.getElementById("metric-radio");
const imperialRadio = document.getElementById("imperial-radio");

metricRadio.addEventListener("change", toggleInputFields);
imperialRadio.addEventListener("change", toggleInputFields);

function toggleInputFields() {
    metricInput.classList.toggle("hidden", this !== metricRadio);
    imperialInput.classList.toggle("hidden", this !== imperialRadio);
}

const result = document.getElementById("result");
const stateDescription = document.getElementById("state-description");
const idealWeight = document.getElementById("ideal-weigth");

const welcomeSection = document.getElementById("welcome-section");
const resultSection = document.getElementById("result-section");

const heightFt = document.getElementById("height-ft");
const heightIn = document.getElementById("height-in");
const weightSt = document.getElementById("weight-st");
const weightLbs = document.getElementById("weight-lbs");

const heightCm = document.getElementById("height-cm");
const weightKg = document.getElementById("weight-kg");

[heightFt, heightIn, weightSt, weightLbs].forEach((element) =>
    element.addEventListener("input", () => calculateBMIimperial())
);

[heightCm, weightKg].forEach((element) => element.addEventListener("input", () => calculateBMImetric()));

function calculateBMImetric() {
    const cm = parseInt(heightCm.value);
    const kg = parseInt(weightKg.value);

    if (!isNaN(cm) && !isNaN(kg)) {
        const m = cm / 100;
        const bmi = calculateBMI(kg, m);
        displayResults(bmi, m, "kgs");
    }
}

function calculateBMIimperial() {
    const ft = parseInt(heightFt.value);
    const inc = parseInt(heightIn.value);
    const st = parseInt(weightSt.value);
    const lbs = parseInt(weightLbs.value);

    if ([ft, inc, st, lbs].every((value) => !isNaN(value))) {
        const totalLbs = st * 14 + lbs;
        const totalInches = ft * 12 + inc;
        const bmi = (703 * totalLbs) / Math.pow(totalInches, 2);
        displayResults(bmi, totalInches, "lbs");
    }
}

function displayResults(bmi, length, unit) {
    welcomeSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    if (!isNaN(bmi)) {
        result.textContent = Math.round(bmi * 10) / 10;
        changeState(bmi);

        const from = Math.round(18.5 * Math.pow(length, 2) * 10) / 10;
        const to = Math.round(24.9 * Math.pow(length, 2) * 10) / 10;
        idealWeight.textContent = `${from}${unit} - ${to}${unit}`;
    }
}

function calculateBMI(weight, length) {
    return Math.round((weight / Math.pow(length, 2)) * 10) / 10;
}

function changeState(bmi) {
    if (bmi < 18.5) stateDescription.textContent = "Underweight";
    else if (bmi < 25) stateDescription.textContent = "Healthy weight";
    else if (bmi < 30) stateDescription.textContent = "Overweight";
    else stateDescription.textContent = "Obese";
}
