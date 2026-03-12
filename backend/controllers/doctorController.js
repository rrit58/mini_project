import { pool } from '../config/db.js';

// Get all doctors
export const getDoctors = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM doctors ORDER BY id ASC');
        res.status(200).json({ success: true, count: result.rows.length, data: result.rows });
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Get a single doctor by ID
export const getDoctorById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM doctors WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: result.rows[0] });
    } catch (error) {
        console.error('Error fetching doctor:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
