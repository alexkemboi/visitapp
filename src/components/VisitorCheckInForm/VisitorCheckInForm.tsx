// components/VisitorCheckInForm.tsx
import { useState } from 'react';
import DataGridDemo from '../table';

export default function VisitorCheckInForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        identificationType: '',
        identificationNumber: '',
        visitPurpose: '',
        dateOfVisit: '',
        timeOfEntry: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/api/visitorcheckin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Visitor checked in successfully!');
        } else {
            alert('Failed to check in visitor.');
        }
    };

    return (
        <div className="flex flex-col bg-green-100 border m-10">
            <form onSubmit={handleSubmit} className="bg-transparent p-2 rounded w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Visitor Check-In</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="">
                        <label className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 border border-green-600  rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 border border-green-600  rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 border border-green-600  rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 border border-green-600  rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700">Identification Type</label>
                        <select
                            name="identificationType"
                            value={formData.identificationType}
                            onChange={handleChange}
                            className="w-full px-4 border border-green-600  rounded-lg focus:outline-none"
                            required
                        >
                            <option value="" disabled>Select ID Type</option>
                            <option value="Passport">Passport</option>
                            <option value="Drivers License">Drivers License</option>
                            <option value="National ID">National ID</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="block text-gray-700">Identification Number</label>
                        <input
                            type="text"
                            name="identificationNumber"
                            value={formData.identificationNumber}
                            onChange={handleChange}
                            className="w-full px-4 border border-green-600  rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                    <div className=" col-span-1 md:col-span-2 lg:col-span-3">
                        <label className="block text-gray-700">Visit Purpose</label>
                        <textarea
                            name="visitPurpose"
                            value={formData.visitPurpose}
                            onChange={handleChange}
                            className="w-full px-4 border border-green-600  rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700">Date of Visit</label>
                        <input
                            type="date"
                            name="dateOfVisit"
                            value={formData.dateOfVisit}
                            onChange={handleChange}
                            className="w-full px-4 border border-green-600  rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-1">
                        <label className="block text-gray-700">Time of Entry</label>
                        <input
                            type="time"
                            name="timeOfEntry"
                            value={formData.timeOfEntry}
                            onChange={handleChange}
                            className="w-full px-4 border border-green-600  rounded-lg focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white  px-4 rounded-md border border-green-600 roundover:bg-green-900 transition duration-200"
                    >
                        Check In Visitor
                    </button>
                </div>
            </form>
            <div className='m-4'>
                <DataGridDemo />
            </div>
        </div>
    );
}
