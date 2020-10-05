import React from "react"
import { Button } from '@material-ui/core'
import { DeleteOutline, Edit } from '@material-ui/icons';
import '../App.css';
import { Delete } from "../api/users";
import { deleteAppointmentAction } from '../Redux/Actions/AppointmentActions'
import { connect } from 'react-redux'

const Card = ({ history, appointment, dispatch }) => {
    const appointmentDeleted = async (appointment) => {
        await Delete(appointment.id)
        dispatch(deleteAppointmentAction(appointment))
    }

    return (
        <>
            <div className="card1">
                <div className="row">
                    <div className="col">
                        <h4>Nome</h4>
                        <p>{appointment.nome}</p>
                    </div>
                    <div className="col">
                        <h4>Especialidade</h4>
                        <p>{appointment.especialidade}</p>
                    </div>
                    <div className="col">
                        <h4>Inicio</h4>
                        <p>{appointment.inicioConsulta}</p>
                    </div>
                    <div className="col">
                        <h4>Fim</h4>
                        <p>{appointment.fimConsulta}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Descrição</h4>
                        <p>{appointment.descricao}</p>
                    </div>
                    <div className="col">
                        <div className="row iconCard">
                            <button onClick={() => appointmentDeleted(appointment)} ><DeleteOutline /></button> <button className="editButton" onClick={() => history.push("/edit")}><Edit /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect()(Card)