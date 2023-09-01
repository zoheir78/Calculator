
let result = document.getElementById("result");

function appendToResult(value) {
    result.value += value;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function clearResult() {
    result.value = "";
}

function sin() {
    result.value = Math.sin(result.value);
}

function cos() {
    result.value = Math.cos(result.value);
}

function tan() {
    result.value = Math.tan(result.value);
}

function arcsin() {
    result.value = Math.asin(result.value);
}

function arccos() {
    result.value = Math.acos(result.value);
}

function arctan() {
    result.value = Math.atan(result.value);
}

function exp() {
    result.value = Math.exp(result.value);
}

function ln() {
    result.value = Math.log(result.value);
}

function log() {
    result.value = Math.log10(result.value);
}

function pow() {
    result.value = Math.pow(result.value, 2);
}

function sqrt() {
    result.value = Math.sqrt(result.value);
}


// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("sin").addEventListener("click", sin);
    // document.getElementById("cos").addEventListener("click", cos);
    // document.getElementById("tan").addEventListener("click", tan);
    // document.getElementById("arcsin").addEventListener("click", arcsin);
    // document.getElementById("arccos").addEventListener("click", arccos);
    // document.getElementById("arctan").addEventListener("click", arctan);
    // document.getElementById("exp").addEventListener("click", exp);
    // document.getElementById("ln").addEventListener("click", ln);
    // document.getElementById("log").addEventListener("click", log);
    // document.getElementById("pow").addEventListener("click", pow);
    // // document.getElementById("cubed").addEventListener("click", cubed);
    // document.getElementById("sqrt").addEventListener("click", sqrt);
    // document.getElementById("cuberoot").addEventListener("click", cuberoot);
    // document.getElementById("negate").addEventListener("click", negate);
});