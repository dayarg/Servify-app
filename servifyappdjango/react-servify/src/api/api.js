import React, { useState, useEffect } from 'react';

const UserDetail = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:8000/core/resgister/')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Detalles del usuario:</h1>
            <p>ID: {user.id}</p>
            <p>Nombre: {user.Nombre}</p>
            <p>Apellido: {user.Apellido}</p>
            <p>Correo: {user.Correo}</p>
            <p>ID de usuario: {user.Id_user}</p>
            <p>Teléfono: {user.telefono}</p>
            <p>Contraseña: {user.password}</p>
        </div>
    );
}

export default UserDetail;