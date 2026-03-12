import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setupDatabase = async () => {
    try {
        console.log('Reading init.sql...');
        const sqlPath = path.join(__dirname, 'init.sql');
        const sql = fs.readFileSync(sqlPath, 'utf8');

        console.log('Executing SQL...');
        await pool.query(sql);
        console.log('Database tables created successfully.');
        
    } catch (error) {
        console.error('Error setting up the database:', error);
    } finally {
        await pool.end();
        process.exit();
    }
};

setupDatabase();
