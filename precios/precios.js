// DESCUENTO

function calcularPrecioConDescuento (precio, descuento) {
    const precioFinal = (precio * (100 - descuento)) / 100;
    return precioFinal;
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    console.log(priceValue, typeof(priceValue), discountValue, typeof(discountValue));

    const precioFinal = calcularPrecioConDescuento (priceValue, discountValue);

    const finalPrice = document.getElementById("finalPrice");
    finalPrice.innerText = "El precio con descuento es $" + precioFinal + " dolares.";
}

// CUPÓN

// function calcularPrecioConCupon (precio, descuento) {
//     const precioFinal = (precio * (100 - descuento)) / 100;
//     return precioFinal;
// }

function buttonPriceCupon() {
    const inputPrice = document.getElementById("inputPriceCupon");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;

    console.log(priceValue, typeof(priceValue));
    console.log(cuponValue, typeof(cuponValue));
    console.log(inputCupon, typeof(inputCupon));

    const finalPriceCupon = document.getElementById("finalPriceCupon");

    const cupon1 = 
        {
            nombre: "bienvenida10",
            descuento: 15
        };

    const cupon2 =
        {
            nombre: "cumpleañosfeliz",
            descuento: 20
        };

    const cupon3 =
        {
            nombre: "sanvalentin02",
            descuento: 10
        };

        console.log(cupon1.nombre, typeof(cupon1.nombre), cuponValue);

    if (cupon1.nombre === cuponValue) {
        const precioFinal = calcularPrecioConDescuento (priceValue, cupon1.descuento);
        finalPriceCupon.innerText = "Usted tiene " + cupon1.descuento + "% de descuento. El precio con descuento es $" + precioFinal + " dolares.";
        console.log(priceValue, cupon1.descuento);
    } else if (cupon2.nombre === cuponValue) {
        const precioFinal = calcularPrecioConDescuento (priceValue, cupon2.descuento);
        finalPriceCupon.innerText = "Usted tiene " + cupon2.descuento + "% de descuento. El precio con descuento es $" + precioFinal + " dolares.";
        console.log("hola 2");
    } else if (cupon3.nombre === cuponValue) {
        const precioFinal = calcularPrecioConDescuento (priceValue, cupon3.descuento);
        finalPriceCupon.innerText = "Usted tiene " + cupon3.descuento + "% de descuento. El precio con descuento es $" + precioFinal + " dolares.";
        console.log("hola 3");
    } else {
        finalPriceCupon.innerText = "Cupón invalido. Por favor ingrese otro.";
        console.log("hola 4");
    }

    
}