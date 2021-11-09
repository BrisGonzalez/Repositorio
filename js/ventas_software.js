const txtNumero = document.getElementById("numero");
const lblSalida = document.getElementById("salida");
const btnVerDescuento = document.getElementById("btn_ver_descuento");
btnVerDescuento.addEventListener("click", function (e){
    e.preventDefault();
    let numero = Number(txtNumero.value);
    const precioVenta = 99
    let descuento = 0;
    let ventaTotal;

    if(numero >= 10 && numero <=19){
        descuento = .20;
    }
    else
    if(numero >= 20 && numero <=49){
        descuento = .30;
    }
    else
    if(numero >= 50 && numero <=99){
        descuento = .40;
    }
    else
    if(numero >=100){
        descuento = .50;
    }
    let cantidadADescontar = numero *precioVenta * descuento;
    ventaTotal = (numero * precioVenta) - cantidadADescontar;
    if (numero < 1){
        lblSalida.innerHTML =`
        Error al ingresar la cantidad
        `;
    }
    else{
        lblSalida.innerHTML =`
        Su total a pagar es $${ventaTotal} y su descuento fue de $${cantidadADescontar}
        `;
    }
});
