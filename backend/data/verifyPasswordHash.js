import { pool } from '../config/db.js';

const checkDB = async () => {
    try {
        const result = await pool.query('SELECT name, email, password FROM users LIMIT 1');
        console.log("User record from database:", result.rows[0]);
    } catch (error) {
        console.error("Error reading database:", error);
    } finally {
        await pool.end();
        process.exit();
    }
};

checkDB();
