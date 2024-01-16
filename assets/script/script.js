// // Improved variable naming and use of querySelector for simplicity
// const imperialInput = document.querySelector("#imperial-input");
// const metricInput = document.querySelector("#metric-input");
// const metricRadio = document.querySelector("#metric-radio");
// const imperialRadio = document.querySelector("#imperial-radio");
// const result = document.querySelector("#result");
// const stateDescription = document.querySelector("#state-description");
// const idealWeightDisplay = document.querySelector("#ideal-weight");
// const welcomeSection = document.querySelector("#welcome-section");
// const resultSection = document.querySelector("#result-section");
// const heightFtInput = document.querySelector("#height-ft");
// const heightInInput = document.querySelector("#height-in");
// const weightStInput = document.querySelector("#weight-st");
// const weightLbsInput = document.querySelector("#weight-lbs");
// const heightCmInput = document.querySelector("#height-cm");
// const weightKgInput = document.querySelector("#weight-kg");
// // Using objects to store measurements
// let imperialMeasurements = { ft: undefined, inc: undefined, st: undefined, lbs: undefined };
// let metricMeasurements = { cm: undefined, kg: undefined };
// // Simplified toggle function
// function toggleInput(type) {
//     if (type === "metric") {
//         metricInput.classList.remove("hidden");
//         imperialInput.classList.add("hidden");
//     } else {
//         imperialInput.classList.remove("hidden");
//         metricInput.classList.add("hidden");
//     }
// }
// metricRadio.addEventListener("change", () => toggleInput("metric"));
// imperialRadio.addEventListener("change", () => toggleInput("imperial"));
// // Refactored event listeners
// function handleImperialInput() {
//     imperialMeasurements = {
//         ft: parseInt(heightFtInput.value) || undefined,
//         inc: parseInt(heightInInput.value) || undefined,
//         st: parseInt(weightStInput.value) || undefined,
//         lbs: parseInt(weightLbsInput.value) || undefined
//     };
//     const { ft, inc, st, lbs } = imperialMeasurements;
//     if (ft && inc && st && lbs) calculateBMIimperial(ft, inc, st, lbs);
// }
// [heightFtInput, heightInInput, weightStInput, weightLbsInput].forEach((input) => {
//     input.addEventListener("input", handleImperialInput);
// });
// function handleMetricInput() {
//     metricMeasurements = {
//         cm: parseInt(heightCmInput.value) || undefined,
//         kg: parseInt(weightKgInput.value) || undefined
//     };
//     const { cm, kg } = metricMeasurements;
//     if (cm && kg) calculateBMImetric(cm, kg);
// }
// [heightCmInput, weightKgInput].forEach((input) => {
//     input.addEventListener("input", handleMetricInput);
// });
// function calculateBMImetric(cm: number, kg: number): void {
//     let m = cm / 100;
//     let bmi = Math.round((kg / Math.pow(m, 2)) * 10) / 10;
//     welcomeSection.classList.add("hidden");
//     resultSection.classList.remove("hidden");
//     if (!isNaN(bmi)) {
//         result.innerHTML = bmi.toString();
//         changeState(bmi);
//         let from = Math.round(18.5 * Math.pow(m, 2) * 10) / 10;
//         let to = Math.round(24.9 * Math.pow(m, 2) * 10) / 10;
//         idealWeight.innerHTML = `${from}kgs - ${to}kgs`;
//     }
// }
// function calculateBMIimperial(ft: number, inc: number, st: number, lbs: number): void {
//     lbs = st * 14 + lbs;
//     inc = ft * 12 + inc;
//     let bmi = 703 * (lbs / Math.pow(inc, 2));
//     welcomeSection.classList.add("hidden");
//     resultSection.classList.remove("hidden");
//     if (!isNaN(bmi)) {
//         result.innerHTML = (Math.round(bmi * 10) / 10).toString();
//         changeState(bmi);
//         let from = Math.round((18.5 / 703) * Math.pow(inc, 2) * 10) / 10;
//         let to = Math.round((24.9 / 703) * Math.pow(inc, 2) * 10) / 10;
//         idealWeight.innerHTML = `${from}lbs - ${to}lbs`;
//     }
// }
// function changeState(bmi: number): void {
//     if (bmi < 18.5) state.innerHTML = "Underweight";
//     else if (bmi < 25) state.innerHTML = "Healthy weight";
//     else if (bmi < 30) state.innerHTML = "Overweight";
//     else if (bmi >= 30) state.innerHTML = "Obese";
// }
