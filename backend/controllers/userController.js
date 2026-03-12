import { pool } from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Missing Details' });
        }

        // Check if user already exists
        const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ success: false, message: 'Email already registered' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user
        const newUserQuery = `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3) RETURNING id, name, email
        `;
        const newUser = await pool.query(newUserQuery, [name, email, hashedPassword]);

        // Create token
        const token = jwt.sign({ id: newUser.rows[0].id }, process.env.JWT_SECRET || 'secret123', {
            expiresIn: '7d',
        });

        res.status(201).json({ success: true, token, user: { name: newUser.rows[0].name } });
    } catch (error) {
        console.error('Error in registerUser:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Missing Details' });
        }

        // Check user
        const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userQuery.rows.length === 0) {
            return res.status(400).json({ success: false, message: 'User does not exist' });
        }
        
        const user = userQuery.rows[0];

        // Match password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }

        // Create token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret123', {
            expiresIn: '7d',
        });

        res.status(200).json({ success: true, token, user: { name: user.name } });
    } catch (error) {
        console.error('Error in loginUser:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Get User Profile
export const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.body;
        
        const userQuery = await pool.query(
            'SELECT id, name, email, phone, address, gender, dob, image, created_at FROM users WHERE id = $1',
            [userId]
        );

        if (userQuery.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, data: userQuery.rows[0] });
    } catch (error) {
        console.error('Error getting user profile:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
// Update User Profile
export const updateUserProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body;
        // Not handling image upload here to keep it simple, but we could accept a base64 or URL

        if (!name) {
            return res.status(400).json({ success: false, message: 'Name is required' });
        }

        const updateQuery = `
            UPDATE users 
            SET name = $1, phone = $2, address = $3, dob = $4, gender = $5
            WHERE id = $6
            RETURNING id, name, email, phone, address, gender, dob, image, created_at
        `;

        const values = [name, phone || null, address || null, dob || null, gender || null, userId];
        const result = await pool.query(updateQuery, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, message: 'Profile updated successfully', data: result.rows[0] });

    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
