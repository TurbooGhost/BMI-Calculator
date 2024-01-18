let imperialInput = document.getElementById("imperial-input");
let metricInput = document.getElementById("metric-input");

let metricRadio = document.getElementById("metric-radio");
let imperialRadio = document.getElementById("imperial-radio");

metricRadio.addEventListener("change", function () {
    metricInput.classList.remove("hidden");
    imperialInput.classList.add("hidden");
});

imperialRadio.addEventListener("change", function () {
    imperialInput.classList.remove("hidden");
    metricInput.classList.add("hidden");
});

let result = document.getElementById("result");

let state = document.getElementById("state-description");
let idealWeigth = document.getElementById("ideal-weigth");

let welcomSection = document.getElementById("welcome-section");
let resultSection = document.getElementById("result-section");

let ft = undefined;
let inc = undefined;
let st = undefined;
let lbs = undefined;

let heightFt = document.getElementById("height-ft");
let heightIn = document.getElementById("height-in");

heightFt.addEventListener("input", function () {
    ft = heightFt.value;
    if (inc !== undefined && st !== undefined && lbs !== undefined) calculateBMIimperial(ft, inc, st, lbs);
});

heightIn.addEventListener("input", function () {
    inc = heightIn.value;
    if (ft !== undefined && st !== undefined && lbs !== undefined) calculateBMIimperial(ft, inc, st, lbs);
});

let weigthSt = document.getElementById("weight-st");
let weigthLbs = document.getElementById("weight-lbs");

weigthSt.addEventListener("input", function () {
    st = weigthSt.value;
    if (ft !== undefined && inc !== undefined && lbs !== undefined) calculateBMIimperial(ft, inc, st, lbs);
});

weigthLbs.addEventListener("input", function () {
    lbs = weigthLbs.value;
    if (ft !== undefined && inc !== undefined && st !== undefined) calculateBMIimperial(ft, inc, st, lbs);
});

let heightCm = document.getElementById("height-cm");
let weigthKg = document.getElementById("weight-kg");

let cm = undefined;
let kg = undefined;

heightCm.addEventListener("input", function () {
    cm = heightCm.value;
    if (kg !== undefined) calculateBMImetric(cm, kg);
});

weigthKg.addEventListener("input", function () {
    kg = weigthKg.value;
    if (cm !== undefined) calculateBMImetric(cm, kg);
});

function calculateBMImetric(cm, kg) {
    let intCm = parseInt(cm);
    let intKg = parseInt(kg);
    let m = intCm / 100;
    let bmi = Math.round((intKg / Math.pow(m, 2)) * 10) / 10;

    welcomSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    if (bmi !== NaN) {
        result.innerHTML = bmi;

        changeState(bmi);

        let from = Math.round(18.5 * Math.pow(m, 2) * 10) / 10;
        let to = Math.round(24.9 * Math.pow(m, 2) * 10) / 10;
        idealWeigth.innerHTML = from + "kgs - " + to + "kgs";
    }

    cm = undefined;
    kg = undefined;
}

function calculateBMIimperial(ft, inc, st, lbs) {
    let intFt = parseInt(ft);
    let intInc = parseInt(inc);
    let intSt = parseInt(st);
    let intLbs = parseInt(lbs);

    lbs = intSt * 14 + intLbs;
    inc = intFt * 12 + intInc;

    let bmi = 703 * (lbs / Math.pow(inc, 2));

    welcomSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    if (bmi !== NaN) {
        result.innerHTML = Math.round(bmi * 10) / 10;

        changeState(bmi);

        let from = Math.round((18.5 / 703) * Math.pow(inc, 2) * 10) / 10;
        let to = Math.round((24.9 / 703) * Math.pow(inc, 2) * 10) / 10;
        idealWeigth.innerHTML = from + "lbs - " + to + "lbs";
    }
    ft = undefined;
    inc = undefined;
    st = undefined;
    lbs = undefined;
}

function changeState(bmi) {
    if (bmi < 18.5) state.innerHTML = "Underweight";
    else if (bmi < 25) state.innerHTML = "Healthy weight";
    else if (bmi < 30) state.innerHTML = "Overweight";
    else if (bmi >= 30) state.innerHTML = "Obese";
}
