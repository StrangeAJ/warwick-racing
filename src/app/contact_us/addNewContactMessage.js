"use server"

// Initiate new contact message in the database
import pool from '../../config/db';

const addNewContactMessage = async (name, email, phone, message) => {

    if(!name && !email && !phone && !message) {
        throw new Error("All Fields can't Be Empty");
    }



    const [rows] = await pool.query('INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)', [name, email, phone, message]);
    return rows;
};

export default addNewContactMessage;