import pg from 'pg';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const { Client } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDB() {
    // 1. Connect to the default 'postgres' database to create our target database
    const client = new Client({
        user: process.env.PG_USER || 'postgres',
        host: process.env.PG_HOST || 'localhost',
        database: 'postgres',
        password: process.env.PG_PASSWORD || 'admin',
        port: process.env.PG_PORT || 5432,
    });

    try {
        await client.connect();
        console.log("Connected to default postgres database.");
        
        const dbName = process.env.PG_DATABASE || 'care_connect';
        // Check if database exists
        const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [dbName]);
        if (res.rowCount === 0) {
            console.log(`Database '${dbName}' does not exist. Creating...`);
            await client.query(`CREATE DATABASE ${dbName}`);
            console.log(`Database '${dbName}' created successfully.`);
        } else {
            console.log(`Database '${dbName}' already exists.`);
        }
    } catch (e) {
        console.error("Error creating database:", e);
    } finally {
        await client.end();
    }

    // 2. Now run the schema setup using the regular pool connection
    // We dynamically import setupDb to ensure the new DB exists first
    try {
        console.log("Setting up tables in the new database...");
        // Since setupDb.js ends the process, let's just do it here instead of importing
        const { pool } = await import('./db.js');
        const sqlPath = path.join(__dirname, 'init.sql');
        const sql = fs.readFileSync(sqlPath, 'utf8');

        await pool.query(sql);
        console.log('Database tables created successfully.');
        await pool.end();
    } catch (error) {
        console.error('Error setting up the tables:', error);
    }
}

initDB();
