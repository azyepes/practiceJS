// FUNCIONES GLOBALES

function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function sorting(list) {
    list.sort(function(a, b) {
        return a - b;
    });
    return list;
}

function insertar(elemento, cantidad) {
    this.elemento = elemento;
    this.cantidad = cantidad;
}

function ordenar(a, b) {
    if (a.cantidad > b.cantidad) {
        return 1;
    }
    if (a.cantidad < b.cantidad) {
        return -1;
    }
    // a must be equal to b
    return 0;
}

// MEDIA

function calcularMediaButton() {
    const inputLista = document.getElementById("inputLista");
    const listaValue = inputLista.value;

    let lista = listaValue.split(" ");

    let nuevaLista = lista.map(
        function (item) {
            return parseInt(item);
        });

    console.log(nuevaLista, typeof(nuevaLista[0]));

    let media = calcularMedia(nuevaLista);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "La media es: " + media;
}

function calcularMedia(list) {
    let sumaLista = list.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const mediaAritmetica = sumaLista / list.length;

    return mediaAritmetica;
}

// MEDIANA

function calcularMedianaButton() {
    const inputLista = document.getElementById("inputLista");
    const listaValue = inputLista.value;

    let lista = listaValue.split(" ");

    let nuevaLista = lista.map(
        function (item) {
            return parseInt(item);
        });

    console.log(nuevaLista, typeof(nuevaLista[0]));

    let mediana = calcularMediana(nuevaLista);

    let sortList = sorting(nuevaLista);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "Los datos ingresados son: [" + sortList + "] Y la mediana es: " + mediana;
}

function calcularMediana(list) {
    let sortList = sorting(list);

    const mitadLista = parseInt(sortList.length / 2);
    let mediana;

    if (esPar (sortList.length)) {
        const elemento1 = sortList[mitadLista];
        const elemento2 = sortList[mitadLista - 1];
    
        mediana = calcularMedia([elemento1, elemento2]);
    
    } else {
        mediana = sortList[mitadLista];
    }
    return mediana;
}

// MODA

function calcularModaButton() {
    const inputLista = document.getElementById("inputLista");
    const listaValue = inputLista.value;

    let lista = listaValue.split(" ");

    let nuevaLista = lista.map(
        function (item) {
            return parseInt(item);
        });

    console.log(nuevaLista, typeof(nuevaLista[0]));

    let moda = calcularModa(nuevaLista);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "La moda es: " + moda;
}

function calcularModa(list) {
    const sortList = sorting(list);
    let newLista = [];
    let item;
    let lastItem;
    let moda;

    for (let i = 0; i < sortList.length; i++) {
        var cantidad = 0;
        for (let j  = 0; j < sortList.length; j++) {
            item = sortList[i];
            lastItem = item;
            if (sortList[i] == sortList[j]) {
                cantidad++;
            }
        }
        newLista.push (new insertar(item, cantidad));
        if (lastItem == sortList[i+1]) {
            newLista.pop();
        }
    }

    let nuevaListaOrdenada = newLista.sort(ordenar);
    return moda = nuevaListaOrdenada[nuevaListaOrdenada.length - 1].elemento;
}