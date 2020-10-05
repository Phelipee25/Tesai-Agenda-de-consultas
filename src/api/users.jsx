import Axios from 'axios'

const apiUrl = 'https://apitesai.azurewebsites.net/swagger/v1'

async function Obter () {
    const response = await Axios.get(`${apiUrl}/Consultas`)
    return response.data
}


async function Postar (nome, especialidade, inicioConsulta, fimConsulta, descricao) {
    const response = await Axios.post(`${apiUrl}/Consultas`, {
        nome, 
        especialidade, 
        inicioConsulta, 
        fimConsulta, 
        descricao
    })
    return response.data
}

async function Atualizar (id, appointment, nome, especialidade, inicioConsulta, fimConsulta, descricao) {
    const response = await Axios.patch(`${apiUrl}/Consultas/${id}`, {
        appointment,
        nome, 
        especialidade, 
        inicioConsulta, 
        fimConsulta, 
        descricao
    })
    return response.data
}

async function Delete (id) {
    await Axios.delete(`${apiUrl}/Consultas/${id}`)
}

export {Obter, Postar, Atualizar, Delete}