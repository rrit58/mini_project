import { pool } from './config/db.js';

const runMigration = async () => {
    try {
        console.log("Adding columns to users table...");
        await pool.query(`
            ALTER TABLE users 
            ADD COLUMN IF NOT EXISTS phone VARCHAR(20),
            ADD COLUMN IF NOT EXISTS address JSONB,
            ADD COLUMN IF NOT EXISTS gender VARCHAR(20),
            ADD COLUMN IF NOT EXISTS dob DATE,
            ADD COLUMN IF NOT EXISTS image TEXT
        `);
        console.log("Migration successful.");
    } catch (error) {
        console.error("Migration failed:", error);
    } finally {
        await pool.end();
        process.exit();
    }
};

runMigration();
