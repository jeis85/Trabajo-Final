console.log('hola soy ingreso');

const iniciarSesion = async (event) => {
    event.preventDefault();
    
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;



    console.log(correo, contrasena);

    try {
        const respuesta = await fetch('http://localhost:9000/api/obtenerUsuario');

        const usuarios = await respuesta.json();
        console.log(usuarios);


        const esUsuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);

    
    if(esUsuarioRegistrado){

        const correoAdmin = 'coldayko@hotmail.com';
        if(esUsuarioRegistrado.correo == correoAdmin ) {
alert('Hola administrador ');
window.location.href ='./admin.html'
        } else{
            alert('Ingreso exitoso');
            window.location.href = './index.html'
        }

    }else{
        alert('correo o contraseña incorrecta. Usuario no encontrado! Vuelve a intentar o registrate')
    }
    
    
    
    } catch (error) {
        console.error('Error al verificar inicio de sesion:', error);
    }




}