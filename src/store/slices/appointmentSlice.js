import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  appointments: [],
  selectedAppointment: null,
  doctorAvailability: [],
  loading: false,
  error: null,
};


export const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
  
    fetchAppointmentsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    
    
    fetchAppointmentsSuccess: (state, action) => {
      state.loading = false;
      state.appointments = action.payload;
      state.error = null;
    },
    
   
    createAppointmentRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    
   
    createAppointmentSuccess: (state, action) => {
      state.loading = false;
      state.appointments.push(action.payload);
      state.error = null;
    },
    
    
    updateAppointmentStatus: (state, action) => {
      state.loading = false;
      const index = state.appointments.findIndex(app => app.id === action.payload.id);
      if (index !== -1) {
        state.appointments[index].status = action.payload.status;
        state.appointments[index].updatedAt = new Date().toISOString();
      }
      state.error = null;
    },
    
  
    selectAppointment: (state, action) => {
      state.selectedAppointment = state.appointments.find(app => app.id === action.payload) || null;
    },
    
    
    fetchDoctorAvailabilityRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    

    fetchDoctorAvailabilitySuccess: (state, action) => {
      state.loading = false;
      state.doctorAvailability = action.payload;
      state.error = null;
    },
    
 
    appointmentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    
    clearSelectedAppointment: (state) => {
      state.selectedAppointment = null;
    },

  
    fetchAppointments: (state, action) => {
      state.appointments = action.payload;
    },
  },
});


export const {
  fetchAppointmentsRequest,
  fetchAppointmentsSuccess,
  createAppointmentRequest,
  createAppointmentSuccess,
  updateAppointmentStatus,
  selectAppointment,
  fetchDoctorAvailabilityRequest,
  fetchDoctorAvailabilitySuccess,
  appointmentFailure,
  clearSelectedAppointment,
  fetchAppointments,
} = appointmentSlice.actions;


export default appointmentSlice.reducer; 
