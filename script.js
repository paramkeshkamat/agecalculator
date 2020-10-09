let birthDate = document.getElementById("birthDate");
let ageInDays = document.getElementById("ageInDays");

const reset = () => {
    birthDate.value = "";
    document.getElementById('age-years').innerHTML = "&nbsp;";
    document.getElementById('age-months').innerHTML = "&nbsp;";
    document.getElementById('age-days').innerHTML = "&nbsp;";
}
const ageCalculate = () => {
    let age = new Date(birthDate.value);
    if (birthDate.value === "") {
        document.getElementById('age-years').innerHTML = "&#xf071; Please enter your birthdate";
        document.getElementById('age-months').innerHTML = "&#xf071; Please enter your birthdate";
        document.getElementById('age-days').innerHTML = "&#xf071; Please enter your birthdate";
        document.getElementById('age-years').style.color = "grey";
        document.getElementById('age-months').style.color = "grey";
        document.getElementById('age-days').style.color = "grey";

    } else {
        document.getElementById('age-years').innerHTML = Math.floor(((new Date()) - (age)) / (1000 * 60 * 60 * 24 * 365.25));
        document.getElementById('age-months').innerHTML = Math.floor(((new Date()) - (age)) / (1000 * 60 * 60 * 24 * 30.4375));
        document.getElementById('age-days').innerHTML = Math.floor(((new Date()) - (age)) / (1000 * 60 * 60 * 24));
        document.getElementById('age-years').style.color = "black";
        document.getElementById('age-months').style.color = "black";
        document.getElementById('age-days').style.color = "black";
    }
}