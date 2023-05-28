let nombre = ""
function saludo(nombre) {
    if (nombre==""||nombre===undefined) {
        alert("ingresa algo no seas mala onda")
        location.reload();
    } else{
        alert("Bienvenido/a "+ nombre)
    }
}
console.log(saludo(prompt("Ingrese su nombre ")));