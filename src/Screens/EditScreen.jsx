import React, { useState } from "react"
import { TextField } from '@material-ui/core'
import { Atualizar } from '../api/users'
import { updateAppointmentAction } from '../Redux/Actions/AppointmentActions'
import { connect } from 'react-redux'







function Edit(props) {
    const [nome, setNome] = useState("")
    const [especialidade, setEspecialidade] = useState("")
    const [inicioConsulta, setInicioConsulta] = useState("")
    const [fimConsulta, setFimConsulta] = useState("")
    const [descricao, setDescricao] = useState("")
    

    const updateAppointment = async (appointment) => {
        await Atualizar(appointment.id, nome, especialidade, inicioConsulta, fimConsulta, descricao)
        props.dispatch(updateAppointmentAction(appointment))
        return appointment
    }

    return (
        <div className="card2">
            <h1 className="title">EDIÇÃO</h1>
            <div className='container'>
                <TextField className="inputText" id="outlined-basic" label="Nome" placeholder="Digite o nome do profissional de saúde" InputLabelProps={{ shrink: true, }} variant="outlined" onChange={(text) => setNome(text)} /><br />
                <TextField className="inputText" id="outlined-basic" label="Especialidade" variant="outlined" placeholder="Digite a especialidade" InputLabelProps={{ shrink: true, }} onChange={(text) => setEspecialidade(text)} /><br />
                <label>Inicio</label>
                <TextField className="inputTime" id="outlined-basic" type="time" variant="outlined" defaultValue="__:__Hora" onChange={(text) => setInicioConsulta(text)} /><br />
                <label>Fim</label>
                <TextField className="inputTime" id="outlined-basic" type="time" variant="outlined" defaultValue="__:__Hora" onChange={(text) => setFimConsulta(text)} /><br />
                <TextField className="descricao" id="outlined-basic" label="Descrição" placeholder=" " multiline rows={5} variant="outlined" InputLabelProps={{ shrink: true, }} onChange={(text) => setDescricao(text)} ></TextField>
                <div className="row">
                    <button className="buttonCancel" onClick={()=>props.history.push('/')}>Cancelar</button>
                    <button className="buttonSave" onClick={updateAppointment}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default connect ()(Edit)