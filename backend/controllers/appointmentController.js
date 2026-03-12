import { pool } from '../config/db.js';

// Create a new appointment
export const createAppointment = async (req, res) => {
    try {
        const { 
            firstName, lastName, email, phone, dob, gender, department, doctor, date, time, reason, notes 
        } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !phone || !dob || !gender || !department || !doctor || !date || !time || !reason) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields' });
        }

        const query = `
            INSERT INTO appointments (
                first_name, last_name, email, phone, dob, gender, department, doctor_name, appointment_date, appointment_time, reason, notes
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            RETURNING *;
        `;
        
        const values = [firstName, lastName, email, phone, dob, gender, department, doctor, date, time, reason, notes];

        const result = await pool.query(query, values);
        
        res.status(201).json({ success: true, data: result.rows[0], message: 'Appointment booked successfully' });
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({ success: false, message: 'Server Error while booking appointment' });
    }
};
