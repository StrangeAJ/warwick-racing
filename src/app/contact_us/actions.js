// actions.js
"use server";

import pool from "../../config/db";

export async function addNewContactMessage(name, email, phone, message) {
  if (!name && !email && !phone && !message) {
    throw new Error("All fields can't be empty.");
  }

  await pool.query(
    "INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)",
    [name, email, phone, message]
  );

  return { success: true };
}