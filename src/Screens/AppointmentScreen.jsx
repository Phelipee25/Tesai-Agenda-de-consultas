import React, { useEffect } from "react"
import Card from "../Components/card"
import { Obter } from "../api/users";
import { listAppointmentAction } from "../Redux/Actions/AppointmentActions";
import {connect} from 'react-redux'



const Appointment = ({ history, dispatch, appointments}) => {
    const listAppointment = async () => {

        const appointments = await Obter()
        dispatch(listAppointmentAction(appointments))
    } 

    useEffect(()=> {listAppointment()}, [])


    return (
        <>
        <button className="buttonAdd" onClick={() => history.push("/register")}>ADCIONAR NOVO</button>
        <div className="card2">
            <h1 className="title2">CONSULTAS AGENDADAS</h1>
            {appointments.map(appointment => <Card apointment={appointment} /> )}
        </div>
        </>
    )
}

function mapStoreToProps(store) {
    return {appointments: store.appointments}
}

export default connect (mapStoreToProps) (Appointment)