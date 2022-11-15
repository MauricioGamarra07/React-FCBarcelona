import React from 'react'
import '../css/estilo_modal.css'

function Modal({ children, estado, cambiarEstado, nombreJugador }) {
    return (
        <>
            {estado &&
                <div className='modal-leyendas'>
                    <div className='cont-modal card text-black'>
                        <div className='encabezado'>
                            <h3>{nombreJugador}</h3>
                        </div>
                        <div className='cerrar'>
                            <i className='bx bxs-x-square bx-lg' onClick={() => {
                                cambiarEstado(false)
                            }}></i>
                        </div>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal