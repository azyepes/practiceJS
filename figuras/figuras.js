// FUNCIONES CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es: ${perimetro} cm`);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(`El área del cuadrado es: ${area} cm2`);
}

// CALCULOS CUADRADO

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

// FUNCIONES TRIANGULO

function calcularPerimetroTriangulo() {
    const inputLadoA = document.getElementById("inputTrianguloLadoA");
    const ladoA = parseInt(inputLadoA.value);

    const inputLadoB = document.getElementById("inputTrianguloLadoB");
    const ladoB = parseInt(inputLadoB.value);

    const inputLadoC = document.getElementById("inputTrianguloLadoC");
    const ladoC = parseInt(inputLadoC.value);

    const perimetro = perimetroTriangulo(ladoA, ladoB, ladoC);

    console.log(ladoA, ladoB, ladoC);

    if (ladoA === ladoB) {
        if (ladoA === ladoC) {
            alert(`Triángulo EQUILATERO con área de: ${perimetro} cm2`);
        } else {
            var altura = alturaTriangulo (ladoA, ladoC);
            alert(`Triángulo ISÓCELES con área de: ${perimetro} cm2 y altura de ${altura} cm`);
        }
    } else if (ladoA === ladoC) {
        if (ladoA === ladoB) {
            alert(`Triángulo EQUILATERO con área de: ${perimetro} cm2`);
        } else {
            var altura = alturaTriangulo (ladoA, ladoB);
            alert(`Triángulo ISÓCELES con área de: ${perimetro} cm2 y altura de ${altura} cm`);
        }
    } else if (ladoB === ladoC) {
        if (ladoA === ladoB) {
            alert(`Triángulo EQUILATERO con área de: ${perimetro} cm2`);
        } else {
            var altura = alturaTriangulo (ladoB, ladoA);
            alert(`Triángulo ISÓCELES con área de: ${perimetro} cm2 y altura de ${altura} cm`);
        }
    } else {
        alert(`Triángulo ESCALENO con área de: ${perimetro} cm2`);
    }
}


function calcularAreaTriangulo() {
    const inputLadoA = document.getElementById("inputTrianguloLadoA");
    const ladoA = parseInt(inputLadoA.value);

    const inputLadoB = document.getElementById("inputTrianguloLadoB");
    const ladoB = parseInt(inputLadoB.value);

    const inputLadoC = document.getElementById("inputTrianguloLadoC");
    const ladoC = parseInt(inputLadoC.value);

    console.log(ladoA, ladoB);

    const area = areaTriangulo (ladoA, ladoB);

    if (ladoA === ladoB) {
        if (ladoA === ladoC) {
            alert(`Triángulo EQUILATERO con área de: ${area} cm2`);
        } else {
            var altura = alturaTriangulo (ladoA, ladoC);
            const area = areaTriangulo (ladoA, ladoC);
            alert(`Triángulo ISÓCELES con área de: ${area} cm2 y altura de ${altura} cm`);
        }
    } else if (ladoA === ladoC) {
        if (ladoA === ladoB) {
            alert(`Triángulo EQUILATERO con área de: ${area} cm2`);
        } else {
            var altura = alturaTriangulo (ladoA, ladoB);
            const area = areaTriangulo (ladoA, ladoB);
            alert(`Triángulo ISÓCELES con área de: ${area} cm2 y altura de ${altura} cm`);
        }
    } else if (ladoB === ladoC) {
        if (ladoA === ladoB) {
            alert(`Triángulo EQUILATERO con área de: ${area} cm2`);
        } else {
            var altura = alturaTriangulo (ladoB, ladoA);
            const area = areaTriangulo (ladoB, ladoA);
            alert(`Triángulo ISÓCELES con área de: ${area} cm2 y altura de ${altura} cm`);
        }
    } else {
        alert(`Triángulo ESCALENO con área de: ${area} cm2`);
    }
}

// CALCULOS TRIANGULO

function perimetroTriangulo(ladoA, ladoB, ladoC) { 
    return ladoA + ladoB + ladoC;
}

function alturaTriangulo (ladoA, ladoB) {
    return Math.sqrt(ladoA**2 - (ladoB/2)**2);
}

function areaTriangulo(ladoA, ladoB) {
    return (Math.sqrt(ladoA**2 - (ladoB/2)**2) * ladoB) / 2;
}

// FUNCIONES CIRCULO

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(`El perimetro del circulo es: ${perimetro} cm`);
}


function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(`El área del circulo es: ${area} cm2`);
}

// CALCULO CIRCULO

function perimetroCirculo(radio) {
    return Math.PI * radio;
}

function areaCirculo(radio) {
    return Math.PI * radio**2;
}