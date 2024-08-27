import * as React from 'react';
import { DataGrid, GridRowsProp, GridToolbar, GridColDef } from '@mui/x-data-grid';
import getServerSideProps from '@/app/api/getuser';
import router from 'next/router';
import getdata from '@/app/api/route';
import { useState } from 'react';

const s: GridRowsProp = [
    {
        id: 1,
        VisitorID: 1,
        FirstName: 'John',
        LastName: 'Doe',
        Email: 'john.doe@example.com',
        PhoneNumber: '+1234567890',
        IdentificationType: 'Passport',
        IdentificationNumber: 'A1234567',
        VisitPurpose: 'Business Meeting',
        DateOfVisit: '2023-08-25',
        TimeOfEntry: '10:00',
        TimeOfExit: '11:00',
        CreatedAt: '2023-08-25 10:00:00',
    },
    {
        id: 2,
        VisitorID: 2,
        FirstName: 'Jane',
        LastName: 'Smith',
        Email: 'jane.smith@example.com',
        PhoneNumber: '+0987654321',
        IdentificationType: 'Driver License',
        IdentificationNumber: 'B7654321',
        VisitPurpose: 'Interview',
        DateOfVisit: '2023-08-26',
        TimeOfEntry: '09:30',
        TimeOfExit: '10:30',
        CreatedAt: '2023-08-26 09:30:00',
    },
];
const columns: GridColDef[] = [
    { field: 'VisitorID', headerName: 'ID', width: 70 },
    { field: 'FirstName', headerName: 'First Name', width: 150 },
    { field: 'LastName', headerName: 'Last Name', width: 150 },
    { field: 'VisitPurpose', headerName: 'Visit Purpose', width: 200 },
    { field: 'DateOfVisit', headerName: 'Date of Visit', width: 400 },
    { field: 'TimeOfEntry', headerName: 'Time of Entry', width: 150 }];
interface VisitorRow {
    id: number;
    VisitorID: string;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    IdentificationType: string;
    IdentificationNumber: string;
    VisitPurpose: string;
    DateOfVisit: string; // Use Date type if appropriate
    TimeOfEntry: string; // Use Date type if appropriate
    TimeOfExit: string;  // Use Date type if appropriate
    CreatedAt: string;  // Use Date type if appropriate
}
type VisitorRowsArray = VisitorRow[];



export default function DataGridDemo() {
    let [rows, setRows] = useState<VisitorRowsArray>([{
        id: 0,
        VisitorID: '',
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        IdentificationType: '',
        IdentificationNumber: '',
        VisitPurpose: '',
        DateOfVisit: '',
        TimeOfEntry: '',
        TimeOfExit: '',
        CreatedAt: ''
    }])
    async function getvistorsdata() {

        const response = await getdata("visitors")
        if (Array.isArray(response.props.data)) {
            const rows: VisitorRowsArray = response.props.data.map((row: any) => ({
                id: row.id,
                VisitorID: row.VisitorID,
                FirstName: row.FirstName,
                LastName: row.LastName,
                Email: row.Email,
                PhoneNumber: row.PhoneNumber,
                IdentificationType: row.IdentificationType,
                IdentificationNumber: row.IdentificationNumber,
                VisitPurpose: row.VisitPurpose,
                DateOfVisit: row.DateOfVisit,
                TimeOfEntry: row.TimeOfEntry,
                TimeOfExit: row.TimeOfExit,
                CreatedAt: row.CreatedAt
            }));

            setRows(rows);
        } else {
            console.error("Unexpected data format:", response.props.data);
        }

    }
    React.useEffect(
        () => {
            getvistorsdata()
        }, []
    )
    return (
        <div className='w-full border border-green-600 h-2/3'>
            <DataGrid rows={rows} columns={columns} slots={{
                toolbar: GridToolbar,
            }} />
        </div>
    );
}

