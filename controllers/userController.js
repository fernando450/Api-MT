

export function usuariosGet(nombre,apellidos,edad) {

    try {
        const usuario = {
            msg : 'Usuario encontrado',
            nombre,
            apellidos,
            edad
        };

        return usuario;
    } catch (error) {
        console.log('Error traer el usuario');
        throw error;
    }
}

export function usuariosPost (nombre,apellidos,edad){
    try {
        const usuario = {
            msg: 'post API - usuariosPost',
            nombre,
            apellidos, 
            edad 
        };
        return usuario;
    } catch (error) {
        console.log('Error al crear el usuario');
        throw error;
    }
}

export function usuariosPut(id) {

    try {
        const usuario = {
            msg: 'put API - usuariosPut',
            id
        };
    
        return usuario
    } catch (error) {
        
        console.log('Error al editar el usuario');
        throw error;
    }
}

export function usuariosPatch(id){
    try {
        const usuario = {
            msg: 'patch API - usuariosPatch',
            id
        };
    
        return usuario;
    } catch (error) {
        console.log('Error usuario');
        throw error;
    }
}

export function usuariosDelete(id){
    try {
        const usuario = {
            msg: 'delete API - usuariosDelete',
            id
        };
    
        return usuario;
    } catch (error) {       
        console.log('Error al eliminar el usuario');
        throw error;
    }
}