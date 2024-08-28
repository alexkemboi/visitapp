// components/user.tsx
import { useState } from 'react';

export default function Userregistration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        department: '',
        officeLocation: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Host added successfully!');
        } else {
            alert('Failed to add host.');
        }
    };

    return (
        <div className="flex justify-center items-center  bg-green-100 w-full h-full">
            <form onSubmit={handleSubmit} className="bg-transparent p-6 rounded w-full h-full">
                <h2 className="text-2xl font-bold mb-6">Add New User</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Column 1 */}
                    <div className="mb-4">
                        <label className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    {/* Column 2 */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Department</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Office Location</label>
                        <input
                            type="text"
                            name="officeLocation"
                            value={formData.officeLocation}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                >
                    Save user
                </button>
            </form>

        </div>
    );
}
