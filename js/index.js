const formulario = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const solicitud = document.getElementById("solicitud")
const ruta = document.getElementById("ruta")
const mensaje = document.getElementById("msg")
const errorDisplay = document.getElementById("areaErrores")

let erroresArray = []

const validar = (e) => {
    e.preventDefault()
    erroresArray = []

    if(nombre.value.trim().length === 0){
        erroresArray.push("El nombre no puede estar vacio")
    }
    if(!/^[a-zA-Z0-9]*$/.test(nombre.value.trim())){
        erroresArray.push("El nombre debe empezar por mayuscula y no contener caracteres especiales")
    }
    if(correo.value.trim().length === 0){
        erroresArray.push("El correo no puede estar vacio")
    }
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim())){
        erroresArray.push("El correo debe tener un formato correcto")
    }
    if(mensaje.value.trim().length === 0){
        erroresArray.push("El mensaje no puede estar vacio")
    }
    if(mensaje.value.trim().length < 10){
        erroresArray.push("El mensaje debe tener al menos 10 caracteres")
    }

    if(erroresArray.length === 0 && confirm("Quiere enviar?")){
        formulario.submit()

    }else if(erroresArray.length > 0){
        errorDisplay.textContent = ""
        console.log(erroresArray)

        erroresArray.forEach(function (mensaje) {
            const li = document.createElement("li")
            li.textContent = mensaje
            errorDisplay.appendChild(li)
        })
    }
}
formulario.addEventListener("submit", validar)