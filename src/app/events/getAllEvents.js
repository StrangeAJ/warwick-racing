'use server'

// Purpose: Get all events from the database.
import pool from '../../config/db';

const getAllEvents = async () => {
    const [rows] = await pool.query('SELECT * FROM events ORDER BY event_date DESC;', []);
    return rows;
    };

export default getAllEvents;