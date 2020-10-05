const replaceAppointment = (appointments, id, appointment) => {
    const indexOf = appointments.findIndex((currentAppointment) => currentAppointment.id === id)
    const args = [indexOf, 1]
    if (appointment) {
        args.push(appointment)
    }
    appointments.splice(...args)

    
    return [...appointments]
}

const initialState = { appointments: [] }

const handleAppointment = (store = initialState, action) => {
    switch (action.type) {
        case "LIST_APPOINTMENTS":
            return { ...store, appointments: action.appointments }
        case "CREATE_APPOINTMENTS":
            return { ...store, appointments: [...store.appointments, action.appointment] }
        case "UPDATE_APPOINTMENTS":
            return { ...store, appointments: replaceAppointment(store.appointments, action.appointment.id, action.appointment) }
        case "DELETE_APPOINTMENTS":
            return { ...store, appointments: replaceAppointment(store.appointments, action.appointment.id) }
        default:
            return store
    }
}

export default handleAppointment