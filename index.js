/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length")
const volumeP = document.getElementById("volume")
const massP = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    const inputVal = parseFloat(inputEl.value)
    const feet = (inputVal * 3.281).toFixed(3)
    const meters = (inputVal / 3.281).toFixed(3)
    const gallons = (inputVal * 0.264).toFixed(3)
    const liters = (inputVal / 0.264).toFixed(3)
    const pounds = (inputVal * 2.204).toFixed(3)
    const kilograms = (inputVal / 2.204).toFixed(3)
    
    lengthP.innerText = `${inputVal} meters = ${feet} feet | ${inputVal} feet = ${meters} meters`
    volumeP.innerText = `${inputVal} liters = ${gallons} gallons | ${inputVal} gallons = ${liters} liters`
    massP.innerText = `${inputVal} kilos = ${pounds} pounds | ${inputVal} pounds = ${kilograms} kilos`
})
