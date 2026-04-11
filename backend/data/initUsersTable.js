import { pool } from '../config/db.js';

const initDB = async () => {
    try {
        console.log("Setting up database...");
        
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                reset_token TEXT,
                reset_token_expires TIMESTAMP,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("Successfully created 'users' table.");
    } catch (error) {
        console.error("Error setting up DB:", error);
    } finally {
        await pool.end();
        process.exit();
    }
};

initDB();
