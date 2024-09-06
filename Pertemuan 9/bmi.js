var tinggiInput = document.querySelector(".tinggi-input-field");
var beratInput = document.querySelector(".berat-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var BMI, tinggi, berat;

function myFunction() {
    tinggi = tinggiInput.value;
    berat = beratInput.value;
    BMI = berat/(tinggi**2);
    result.innerHTML = "BMI anda adalah: " + BMI.toFixed(2); 
}

calculateButton.addEventListener('click', myFunction);