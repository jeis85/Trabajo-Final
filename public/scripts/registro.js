const form = document.getElementById("form")

form.addEventListener("submit", e =>{
    e.preventDefault()
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const datosUsuario = {
        nombreCompleto,
        correo,
        contrasena
    }
    registrarUsuario(datosUsuario)
})
const registrarUsuario = async (user) => {
    try {
        const respuesta = await fetch('http://localhost:9000/api/crearUsuario',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, // Aquí está la corrección
                body: JSON.stringify(user)

            }
        );

        const nuevoUsuario = await respuesta.json();
        if (nuevoUsuario.correo) {
            alert('Registro exitoso');
            window.location.href = './ingreso.html'
        } else {
            console.log(nuevoUsuario);
            alert('Ups! error de registro, intentelo nuevamente')
        }


    } catch (error) {
        console.error(error);
    }

}