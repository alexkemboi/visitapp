"use server"
import mysql from 'mysql2';
export default async function ConnectMysql() {
    
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "visitormanagementdb",
    });
    return connection;
}

