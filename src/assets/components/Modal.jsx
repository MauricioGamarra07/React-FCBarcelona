import React from 'react'
import '../css/estilo_modal.css'
import Nosotros from './Nosotros'

function Modal() {
    return (
        <>
            <div className='modal-leyendas'>
                <div className='cont-modal card text-black'>
                    <div className='encabezado'>
                        <h3>Nombre del Jugador</h3>
                        <i className='bx bxs-x-square bx-lg'></i>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Modal