import { NextResponse } from 'next/server';
import ConnectMysql from '../mysql';

export async function POST(req:any, res:any) {
  const { firstName, lastName, email, phoneNumber, department, officeLocation }  =  await req.json();
    try {
      const [rows] = await (await ConnectMysql()).promise().query(`INSERT INTO hosts 
                (FirstName, LastName, Email, PhoneNumber, Department, OfficeLocation, CreatedAt) 
                VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
                [firstName, lastName, email, phoneNumber, department, officeLocation]);     
      return NextResponse.json({ message: 'Application submitted successfully' });
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ message: 'Failed to submit application' });
    }
  }

 