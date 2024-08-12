import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('users');
    const [users, setUsers] = useState([]);
    const [servicemen, setServicemen] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userSearchTerm, setUserSearchTerm] = useState('');
    const [servicemanSearchTerm, setServicemanSearchTerm] = useState('');
    const [bookingSearchTerm, setBookingSearchTerm] = useState('');
    const [editingServicemanId, setEditingServicemanId] = useState(null);
    const [editingServicemanData, setEditingServicemanData] = useState({ name: '', expertise: '', email: '', phoneNumber: '' });
    const [editingBookingId, setEditingBookingId] = useState(null);
    const [editingBookingData, setEditingBookingData] = useState({ service: '', status: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data...'); // Debugging log
                const usersResponse = await axios.get('http://localhost:8080/api/all');
                setUsers(usersResponse.data);
                console.log('Users response:', usersResponse.data); // Debugging log
                const servicemenResponse = await axios.get('http://localhost:8080/api/technicians/all');
                setServicemen(servicemenResponse.data);
                console.log('Servicemen response:', servicemenResponse.data); // Debugging log
                const bookingsResponse = await axios.get('http://localhost:8080/api/service-requests/get');
                setBookings(bookingsResponse.data);
                console.log('Bookings:', bookingsResponse.data);

    
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    const handleDeleteUser = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;
    
        try {
            await axios.delete(`http://localhost:8080/api/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
            alert("Failed to delete user. Please try again.");
        }
    };
    


    const handleDeleteServiceman = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/technicians/${id}`);
            setServicemen(servicemen.filter(serviceman => serviceman.id !== id));
        } catch (error) {
            console.error('Error deleting serviceman:', error);
        }
    };

   

    const handleEditServiceman = (id) => {
        const servicemanToEdit = servicemen.find(serviceman => serviceman.id === id);
        setEditingServicemanId(id);
        setEditingServicemanData({ ...servicemanToEdit });
    };
    

    const handleSaveServiceman = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/technicians/ser/${editingServicemanId}`, editingServicemanData);
            if (response.status === 200) {
                setServicemen(servicemen.map(serviceman =>
                    serviceman.id === editingServicemanId ? { ...editingServicemanData, id: editingServicemanId } : serviceman
                ));
            } else {
                console.error('Error updating serviceman:', response);
                alert('Failed to update serviceman. Please try again.');
            }
        } catch (error) {
            console.error('Error updating serviceman:', error);
            alert('Failed to update serviceman. Please try again.');
        } finally {
            setEditingServicemanId(null);
            setEditingServicemanData({ name: '', expertise: '', email: '', phoneNumber: '' });
        }
    };
    


    

    const handleSaveBooking = async () => {
        try {
            await axios.put(`/api/bookings/${editingBookingId}`, editingBookingData);
            setBookings(bookings.map(booking => 
                booking.id === editingBookingId ? { ...booking, ...editingBookingData } : booking
            ));
        } catch (error) {
            console.error('Error updating booking:', error);
        } finally {
            setEditingBookingId(null);
            setEditingBookingData({ service: '', status: '' });
        }
    };

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(userSearchTerm.toLowerCase()));
    const filteredServicemen = servicemen.filter(serviceman => serviceman.name.toLowerCase().includes(servicemanSearchTerm.toLowerCase()));
    const filteredBookings = bookings.filter(booking =>
        booking.user && booking.user.name.toLowerCase().includes(bookingSearchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <h2>Admin Dashboard</h2>
                <div className="dropdown">
                    <button className="dropbtn">Dashboard</button>
                    <div className="dropdown-content">
                        <a href="#" onClick={() => setActiveSection('users')}>User Details</a>
                        <a href="#" onClick={() => setActiveSection('servicemen')}>Serviceman Details</a>
                        <a href="#" onClick={() => setActiveSection('bookings')}>Booking Requests</a>
                    </div>
                </div>
            </div>
            <div className="main-content">
                {activeSection === 'users' && (
                    <div>
                        <h2 className='h2'>User Details</h2>
                        <input
                            type="text"
                            placeholder="Search Users..."
                            value={userSearchTerm}
                            onChange={(e) => setUserSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>
                                            <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeSection === 'servicemen' && (
                    <div>
                        <h2 className='h2'>Serviceman Details</h2>
                        <input
                            type="text"
                            placeholder="Search Servicemen..."
                            value={servicemanSearchTerm}
                            onChange={(e) => setServicemanSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Expertise</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredServicemen.map(serviceman => (
                                    <tr key={serviceman.id}>
                                        <td>{serviceman.id}</td>
                                        {editingServicemanId === serviceman.id ? (
                                            <>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={editingServicemanData.name}
                                                        onChange={(e) => setEditingServicemanData({ ...editingServicemanData, name: e.target.value })}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={editingServicemanData.expertise}
                                                        onChange={(e) => setEditingServicemanData({ ...editingServicemanData, expertise: e.target.value })}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="email"
                                                        value={editingServicemanData.email}
                                                        onChange={(e) => setEditingServicemanData({ ...editingServicemanData, email: e.target.value })}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={editingServicemanData.phoneNumber}
                                                        onChange={(e) => setEditingServicemanData({ ...editingServicemanData, phoneNumber: e.target.value })}
                                                    />
                                                </td>
                                                <td>
                                                    <button className="save-button" onClick={handleSaveServiceman}>Save</button>
                                                    <button className="cancel-button" onClick={() => setEditingServicemanId(null)}>Cancel</button>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td>{serviceman.name}</td>
                                                <td>{serviceman.expertise}</td>
                                                <td>{serviceman.email}</td>
                                                <td>{serviceman.phoneNumber}</td>
                                                <td>
                                                    <button className="edit-button" onClick={() => handleEditServiceman(serviceman.id)}>Edit</button>
                                                    <button className="delete-button" onClick={() => handleDeleteServiceman(serviceman.id)}>Delete</button>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeSection === 'bookings' && (
    <div>
        <h2 className='h2'>Booking Requests</h2>
        <input
            type="text"
            placeholder="Search Bookings..."
            value={bookingSearchTerm}
            onChange={(e) => setBookingSearchTerm(e.target.value)}
            className="search-input"
        />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Technician Name</th>
                    <th>Service</th>
                    <th>Technician ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredBookings.map(booking => (
                    <tr key={booking.id}>
                        <td>{booking.id}</td>
                        <td>{booking.user ? booking.user.name : 'N/A'}</td>
                        <td>{booking.address}</td>
                        <td>{booking.description}</td>
                        <td>{booking.serviceType}</td>
                        <td>{booking.technicianId}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)}

            </div>
        </div>
    );
};

export default AdminDashboard;
