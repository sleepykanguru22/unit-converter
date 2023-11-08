const input = document.getElementById("unit");
const btn = document.getElementById("btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

function getLength() {
  let unit = Number(input.value);
  let feet = (unit * 3.28084).toFixed(3);
  let meters = (unit * 0.3048).toFixed(3);
  length.innerHTML = `<h2>Length (Meter/Feet)</h2><p><span>${unit} meters = ${feet} feet </span>| <span>${unit} feet = ${meters} meters</span></p>`;
}

function getVolume() {
  let unit = Number(input.value);
  const liters = (unit * 3.78541).toFixed(3);
  const gallons = (unit * 0.264172).toFixed(3);

  volume.innerHTML = `<h2>Volume (Liters/Gallons)</h2><p><span>${unit} liters = ${gallons} gallons </span>| <span>${unit} gallons = ${liters} liters</span></p>`;
}

function getMass() {
  let unit = Number(input.value);
  const pounds = (unit * 2.20462).toFixed(3);
  const kilos = (unit * 0.45359237).toFixed(3);
  mass.innerHTML = `<h2>Mass (Kilograms/Pounds)</h2><p><span>${unit} kilos = ${pounds} pounds </span>| <span>${unit} pounds = ${kilos} liters</span></p>`;
}

btn.addEventListener("click", function () {
  getLength();
  getVolume();
  getMass();
});
