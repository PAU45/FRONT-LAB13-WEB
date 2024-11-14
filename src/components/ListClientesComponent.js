import React, { useEffect, useState } from 'react';
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

export const ListClientesComponent = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        listarClientes();
    }, []);

    const listarClientes = () => {
        ClienteService.getAllClientes().then(response => {
            console.log('Clientes obtenidos:', response.data); // Verifica la respuesta
            setClientes(response.data);
        }).catch(error => {
            console.log('Error al obtener clientes:', error);
        });
    }

    const deleteCliente = (clienteId) => {
        ClienteService.deleteCliente(clienteId).then(response => {
            listarClientes();
        }).catch(error => {
            console.log('Error al eliminar cliente:', error);
        });
    }

    return (
        <div className='container' style={{ marginTop: "80px" }}>
            <h2 className='text-center'>Listado de Clientes</h2>

            <Link to='/add-cliente' className='btn btn-primary'>Agregar Cliente</Link>
            
            <table className="table table-secondary table-hover" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.length > 0 ? (
                            clientes.map(cliente => (
                                <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.email}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-cliente/${cliente.id}`}>Actualizar</Link>
                                        <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleteCliente(cliente.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">No hay clientes disponibles</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ListClientesComponent;