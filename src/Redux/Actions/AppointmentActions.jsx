export function listAppointmentAction(appointments) {
    return{
        type: "LIST_APPOINTMENT",
        appointments

    }
}

export function createAppointmentAction(appointment){
    return {
        type: "CREATE_APPOINTMENT",
        appointment
    }
}

export function updateAppointmentAction(appointment){
    return {
        type: "UPDATE_APPOINTMENT",
        appointment
    }
}

export function deleteAppointmentAction(appointment){
    return {
        type: "DELETE_APPOINTMENT",
        appointment
    }
}