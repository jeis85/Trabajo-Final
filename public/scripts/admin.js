console.log('Hola soy admin');
const mostrarUsuarios = async () => {


    try {
        const respuesta = await fetch('http://localhost:9000/api/obtenerUsuario');
        const usuarios = await respuesta.json();

        console.log(usuarios);
        mostrarTabla(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuario', error);
    }

}
    function mostrarTabla(usuarios) {
        const tabla = document.getElementById('miTabla');
        tabla.innerHTML = '';

        usuarios.forEach(usuario => {

            tabla.innerHTML += `
            
            <td>${usuario.nombreCompleto}</td>
            <td>${usuario.correo}</td>
            <td> <button type="button" class="btn btn-danger" id="${usuario._id}" onclick="eliminarUsuario(event)"><i class="bi bi-trash"></i>Eliminar</button></td>
        </tr>
            
            `

        });
    }

    mostrarUsuarios();

    function eliminarUsuario(event){
        console.log('Eliminar');
    const idUsuarioEliminar = event.target.id;
    console.log(idUsuarioEliminar);


    fetch(`http://localhost:9000/api/eliminarUsuario/${idUsuarioEliminar}`, {method: 'DELETE'}).then(
       response => {
        if(!response.ok){
            console.error('Error no se puedo eliminar usuario');
        }
        alert('Usuario eliminado correctamente');
        mostrarUsuarios();
       }).catch(error => {
        console.log('Error al eliminar usuario', error)
       });
    }
    