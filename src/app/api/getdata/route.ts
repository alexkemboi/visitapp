import { NextResponse } from 'next/server';
import ConnectMysql from '../mysql';

export async function POST(req:Request, res:any) {
   
    }

    export async function PUT() {
      return NextResponse.json({ message: 'Hello - PUT' });
    }
    
    export async function DELETE() {
      return NextResponse.json({ message: 'Hello - DELETE' });
    }
    export async function GET(req: Request) {
      try {
        // Parse query parameters from the URL
        const url = new URL(req.url);
        const table = url.searchParams.get('table');
    
        if (!table) {
          return NextResponse.json({ message: 'Table name is required' }, { status: 400 });
        }
    
        // Query the database
        const [rows] = await (await ConnectMysql()).promise().query(`SELECT * FROM ${table}`);     
    
        return NextResponse.json({ message: rows });
      } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
      }
    }
    
 