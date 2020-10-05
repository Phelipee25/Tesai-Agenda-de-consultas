import {createStore} from 'redux'
import handleAppointment from '../Reducer/AppointmentReducer'

const store = createStore(handleAppointment)

export default store