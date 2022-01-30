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

function buttonPriceCupon() {
    const inputPrice = document.getElementById("inputPriceCupon");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;

    const finalPriceCupon = document.getElementById("finalPriceCupon");

    const cupones = [
        {   nombre: "bienvenida10", descuento: 15},
        {   nombre: "cumpleañosfeliz", descuento: 20},
        {   nombre: "sanvalentin02", descuento: 10}
    ];

    const isCuponValid = function (cupon) {
        return cupon.nombre == cuponValue;
    }

    console.log(cupones.find(isCuponValid));

    const cuponUser = cupones.find(isCuponValid);

    if (!cuponUser) {
        finalPriceCupon.innerText = "Cupón invalido. Por favor ingrese otro.";
        console.log("hola 4");
    } else {
        const precioFinal = calcularPrecioConDescuento (priceValue, cuponUser.descuento);
        finalPriceCupon.innerText = "Usted tiene " + cuponUser.descuento + "% de descuento. El precio con descuento es $" + precioFinal + " dolares.";
        console.log(priceValue, cuponUser.descuento);
    }
}