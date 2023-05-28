let topping = prompt("Elija topping Oreo Kitkat o Kinder");
let helado = 250 ;
let precio;
let Preciofinal;

if (topping == "Oreo" || topping == "oreo" || topping == "OREO") {
    precio = 10
    Preciofinal = precio + helado
}
else if (topping == "Kitkat" || topping == "kitkat" || topping == "KITKAT") {
    precio = 15
    Preciofinal = precio + helado
}
else if (topping == "Kinder" || topping == "kinder" || topping == "KINDER") {
    precio = 25
    Preciofinal = precio + helado
}
else {
    alert("No tenemos este topping")
}
alert("El helado cuesta $"+ Preciofinal)